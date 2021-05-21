class Tables {
  init(connection) {
    this.connection = connection;

    this.createAppointments();
    this.createPets();
  }

  createAppointments() {
    const query =
      "CREATE TABLE IF NOT EXISTS appointments (id int NOT NULL AUTO_INCREMENT, client varchar(11) NOT NULL, pet varchar(30), service varchar(20) NOT NULL, date datetime NOT NULL, created_at datetime DEFAULT now() NOT NULL, status varchar(20) NOT NULL, notes text, PRIMARY KEY(id))";

    this.connection.query(query, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }

  createPets() {
    const query =
      "CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, name varchar(50), image varchar(200), PRIMARY KEY (id))";

    this.connection.query(query, (error) => {
      if (error) {
        console.log(error);
      }
    });
  }
}

module.exports = new Tables();
