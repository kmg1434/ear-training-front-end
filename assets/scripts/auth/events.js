'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure);
};

const addHandlers = () => {
  // build HTML first
};

module.exports = {
  addHandlers,
};
