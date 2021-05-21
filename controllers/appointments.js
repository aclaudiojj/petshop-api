const Appointments = require("../models/appointment");

module.exports = (app) => {
  app.get("/appointments", (_, response) =>
    Appointments.list()
      .then((results) => response.json(results))
      .catch((errors) => response.status(400).json(errors))
  );

  app.get("/appointments/:id", (request, response) =>
    Appointments.findById(parseInt(request.params.id))
      .then((results) => response.json(results))
      .catch((errors) => response.status(400).json(errors))
  );

  app.post("/appointments", (request, response) => {
    const appointment = request.body;

    Appointments.add(appointment)
      .then((newAppointment) => response.status(201).json(newAppointment))
      .catch((errors) => response.status(400).json(errors));
  });

  app.patch("/appointments/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const newApoointment = request.body;

    Appointments.update(id, newApoointment)
      .then((updatedAppointment) => response.json(updatedAppointment))
      .catch((errors) => response.status(400).json(errors));
  });

  app.delete("/appointments/:id", (request, response) => {
    const id = parseInt(request.params.id);

    Appointments.delete(id, response).then(() => response.json());
  });
};
