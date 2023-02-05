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

  findAllEmprunts(id) {
    return this.connection.query(
      `select c.login, l.titre, l.id from  ${this.table} AS e
      INNER JOIN connexion AS c ON c.id = e.connexion_id
      INNER JOIN livres AS l ON l.id = e.livres_id
      WHERE l.connexion_id = ? AND e.rendu = ? ORDER BY e.dateEmprunt ASC`,
      [id, 0]
    );
  }
}

module.exports = EmpruntsManager;
