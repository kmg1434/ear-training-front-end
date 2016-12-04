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
  $('#create-game-modal').modal('hide');
};

const createGameFailure = () => {
  console.log('error!');
};

const deleteGameSuccess = () => {
  $('#delete-game-modal').modal('hide');
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
