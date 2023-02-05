const express = require("express");

const router = express.Router();

const connexionControllers = require("./controllers/connexionControllers");
const livresControllers = require("./controllers/livresControllers");
const itemControllers = require("./controllers/itemControllers");
const empruntsControllers = require("./controllers/empruntsControllers");

const { hashPassword } = require("./services/Auth");
const checkAuth = require("./middlewares/auth");

router.post("/register", hashPassword, connexionControllers.add);
router.post("/login", connexionControllers.validateUser);

router.post("/livres", checkAuth, livresControllers.add);
router.get(
  "/livresByConnexionId/:id",
  checkAuth,
  livresControllers.findByConnexionId
);
router.delete("/livres/:id", checkAuth, livresControllers.destroy);
router.get("/livres", livresControllers.browse);
router.get("/livres/:id", livresControllers.read);
router.put("/livres/:id", checkAuth, livresControllers.edit);

router.post("/emprunts", checkAuth, empruntsControllers.add);
router.get("/emprunts", checkAuth, empruntsControllers.browse);
router.put("/emprunts/:id", checkAuth, empruntsControllers.edit);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
