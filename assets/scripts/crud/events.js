'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetAllGames = function () {
  api.getAllGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure);
};

const addCrudHandlers = () => {

  $('.get-games-button').on('click', onGetAllGames);

};

module.exports = {
  addCrudHandlers,
};
