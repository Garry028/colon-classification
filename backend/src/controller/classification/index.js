import { OK, cloneDeep, throwError } from "../../util/helper";

const getColonClassification = async (req, res) => {
    try {
        const data = cloneDeep(req.body);

        const cleanedFormula = data.facetFormula.replace(/\[(.*?)\]/g, "$1");

        const fociIndex = cleanedFormula.indexOf(data.title.foci);

        let precedingSymbols = "";

        if (cleanedFormula[fociIndex - 1] && !/[a-zA-Z0-9]/.test(cleanedFormula[fociIndex - 1])) {
            precedingSymbols = cleanedFormula[fociIndex - 1];
        }

        const ans = data.classNumber + precedingSymbols + data.title.classNumber;

        OK(200, res, { data: ans });
    } catch (err) {
        throwError(err.message, 500);
    }
};

export default {
    getColonClassification,
};
