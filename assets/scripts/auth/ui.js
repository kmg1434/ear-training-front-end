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
  vault.user = data.user;
  //$('#sign-in-modal').modal('hide');
  $('.sign-out-btn').show();
  $('.change-password-btn').show();
  $('.sign-in-btn').hide();
  $('.sign-up-btn').hide();
  hideModals();

};

const signOutSuccess = () => {
  vault.user = null;
  $('.sign-in-btn').show();
  $('.sign-up-btn').show();
  hideModals();
};

const changePasswordSuccess = () => {
  hideModals();
};

// FAILURE FUNCTIONS

const signUpFailure = () => {
  //console.log('error!');
};

const signInFailure = () => {
  //console.log('error!');
};

const signOutFailure = () => {
  //console.log('error!');
};

const changePasswordFailure = () => {
  //console.log('error!');
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
