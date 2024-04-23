import { getTitlesToMainClassMapperService } from "../../services/titles_to_main_class_mapper/index";
import { OK, throwError } from "../../util/helper";

const getTitlesToMainClassMapper = async (req, res) => {
    try {
        console.log("Getting all titles to main class mapper");
        const titlesToMainClassMapper = await getTitlesToMainClassMapperService.byBelongsToId(req.params.id);
        OK(200, res, { data: titlesToMainClassMapper });
    } catch (err) {
        throwError(500, res, err);
    }
};

export default {
    getTitlesToMainClassMapper,
};
