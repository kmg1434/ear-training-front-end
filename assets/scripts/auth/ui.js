'use strict';

const vault = require('../vault.js');

// SUCCESS FUNCTIONS

const signUpSuccess = () => {
  $('#sign-up-modal').modal('hide');
  $('.modal-backdrop').remove();
};

const signInSuccess = (data) => {
  vault.user = data.user; // do i need to store this?
  $('#sign-in-modal').modal('hide');
  $('.modal-backdrop').remove();

  //$('#sign-in-btn').hide();
};

const signOutSuccess = () => {
  vault.user = null;
  $('#sign-out-modal').modal('hide');
  $('.modal-backdrop').remove();
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

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  signOutFailure,
};
