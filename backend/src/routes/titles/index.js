import express from "express";
import titles_controller from "../../controller/titles/index";

const Titles = express.Router();

Titles.get("/:id", titles_controller.getTitlesBySubject);

export default Titles;
