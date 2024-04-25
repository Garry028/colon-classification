import db from "../../../models";

const bySubjectId = async belongsTo => db.Titles.findAll({ where: { belongsTo } });

export default {
    bySubjectId,
};
