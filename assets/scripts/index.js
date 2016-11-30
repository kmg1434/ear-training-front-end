'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();

  // drop down menue attempt
  $('.dropdown').hover(
    function () {
      $('.dropdown-menu', this).stop(true, true).slideDown('fast');
      $(this).toggleClass('open');
    },
    function () {
      $('.dropdown-menu', this).stop(true, true).slideUp('fast');
      $(this).toggleClass('open');
    }
  );

});
