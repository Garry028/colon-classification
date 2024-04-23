import fs from "fs";
import path from "path";
import sequelize from "../initializers/db";

const db = {};

const allowedModels = ["book", "titles_to_main_class_mapper", "subject", "titles"];
const a = fs.readdirSync(__dirname).filter(file => {
    return file !== "index.js" && file.slice(-3) !== ".js";
});

async function myFunction () {
    for (let i = 0; i <= a.length; i++) {
        if (allowedModels.includes(a[i])) {
            const module = await import(path.join(__dirname, a[i]));
            const model = module.default(sequelize, Sequelize);
            db[model.name] = model;

            console.log(model);
        }
    }

    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
}
myFunction();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
