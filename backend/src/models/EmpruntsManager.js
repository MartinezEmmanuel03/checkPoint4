const AbstractManager = require("./AbstractManager");

class EmpruntsManager extends AbstractManager {
  constructor() {
    super({ table: "emprunts" });
  }

  insert(emprunt) {
    return this.connection.query(
      `INSERT INTO ${this.table} (livres_id, connexion_id, dateEmprunt) VALUES (?, ?, ?)`,
      [emprunt.livres_id, emprunt.connexion_id, emprunt.dateEmprunt]
    );
  }
}

module.exports = EmpruntsManager;
