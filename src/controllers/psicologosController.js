const Psicologos = require("../models/Psicologos");
const bcrypt = require("bcryptjs");
const { where, json } = require("sequelize");
    
//Listar todos Psicologos

const psicologosController = {
    listarPsicologos: async (req, res) => {
      try {
      
      const listadePsicologos = await Psicologos.findOne();

      res.status(200).json(listadePsicologos);
    } catch {
      return res.status(200).json();
    }
  }, 
    
//Listar Psicologos por ID

  listarPsicologosId: async (req, res) => {
      try {
          const listaPsicologosId = await Psicologos.$({
          id
          });
      
          res.json(listaPsicologosId);

  } catch {
    return res.status(404).json("Id não encontrado");
  }
},
  
//Cadastrar Psicologos

   async cadastrarPsicologos (req, res) {

    const { nome, email, senha, apresentacao } = req.body;    
    const newSenha = bcrypt.hashSync(senha, 10);
    const novoPsicologo = await Psicologos.create({
      nome,
      email,
      senha: newSenha,
      apresentacao
    });

         res.status(201).json(novoPsicologo);
   },

  //Atualizar Psicologos

    async atualizarPsicologos(req, res) {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;

      if (!id) return res.status(400).json("Erro na solicitação");
      
      const newSenha = bcrypt.hashSync(senha, 10);

      const psicologoAtualizado = await Psicologos.update({
        nome,
        email,
        senha: newSenha,
        apresentacao
      },
      {
        where: {
          id,
        },
      },
    );
    res.status(201).json("Psicologo Atualizado");
  },
  
  // Deletando Psicologos

    async deletarPsicologos(req, res) {
      try
      {       
      const { id } = req.params;
      await Psicologos.destroy({
        where: {
          id,
        },
      })
  
      res.status(204);

      } catch(error) {
        return res.status(500).json("Ocorreu um grande problema, vai explodir");
      }
  }
};    

  module.exports = psicologosController;