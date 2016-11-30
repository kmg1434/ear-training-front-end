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

module.exports = {
  signUp,
  signIn,
};
