'use strict';

const vault = require('../vault.js');
const getGames = require('../handlebars_templates/show-games.handlebars');

const getGamesSuccess = (data) => {
  let games = data.games;
  $('.bars').html(getGames(games));
  $('.bars').show();
  $('.ui-feedback').hide();
};

const createGameSuccess = (data) => {
  vault.game = data.game;
  $('#create-game-modal').modal('hide');
  $('.ui-feedback').show();
  $('.ui-feedback').html('Click Get All Games to see your games!');
};

const deleteGameSuccess = () => {
  $('#delete-game-modal').modal('hide');
  $('.ui-feedback').hide();
  $('.delete-ui-feedback').hide();
  $('.ui-feedback').show();
  $('.ui-feedback').html('Click Get All Games to see your updated games!');
};

const updateGameSuccess = () => {
  $('#update-game-modal').modal('hide');
  $('.ui-feedback').show();
  $('.ui-feedback').html('Click Get All Games to see your updated games!');
};

const failure = () => {
  $('.ui-feedback').show();
  $('.ui-feedback').html('Something is not right. Make sure you have filled out all forms with the correct format');
};

const deleteGameFailure = () => {
  $('.delete-ui-feedback').show();
  $('.delete-ui-feedback').html('Something is not right. Make sure you have filled out all forms with the correct format');
};

module.exports = {
  getGamesSuccess,
  createGameSuccess,
  deleteGameSuccess,
  updateGameSuccess,
  failure,
  deleteGameFailure,
};
