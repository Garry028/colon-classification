module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define(
        "Book",
        {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            title: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            subtitle: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            author: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            publisher: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            yop: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            pop: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            editor: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            translator: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            illustrator: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            compiler: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            extractor: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            pagenos: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            isbn: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            size: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            subject: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            format: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            yob: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            classnumber: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            booknumber: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            ascensionnumber: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
        },
        {
            tableName: "books",
        },
    );

    return Book;
};
