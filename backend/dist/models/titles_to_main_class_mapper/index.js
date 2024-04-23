"use strict";

module.exports = function (sequelize, Sequelize) {
  var titles_to_main_class_mapper = sequelize.define("titles_to_main_class_mapper", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false
    },
    classNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    facetFormula: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    tableName: "titles_to_main_class_mapper"
  });
  titles_to_main_class_mapper.associate = function (models) {
    titles_to_main_class_mapper.belongsTo(models.Subject, {
      targetKey: "id",
      foreignKey: "belongsTo"
    });
  };
  return titles_to_main_class_mapper;
};