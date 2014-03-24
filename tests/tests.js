module("Async");
asyncTest("Remote With Cache", function() {
  angular = dojo = Prototype = null;
  try {
    (function($) {
      $.getScripts({
        urls: [
          'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js',
          'http://ajax.googleapis.com/ajax/libs/dojo/1.9.3/dojo/dojo.js',
          'http://ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js'
        ],
        cache: true,
        async: false,
        success: function(response) {
          start();
          notEqual(typeof response, 'undefined', 'Response not undefined');
          notEqual(typeof angular, 'undefined', "Angular not undefined");
          notEqual(typeof dojo, 'undefined', "Dojo not undefined");
          notEqual(typeof Prototype, 'undefined', "Prototype not undefined");
        }
      });
    })(jQuery);
  } catch(e) {
    start();
    ok(false, 'General script failure');
  }
});

module("Sync");
asyncTest("Remote With Cache", function() {
  angular = dojo = Prototype = null;
  try {
    (function($) {
      $.getScripts({
        urls: [
          'http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js',
          'http://ajax.googleapis.com/ajax/libs/dojo/1.9.3/dojo/dojo.js',
          'http://ajax.googleapis.com/ajax/libs/prototype/1.7.1.0/prototype.js'
        ],
        cache: true,
        async: false,
        success: function(response) {
          start();
          notEqual(typeof response, 'undefined', 'Response not undefined');
          notEqual(typeof angular, 'undefined', "Angular not undefined");
          notEqual(typeof dojo, 'undefined', "Dojo not undefined");
          notEqual(typeof Prototype, 'undefined', "Prototype not undefined");
        }
      });
    })(jQuery);
  } catch(e) {
    start();
    ok(false, 'General script failure');
  }
});