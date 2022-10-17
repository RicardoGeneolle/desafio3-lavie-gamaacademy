const express = require("express");
const psicologosController = require("../controllers/psicologosController");
const requestLog = require("../middlewares/requestLog");
const routes = express.Router();

routes.get("/psicologos", requestLog, psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologosId);

routes.post("/psicologos", psicologosController.cadastrarPsicologos);

routes.put("/psicologos/:id", psicologosController.atualizarPsicologos);

routes.delete("/psicologos/:id", psicologosController.deletarPsicologos);

module.exports = routes; 