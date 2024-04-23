import db from "../../../models";

const bySubjectId = async belongsTo => db.Titles.findOne({ where: { belongsTo } });

export default {
    bySubjectId,
};
