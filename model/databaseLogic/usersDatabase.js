const connection = require("../../database/connection");

class usersDatabase {
  static async addUser(username, password, email) {
    const newUser = await connection.pool.query(
      "INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING id, username, email;",
      [username, password, email]
    );
    return newUser.rows;
  }

  static async findByUsername(username) {
    const matchingUser = await connection.pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    return matchingUser.rows;
  }
}

module.exports = usersDatabase;
