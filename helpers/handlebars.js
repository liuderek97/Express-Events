var register = function(Handlebars) {
  var helpers = {
  inc: function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  }
};

if (Handlebars && typeof Handlebars.registerHelper === "function") {
  for (var prop in helpers) {
      Handlebars.registerHelper(prop, helpers[prop]);
  }
} else {
  return helpers;
}

module.exports.plsWork = function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  }

};

module.exports.register = register;

