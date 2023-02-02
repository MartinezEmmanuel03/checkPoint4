const AbstractManager = require("./AbstractManager");

class ConnexionManager extends AbstractManager {
  constructor() {
    super({ table: "connexion" });
  }

  insert(connexion) {
    return this.connection.query(
      `INSERT INTO ${this.table} (login, hashedPassword) VALUES (?, ?)`,
      [connexion.login, connexion.hashedPassword]
    );
  }

  login(login) {
    return this.connection.query("select * from connexion where login = ?", [
      login,
    ]);
  }
}
module.exports = ConnexionManager;
