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
}
module.exports = LivresManager;
