var assert = require('assert');
var Record = require('../record.js');


describe('record tests', function(){

  var record;

  beforeEach(function(){
    record = new Record("Young Guns", "Bones", "Rock", 7.99);
  });

  it('should have an artist', function(){
    assert.strictEqual(record.artist, "Young Guns");
  });

  it('should have a title', function(){
    assert.strictEqual(record.title, "Bones");
  });

  it('should have a genre', function(){
    assert.strictEqual(record.genre, "Rock");
  });

  it('should have a price', function(){
    assert.strictEqual(record.price, 7.99);
  });

  it('should print out the Record\'s properties as a string');

});
