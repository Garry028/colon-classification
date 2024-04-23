import express from "express";
import classification_controller from "../../controller/classification/index";

const Classification = express.Router();

Classification.post("/", classification_controller.getColonClassification);

export default Classification;
