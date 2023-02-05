const AbstractManager = require("./AbstractManager");

class EmpruntsManager extends AbstractManager {
  constructor() {
    super({ table: "emprunts" });
  }

  insert(emprunt) {
    return this.connection.query(
      `insert into ${this.table} (livres_id, connexion_id, dateEmprunt) values (?, ?, ?)`,
      [emprunt.livres_id, emprunt.connexion_id, emprunt.dateEmprunt]
    );
  }
}

module.exports = EmpruntsManager;
