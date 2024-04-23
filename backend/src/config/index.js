module.exports = {
    server: {
        host: process.env.HOST || "localhost",
        port: process.env.PORT || 5010,
    },
    db: {
        database: process.env.DATABASE_NAME || "colon-classification",
        username: process.env.DATABASE_USERNAME || "postgres",
        password: process.env.DATABASE_PASSWORD || "postgres",
        dialect: process.env.DATABASE_DIALECT || "postgres",
        host: process.env.DB_HOST || "localhost",
        seederStorage: "sequelize",
        seederStorageTableName: "sequelize_seeders",
    },
};
