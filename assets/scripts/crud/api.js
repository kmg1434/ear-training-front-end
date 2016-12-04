'use strict';

const vault = require('../vault.js');

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

const updateGame = function (data) {
  console.log(data);
  return $.ajax({
    url: vault.host + '/games/' + vault.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data,
  });
};

const deleteGame = function (data) {
  return $.ajax({
    url: vault.host + '/games/' + data.game.id,
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
