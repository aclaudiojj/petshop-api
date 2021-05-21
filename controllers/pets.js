const Pet = require("../models/pet");

module.exports = (app) => {
  app.post("/pets", (request, response) => {
    Pet.add(request.body, response);
  });

  app.get("/pets", (_, response) => {
    Pet.list(response);
  });

  app.get("/pets/:id", (request, response) => {
    Pet.findById(parseInt(request.params.id), response);
  });

  app.patch("/pets/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const newPet = request.body;

    Pet.update(id, newPet, response);
  });

  app.delete("/pets/:id", (request, response) => {
    const id = parseInt(request.params.id);

    Pet.delete(id, response);
  });
};
