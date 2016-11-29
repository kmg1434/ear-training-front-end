'use strict';

const vault = require('../vault');

const signUp = function (data) { // wtf is data
  return $.ajax({
    url: vault.host + '/sign-up/',
    method: 'POST',
    data,
  });
};
