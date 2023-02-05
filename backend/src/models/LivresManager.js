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
      `select l.id, l.titre, c.login FROM ${this.table} AS l INNER JOIN connexion AS c ON c.id = l.connexion_id  WHERE disponible = ? ORDER BY c.login ASC, l.titre ASC`,
      [1]
    );
  }

  find(id) {
    return this.connection.query(
      `select id, titre, auteur, resume from  ${this.table} where id = ?`,
      [id]
    );
  }

  update(livre, id) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      livre,
      id,
    ]);
  }
}
module.exports = LivresManager;
