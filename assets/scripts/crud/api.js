'use strict';

const vault = require('../vault.js');
const glob = require('./global.js');

const getAllGames = function () {
  return $.ajax({
    url: vault.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

const createGame = function (data) {
  return $.ajax({
    url: vault.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data,
  });
};

const updateGame = function (data, current) {
  glob.vars.currentGameId = current.game.id;
  vault.game = data.game;
  return $.ajax({
    url: vault.host + '/games/' + glob.vars.currentGameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data,
  });
};

const deleteGame = function (data) {
  return $.ajax({
    url: vault.host + '/games/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
  });
};

module.exports = {
  getAllGames,
  createGame,
  deleteGame,
  updateGame,
};
