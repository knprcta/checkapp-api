const { celebrate, Joi } = require('celebrate');

const validateSignUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateReport = celebrate({
  body: Joi.object().keys({
    id: Joi.number().required(),
    object: Joi.string().required(),
    address: Joi.string().required(),
    rating: Joi.number().required(),
    reportURL: Joi.string().required(),
  }),
});

const validateReportId = celebrate({
  params: Joi.object().keys({
    reportId: Joi.string().length(24).hex().required(),
  }),
});

module.exports = {
  validateSignUp,
  validateSignIn,
  validateReport,
  validateReportId,
};
