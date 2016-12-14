'use strict';

const vault = require('../vault.js');

// SUCCESS FUNCTIONS

const signUpSuccess = () => {
  $('#sign-up-modal').modal('hide');
};

const signInSuccess = (data) => {
  vault.user = data.user;
  $('.play-ui').show();
  $('.sign-out-btn').show();
  $('.change-password-btn').show();
  $('.sign-in-btn').hide();
  $('.sign-up-btn').hide();
  $('#sign-in-modal').modal('hide');

};

const signOutSuccess = () => {
  vault.user = null;
  $('.play-ui').hide();
  $('.sign-in-btn').show();
  $('.sign-up-btn').show();
  $('.change-password-btn').hide();
  $('.sign-out-btn').hide();
  $('.bars').hide();
  $('#sign-out-modal').modal('hide');

};

const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide');
};

// FAILURE FUNCTIONS

const signUpFailure = () => {
  console.log('error!');
};

const signInFailure = () => {
  console.log('error!');
};

const signOutFailure = () => {
  console.log('error!');
};

const changePasswordFailure = () => {
  console.log('error!');
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  signOutFailure,
  changePasswordFailure,
};
