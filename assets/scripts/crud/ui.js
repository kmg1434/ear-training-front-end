'use strict';

const vault = require('../vault.js');
const getGames = require('../handlebars_templates/show-games.handlebars');

const getGamesSuccess = (data) => {
  let games = data.games;

  console.log(games); // array of all game objects
  console.log(games[0].id);
  console.log(vault);

  //let userGames = [];
  // for (var i = 0; i < games.length; i++) {
  //   if (games[i].id === vault.game.user.id) {
  //     userGames = data.games[i];
  //   }
  // }

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

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  deleteGameSuccess,
  deleteGameFailure,
};
