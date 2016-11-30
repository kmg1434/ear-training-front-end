'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function (e) {
  e.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure);
  $('#sign-up-modal').modal('hide');
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
};

module.exports = {
  addHandlers,
};
