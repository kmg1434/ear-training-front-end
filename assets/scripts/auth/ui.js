'use strict';

const vault = require('../vault.js');

// SUCCESS FUNCTIONS

const signUpSuccess = () => {
  $('#sign-up-modal').modal('hide');
  $('.sign-up-form').trigger('reset');
};

const signInSuccess = (data) => {
  vault.user = data.user;
  $('.play-ui').show();
  $('.sign-out-btn').show();
  $('.change-password-btn').show();
  $('.sign-in-btn').hide();
  $('.sign-up-btn').hide();
  $('#sign-in-modal').modal('hide');
  $('.sign-in-form').trigger('reset');

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

<<<<<<< HEAD
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
=======
const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide');
  $('.change-password-form').trigger('reset');
};

const authFailure = function () {
  $('.sign-up-fail').show();
  $('.sign-in-fail').show();
  $('.change-pw-fail').show();
  $('.sign-up-fail').html('Oops, something went wrong, make sure all of your info is correct.');
  $('.sign-in-fail').html('Oops, something went wrong, make sure all of your info is correct.');
  $('.change-pw-fail').html('Oops, something went wrong, make sure all of your info is correct.');
>>>>>>> ui
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  authFailure,
};
