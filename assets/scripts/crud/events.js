'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');
const glob = require('./global.js');

const onGetAllGames = function () {
  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log('data.game.lvl: ' + data.game.lvl);
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure);
};

const onDeleteGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  console.log(data);
  api.deleteGame(data.game.id)
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameFailure);
};

const onUpdateGame = function () {
  let data = {
    "game": {
      "score": glob.vars.score,
    },
  };
  api.updateGame(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure);
};

const addCrudHandlers = () => {

  $('.get-games-button').on('click', onGetAllGames);
  $('.create-game-button').on('click', function () {
    $('#create-game-modal').modal('show');
  });
  $('.delete-game-button').on('click', function () {
    $('#delete-game-modal').modal('show');
  });
  $('.set-lvl-form').on('submit', onCreateGame);
  $('.delete-game-form').on('submit', onDeleteGame);
  $('.update-game-button').on('click', onUpdateGame);
};

module.exports = {
  addCrudHandlers,
};
