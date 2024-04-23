import express from "express";
import titlesToMainClassMapper_controller from "../../controller/titles_to_main_class_mapper/index";

const TitlesToMainClassMapper = express.Router();

TitlesToMainClassMapper.get("/:id", titlesToMainClassMapper_controller.getTitlesToMainClassMapper);

export default TitlesToMainClassMapper;
