const connection = require("../infra/db/connection");
const fileUploader = require("../infra/files/fileUploader");

class Pet {
  add(pet, response) {
    const query = "INSERT INTO pets SET ?";

    fileUploader(pet.image, pet.name, (error, newFilePath) => {
      if (error) {
        response.status(400).json({ error });
        return;
      }

      const newPet = {
        name: pet.name,
        image: newFilePath,
      };

      connection.query(query, newPet, (error, _) => {
        if (error) {
          response.status(400).json(error);
          return;
        }

        response.status(201).json(newPet);
      });
    });
  }

  list(response) {
    const query = "SELECT * FROM pets";

    connection.query(query, (error, results) => {
      if (error) {
        response.status(400).json(error);
        return;
      }

      response.status(200).json(results);
    });
  }

  findById(id, response) {
    const query = "SELECT * FROM pets WHERE id = ?";

    connection.query(query, id, (error, results) => {
      if (error) {
        response.status(400).json(error);
        return;
      }

      response.status(200).json(results[0]);
    });
  }

  update(id, newPet, response) {
    const sql = "UPDATE pets SET ? WHERE id = ?";

    connection.query(sql, [newPet, id], (error, results) => {
      if (error) {
        response.status(400).json(error);
        return;
      }

      response.status(200).json(results);
    });
  }

  delete(id, response) {
    const sql = "DELETE FROM pets WHERE id = ?";

    connection.query(sql, id, (error, results) => {
      if (error) {
        response.status(400).json(error);
        return;
      }

      response.status(200).json(results);
    });
  }
}

module.exports = new Pet();
