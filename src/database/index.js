const Sequelize = require("sequelize");

const DB_NAME = "la_vie_saude_mental";
const DB_USER = "root";
const DB_PASS = "291131";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
};

let db = {};
try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao conecar uma conexão com o banco de dados");
};

async function hasConection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.error("Erro ao tentar conectar banco de dados1");
    }
};

Object.assign(db, {
    hasConection,
});

module.exports = db;