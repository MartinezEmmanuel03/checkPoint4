const models = require("../models");

const add = (req, res) => {
  const livre = req.body;

  models.livres
    .insert(livre, req.auth.id)
    .then(([result]) => {
      res.location(`/livres/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
