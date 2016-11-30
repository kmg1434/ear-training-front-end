'use strict';

const signUpSuccess = () => {
  $('#sign-up-modal').modal('hide');
};

const failure = () => {
  //console.error(error);
};

module.exports = {
  failure,
  signUpSuccess,
};
