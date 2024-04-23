const client = require("./db");
const shortid = require("short-uuid");

const getClassNumber = async (titles, mainClassId) => {
    const query = `
    SELECT class_number, foci, title
    FROM title_class_number_mapper
    WHERE main_class_id = $3
      AND foci = $2
      AND LOWER(title) = LOWER($1)
    `;

    try {
        let titleString = "";
        let titleResult = [];
        for (const title of titles) {
            titleString = titleString + title.words + " ";
            const searchResult = await client.query(query, [title.words, title.foci, mainClassId]);
            titleResult.push(searchResult.rows[0]);
        }
        console.log(titleResult);
        if (!titleResult) {
            return null;
        }
        let formula = ["P", "E", "2P", "2P2"];
        const fociToClassNumbers = titleResult.reduce((map, item) => {
            if (!map[item?.foci]) {
                map[item?.foci] = [];
            }
            map[item?.foci].push(item?.class_number);
            return map;
        }, {});

        // Iterate through the formula array and build the answer string
        let classNumber = "T " + formula.map(focus => (fociToClassNumbers[focus] || []).join("")).join("");
        return { classNumber, titleString };
    } catch (err) {
        console.log(err);
        return null;
    }
};

const getBookNumber = (author, yop, yob) => {
    author = author.split(" ");
    author = author[author.length - 1].substring(0, 3).toUpperCase() + "-" + yop + "-" + yob;
    return author;
};
exports.generateColonClassification = async (req, res) => {
    const { title, subTitle, author, publisher, yop, pop, editor, translator, illustrator, compiler, extractor, pageNos, isbn, size, subject, format, yob } = req.body;

    const checkBookQuery = `SELECT classNumber, bookNumber, ascensionNumber FROM Books WHERE title = $1`;
    const checkBookValues = [title];

    const mainClassNumberQuery = `SELECT main_class_number,id FROM main_class_number_mapper WHERE subject LIKE $1`;
    const mainClassNumberValues = [subject];
    try {
        const checkBookResult = await client.query(checkBookQuery, checkBookValues);
        if (checkBookResult.rowCount > 0) {
            return res.send({
                classNumber: checkBookResult.rows[0].classNumber,
                ascensionNumber: checkBookResult.rows[0].ascensionNumber,
                bookNumber: checkBookResult.rows[0].bookNumber,
            });
        }
        const mainClassNumberResult = await client.query(mainClassNumberQuery, mainClassNumberValues);
        if (mainClassNumberResult === null) {
            return res.status(404).send("No class number generated");
        }
        //titleTokens = titleTokens.map(token => token.trim());
        const mainClassNumber = mainClassNumberResult.rows[0].class_number;
        const classNumberResult = await getClassNumber(title, mainClassNumberResult.rows[0].id);
        const ascensionNumber = shortid.generate();
        const bookNumber = await getBookNumber(author, yop, yob);

        await client.query("BEGIN");
        const bookInsertQuery = `INSERT INTO public.books
        (title, subtitle, author, publisher, yop, pop, editor, translator, illustrator, compiler, extractor, pagenos, isbn, "size", subject, format, yob, classnumber, booknumber, ascensionnumber)
        VALUES($1, $2 ,$3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20);
        `;
        const bookInsertValues = [
            classNumberResult.titleString,
            subTitle,
            author,
            publisher,
            yop,
            pop,
            editor,
            translator,
            illustrator,
            compiler,
            extractor,
            pageNos,
            isbn,
            size,
            subject,
            format,
            yob,
            classNumberResult.classNumber,
            bookNumber,
            ascensionNumber,
        ];
        await client.query(bookInsertQuery, bookInsertValues);
        await client.query("COMMIT");
        res.send({
            mainClassNumber,
            classNumber: classNumberResult.classNumber,
            ascensionNumber,
            bookNumber,
        });
    } catch (err) {
        await client.query("ROLLBACK");
        console.log(err);
        res.status(500).send({
            message: "Error generating colon classification",
        });
    }
};
