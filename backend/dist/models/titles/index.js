"use strict";

module.exports = function (sequelize, Sequelize) {
  var Titles = sequelize.define("Titles", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: false
    },
    foci: {
      type: Sequelize.STRING,
      allowNull: false
    },
    classNumber: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    tableName: "titles"
  });
  Titles.associate = function (models) {
    Titles.belongsTo(models.titles_to_main_class_mapper, {
      targetKey: "id",
      foreignKey: "belongsTo",
      constraints: false,
      as: "MapperAssociation" // Alias for the association
    });
    Titles.belongsTo(models.Subject, {
      targetKey: "id",
      foreignKey: "belongsTo",
      constraints: false,
      as: "SubjectAssociation" // Alias for the association
    });
  };
  return Titles;
};