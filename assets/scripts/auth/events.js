'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function (e) {
  e.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
  .then((responseData) => {
    ui.signUpSuccess(responseData);
    return api.signIn(data);
  })
  .then(ui.signInSuccess)
  .catch(ui.signInFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure);
};

const addAuthHandlers = () => {
  $('.play-ui').hide();
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.sign-out-form').on('submit', onSignOut);
  $('.change-password-form').on('submit', onChangePassword);

};

module.exports = {
  addAuthHandlers,
};
