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

const findByConnexionId = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id === req.auth.id) {
    models.livres
      .findByConnexionId(id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  add,
  findByConnexionId,
};
