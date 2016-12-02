'use strict';

const vault = require('../vault.js');

const getGamesSuccess = (data) => {
  console.log(data);
};

const getGamesFailure = () => {
  console.log('error!');
};

const createGameSuccess = (data) => {
  vault.game = data.game;

  //console.log(data);
};

const createGameFailure = () => {
  console.log('error!');
};

const deleteGameSuccess = () => {

  console.log('Woo you deleted it!');
};

const deleteGameFailure = () => {
  console.log('error!');
};

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
};
