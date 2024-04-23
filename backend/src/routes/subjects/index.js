import express from "express";
import subject_controller from "../../controller/subject/index";

const Subject = express.Router();

Subject.get("/", subject_controller.getAllSubjects);

export default Subject;
