var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from Biblioteca where id = '${id}'`;

  return database.executar(query);
}

// function listar() {
//   var query = `select * from empresa`;

//   return database.executar(query);
// }

function buscarPorCnpj(nome) {
  var query = `select * from Biblioteca where nome = '${nome}'`;

  return database.executar(query);
}

// function cadastrar(razaoSocial, cnpj) {
//   var query = `insert into empresa (razao_social, cnpj) values ('${razaoSocial}', '${cnpj}')`;

//   return database.executar(query);
// }

module.exports = { buscarPorCnpj, buscarPorId };
