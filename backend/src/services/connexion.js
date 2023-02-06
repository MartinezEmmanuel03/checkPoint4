const Joi = require("joi");

const validateConnexion = (data) => {
  return Joi.object({
    login: Joi.string().max(255).presence("required"),
    hashedPassword: Joi.string().max(255).presence("required"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validateConnexion;
