'use strict';

const vault = require('../vault');

const signUp = function (data) {
  return $.ajax({
    url: vault.host + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function (data) {
  return $.ajax({
    url: vault.host + '/sign-in/',
    method: 'POST',
    data,
  });
};

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: vault.host + '/sign-out/' + vault.user.id,
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: vault.host + '/change-password/' + vault.user.id,
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
};
