import db from "../../../models";

const byBelongsToId = async belongsTo => db.titles_to_main_class_mapper.findAll({ where: { belongsTo } });

export default {
    byBelongsToId,
};
