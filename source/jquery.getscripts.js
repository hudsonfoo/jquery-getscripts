(function ($) {
  "use strict";

  if ($.getScripts) { return; }

  $.getScripts = function (options) {
    var _options, _sync, _response;

    _options = $.extend({
      'async': false,
      'cache': true
    }, options);

    if (typeof _options.urls === 'string') {
      _options.urls = [_options.urls];
    }

    _response = [];
    _sync = function () {
      $.ajax({
        url: _options.urls.shift(),
        dataType: 'script',
        cache: _options.cache,
        success: function () {
          _response.push(arguments);
          if (_options.urls.length > 0) {
            _sync();
          } else if (typeof options.success === 'function') {
            options.success($.merge([], _response));
          }
        }
      });
    };

    if (_options.async === true) {
      for (var i = 0; i < _options.urls.length; i++) {
        _response.push($.ajax({
          url: _options.urls[i],
          cache: _options.cache,
          dataType: 'script'
        }));
      }

      options.success($.merge([], _response));
    } else {
      _sync();
    }
  };
}(jQuery));