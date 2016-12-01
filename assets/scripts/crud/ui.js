'use strict';

const vault = require('../vault.js');

const getGamesSuccess = (data) => {
  console.log(data);
};

const getGamesFailure = () => {
  console.log('error!');
};

module.exports = {
  getGamesSuccess,
  getGamesFailure,
};
