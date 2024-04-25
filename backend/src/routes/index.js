import Classification from "./classification";
import Subject from "./subjects";
import Titles from "./titles";
import TitlesToMainClassMapper from "./titles_to_main_class_mapper";
const routes = app => {
    // app.use("/", (req, res) => {
    //     res.status(200).send({ message: "Welcome to the API" });
    // });
    app.use("/subjects", Subject);
    app.use("/titles_to_main_class_mapper", TitlesToMainClassMapper);
    app.use("/titles", Titles);
    app.use("/classification", Classification);
};

export default routes;
