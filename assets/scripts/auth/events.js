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
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.failure);
};

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
};

module.exports = {
  addHandlers,
};
