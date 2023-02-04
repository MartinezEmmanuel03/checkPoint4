const AbstractManager = require("./AbstractManager");

class LivresManager extends AbstractManager {
  constructor() {
    super({ table: "livres" });
  }

  insert(livre, id) {
    return this.connection.query(
      `insert into ${this.table} (titre, auteur, resume, disponible,connexion_id) values (?, ?, ?, ?, ?)`,
      [livre.titre, livre.auteur, livre.resume, true, id]
    );
  }

  findByConnexionId(id) {
    return this.connection.query(
      `select id, titre from  ${this.table} WHERE connexion_id = ?`,
      [id]
    );
  }

  findList() {
    return this.connection.query(
      `select id, titre, auteur FROM ${this.table} WHERE disponible = ?`,
      [1]
    );
  }

  find(id) {
    return this.connection.query(
      `select id, titre, auteur, resume from  ${this.table} where id = ?`,
      [id]
    );
  }
}
module.exports = LivresManager;
