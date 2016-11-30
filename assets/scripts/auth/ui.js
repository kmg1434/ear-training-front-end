'use strict';

// SUCCESS FUNCTIONS

const signUpSuccess = () => {
  console.log('GOT HERE');
};

const signInSuccess = (data) => {
  vault.user = data.user;
  $('.button-bar').show();
  $('.login-alert').text('');
  // hide sign in button so you can't sign in twice
  $('#sign-in-btn').hide();
  $('#sign-in-modal').modal('hide');

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
