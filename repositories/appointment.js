const query = require("../infra/db/queries");

class Appointment {
  add(appointment) {
    const sql = "INSERT INTO appointments SET ?";

    return query(sql, appointment);
  }

  list() {
    const sql = "SELECT * FROM appointments";

    return query(sql);
  }

  findById(id) {
    const sql = "SELECT * FROM appointments WHERE id = ?";

    return query(sql, id);
  }

  update(id, appointment) {
    const sql = "UPDATE appointments SET ? WHERE id = ?";

    return query(sql, [appointment, id]);
  }

  delete(id) {
    const sql = "DELETE FROM appointments WHERE id = ?";

    return query(sql, id);
  }
}

module.exports = new Appointment();
