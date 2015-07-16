var constants = require('../constants');
var util = require("util");

function ValidationError(message, status) {
  ValidationError.super_(message);
  this.name = this.constructor.name;
  this.message = message;
  this.status = status;
}

util.inherits(ValidationError, Error);

module.exports = {
  ValidationError: ValidationError
}
