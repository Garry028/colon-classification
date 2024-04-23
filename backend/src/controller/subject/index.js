import { getSubjectService } from "../../services/subject/index";
import { OK, throwError } from "../../util/helper";

const getAllSubjects = async (req, res) => {
    try {
        console.log("Getting all subjects");
        const books = await getSubjectService.all();
        OK(200, res, { data: books });
    } catch (err) {
        throwError(500, res, err);
    }
};

export default {
    getAllSubjects,
};
