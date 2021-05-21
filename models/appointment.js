const axios = require("axios");
const connection = require("../infra/db/connection");
const repository = require("../repositories/appointment");
// const moment = require("moment");

class Appointment {
  async add(appointment) {
    // const date = moment(appointment.date).format("YYYY-MM-DD HH::MM::SS");

    // const _appointment = {
    //   ...appointment,
    //   date: date,
    // };

    return repository.add(appointment).then((results) => {
      return {
        ...appointment,
        id: results.insertId,
      };
    });
  }

  list() {
    return repository.list();
  }

  async findById(id) {
    const results = await repository.findById(id);
    const appointment = results[0];
    const cpf = appointment.client;

    const { data } = await axios.get(`http://localhost:8082/${cpf}`);

    appointment.client = data;

    return new Promise((resolve, _) => resolve(appointment));
  }

  update(id, newAppointment) {
    return repository.update(id, newAppointment);
  }

  delete(id) {
    return repository.delete(id);
  }
}

module.exports = new Appointment();
