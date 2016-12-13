'use strict';

const vault = require('../vault.js');

// const events = require('./events.js');

// SUCCESS FUNCTIONS

const hideModals = () => {
  $('#sign-up-modal').hide();
//  $('#sign-in-modal').hide();
  $('#sign-out-modal').hide();
  $('#change-password-modal').hide();
  $('.modal-backdrop').remove();
};

const signUpSuccess = () => {
  hideModals();
};

const signInSuccess = (data) => {
  vault.user = data.user;
  $('.play-ui').show();
  $('.sign-out-btn').show();
  $('.change-password-btn').show();
  $('.sign-in-btn').hide();
  $('.sign-up-btn').hide();
  $('#sign-in-modal').modal('hide');

  //hideModals();

};

const signOutSuccess = () => {
  vault.user = null;
  $('.play-ui').hide();
  $('.sign-in-btn').show();
  $('.sign-up-btn').show();
  $('.change-password-btn').hide();
  $('.sign-out-btn').hide();
  $('.bars').hide();
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
