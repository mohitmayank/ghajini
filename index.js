var ms = require('ms');

module.exports = function Ghajini(timeout, value) {
  this.setValue = function(value, newTime) {
    var self = this;
    this.value = value;
    var _timeout = newTime || timeout;
    if (typeof _timeout === 'string' || _timeout instanceof String) {
      _timeout = ms(_timeout);
    }
    setTimeout(function() {
      self.value = undefined;
    }, _timeout);
  }

  if (typeof value !== 'undefined') {
    this.setValue(value, timeout);
  }
};
