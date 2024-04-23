import { OK, cloneDeep, throwError } from "../../util/helper";

const getColonClassification = async (req, res) => {
    try {
        const data = cloneDeep(req.body);

        let result = "";
        const cleanedFormula = data.facetFormula.replace(/\[(.*?)\]/g, "$1");

        data.title.map(item => {
            const fociIndex = cleanedFormula.indexOf(item.foci);

            let precedingSymbols = "";

            if (cleanedFormula[fociIndex - 1] && !/[a-zA-Z0-9]/.test(cleanedFormula[fociIndex - 1])) {
                precedingSymbols = cleanedFormula[fociIndex - 1];
            }
            result += precedingSymbols + item.classNumber;
        });

        const ans = data.classNumber + result;

        OK(200, res, { data: ans });
    } catch (err) {
        throwError(err.message, 500);
    }
};

export default {
    getColonClassification,
};
