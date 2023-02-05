const models = require("../models");

const dateInscript = () => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const add = (req, res) => {
  const emprunt = req.body;
  emprunt.dateEmprunt = dateInscript();

  models.emprunts
    .insert(emprunt)
    .then(([result]) => {
      res.location(`/emprunt/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
