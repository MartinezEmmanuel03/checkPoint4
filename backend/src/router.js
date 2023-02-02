const express = require("express");

const router = express.Router();

const connexionControllers = require("./controllers/connexionControllers");
const itemControllers = require("./controllers/itemControllers");

const { hashPassword } = require("./services/Auth");

router.post("/register", hashPassword, connexionControllers.add);
router.post("/login", connexionControllers.validateUser);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
