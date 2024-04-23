module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define(
        "Subject",
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            subject: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            classNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "subjects",
        },
    );

    return Subject;
};
