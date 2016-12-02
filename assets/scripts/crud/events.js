'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetAllGames = function () {
  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure);
};

const addCrudHandlers = () => {

  $('.get-games-button').on('click', onGetAllGames);
  $('.create-game-button').on('click', onCreateGame);

};

module.exports = {
  addCrudHandlers,
};
