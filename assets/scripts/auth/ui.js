'use strict';

const vault = require('../vault.js');

// SUCCESS FUNCTIONS

const signUpSuccess = () => {
  $('#sign-up-modal').modal('hide');
  $('.modal-backdrop').remove();
};

const signInSuccess = (data) => {
  vault.user = data.user; // do i need to store this?
  //$('#sign-in-btn').hide();
  $('#sign-in-modal').modal('hide');
  $('.modal-backdrop').remove();

};

// FAILURE FUNCTIONS

const signUpFailure = () => {
  console.log('error!');
};

const signInFailure = () => {
  console.log('error!');
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
};
