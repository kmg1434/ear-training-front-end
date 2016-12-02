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

const createGame = function () {
  return $.ajax({
    url: vault.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + vault.user.token,
    },
    data: {
      "game":{
      "lvl":2,
      "score":null
    }
  },
  });
};

module.exports = {
  getAllGames,
  createGame,
};
