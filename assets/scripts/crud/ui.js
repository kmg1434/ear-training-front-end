'use strict';

const vault = require('../vault.js');
const getGames = require('../handlebars_templates/show-games.handlebars');

const getGamesSuccess = (data) => {
  let games = data.games;

  console.log(games); // array of all game objects

  $('.bars').html(getGames(games));
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

const updateGameSuccess = () => {
  $('#update-game-modal').modal('hide');
};

const updateGameFailure = () => {
  console.log('error!');
};

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
  updateGameSuccess,
  updateGameFailure,
};
