
(function() {

  'use strict';

  // Backbone Param Router
  // --------------------
  // Extends the default behaviour of Backbones Router
  // by adding extra *param* handling. Meaning that the router can 
  // handle urls with querystrings ie. `/path?alpha=1&beta=3`. With this
  // router you will be able to listen for specific changes in the *alpha* or 
  // *beta* parameter as well as update them easily.
  // 
  // This can be useful when for an example; building a view with alot of inputs, sliders and so on
  // that filters a large dataset. We can then easily let each control listen/set its specific 
  // parameter, and update the browser location to be able to save the control states.
  // 
  // Support AMD as well as browser globals.

  (function(factory) {
    if(typeof define === 'function' && define.amd) {
      define(['underscore', 'backbone'], factory);
    } else {
      factory(_, Backbone);
    }
  }(function(Backbone, _) {

    // Plugin Code
    // -----------------

    _.extend(Backbone.Router.prototype, {
      // ### _extractParameters
      // override default 
      _extractParameters: function(route, fragment) {

      },

      // ### deparam
      // converts a param string back to an object.
      // opposite of [$.param](http://api.jquery.com/jQuery.param/)
      // 
      // inspired by Ben Alman's [deparam](http://benalman.com/code/projects/jquery-bbq/examples/deparam/)
      deparam: function(paramString, coerce) {
        var params = {};
        var coerceTypes = { 'true': true, 'false': false, 'null': null };
        var items = paramString.replace(/\+/g, ' ').split('&');

        // enumerate our parameters.
        for(var i = 0; i < items.length; i++) {
          var param = items[i].split('=');
        }

        return params;
      },

      // ### setParam
      // sets the parameter with the provided key
      // to the provided value.
      // 
      // send in `undefined` as the value to remove the 
      // parameter from the URL.
      setParam: function(key, value) {

      },

      // ### setParams
      // sets the parameters to provided parameter object hash
      setParams: function(obj) {

      },

      // ### getParam
      // returns the value (if any) of the param with 
      // the provided key.
      getParam: function(key) {

      }

    });

  }));

}());
