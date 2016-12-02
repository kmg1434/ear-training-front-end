'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onGetAllGames = function () {
  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log('data.lvl: ' + data.game.lvl);
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure);
};

const onDeleteGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log('got here');
  api.deleteGame(data)
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameFailure);
};

const addCrudHandlers = () => {

  $('.get-games-button').on('click', onGetAllGames);
  $('.create-game-button').on('click', function () {
    $('#create-game-modal').modal('show');
  });
  $('.set-lvl-form').on('submit', onCreateGame);
  $('.delete-lvl-form').on('submit', onDeleteGame);
  $('.delete-game-button').on('click', onDeleteGame);

};

module.exports = {
  addCrudHandlers,
};
