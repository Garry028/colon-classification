import db from "../../../models";

const all = async () => db.Subject.findAll();

export default {
    all,
};
