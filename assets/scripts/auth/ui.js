'use strict';

const vault = require('../vault.js');

// SUCCESS FUNCTIONS

const hideModals = () => {

  $('#sign-up-modal').hide();
  $('#sign-in-modal').hide();
  $('#sign-out-modal').hide();
  $('#change-password-modal').hide();
  $('.modal-backdrop').remove();
};

const signUpSuccess = () => {
  hideModals();
};

const signInSuccess = (data) => {
  vault.user = data.user; // do i need to store this?
  //$('#sign-in-modal').modal('hide');

  hideModals();

  //$('#sign-in-btn').hide();
};

const signOutSuccess = () => {
  vault.user = null;

  hideModals();
};

const changePasswordSuccess = () => {
  hideModals();
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
