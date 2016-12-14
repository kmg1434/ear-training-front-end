'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');
$('.sign-out-btn').hide();
$('.change-password-btn').hide();

const onGetAllGames = function () {
  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure);
};

const onCreateGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
<<<<<<< HEAD
  //console.log('data.game.lvl: ' + data.game.lvl);
=======
  // // // console.log('data.game.lvl: ' + data.game.lvl);
>>>>>>> ui
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure);
};

const onDeleteGame = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.deleteGame(data.game.id)
    .then(ui.deleteGameSuccess)
    .catch(ui.deleteGameFailure);
};

const onUpdateGame = function (event) {
  event.preventDefault();
  let current = getFormFields(this);
<<<<<<< HEAD
=======
  // // // console.log('update game');
>>>>>>> ui
  let data = {
    game: {
      score: (Math.random() * 100).toFixed(1),
    },
  };
  api.updateGame(data, current)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure);
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
  $('.update-game-form').on('submit', onUpdateGame);
};

module.exports = {
  addCrudHandlers,
};
