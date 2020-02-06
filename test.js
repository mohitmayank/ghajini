var assert = require('assert');
var Ghajini = require('./index'); 

var memo = 1;

describe('initialize', function(next) {
  it('should remeber initial value', function() {
    var store = new Ghajini(5, memo);
    assert.equal(store.value, memo);
  });
  it('should forget initial value after time', function(done) {
    var store = new Ghajini(5, memo);
    setTimeout(function() {
      assert.notEqual(store.value, memo);
      assert.equal(typeof store.value, 'undefined');
      done();
    }, 10);
  });
  it('should forget initial value after string time', function(done) {
    var store = new Ghajini('1s', memo);
    setTimeout(function() {
      assert.notEqual(store.value, memo);
      assert.equal(typeof store.value, 'undefined');
      done();
    }, 1100);
  });
});

describe('set value', function(next) {
  it('should remeber set value', function() {
    var store = new Ghajini(5);
    store.setValue(memo);
    assert.equal(store.value, memo);
  });
  it('should forget set value after time', function(done) {
    var store = new Ghajini(5);
    store.setValue(memo);
    setTimeout(function() {
      assert.notEqual(store.value, memo);
      assert.equal(typeof store.value, 'undefined');
      done();
    }, 10);
  });
});

describe('override timeout', function(next) {
  it('should remeber set value for new time', function(done) {
    var store = new Ghajini(5);
    store.setValue(memo, 15);
    setTimeout(function() {
      assert.equal(store.value, memo);
      done();
    }, 10);
  });
  it('should forget set value after new time', function(done) {
    var store = new Ghajini(15);
    store.setValue(memo, 5);
    setTimeout(function() {
      assert.notEqual(store.value, memo);
      assert.equal(typeof store.value, 'undefined');
      done();
    }, 10);
  });
  it('should remeber set value for new string time', function(done) {
    var store = new Ghajini('1s');
    store.setValue(memo, '2s');
    setTimeout(function() {
      assert.equal(store.value, memo);
      done();
    }, 1100);
  });
});
