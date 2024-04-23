import { getTitleService } from "../../services/titles/index";
import { OK, throwError } from "../../util/helper";

const getTitlesBySubject = async (req, res) => {
    try {
        console.log("Getting all titles");
        const titles = await getTitleService.bySubjectId(req.params.id);
        OK(200, res, { data: titles });
    } catch (err) {
        throwError(500, res, err);
    }
};

export default {
    getTitlesBySubject,
};
