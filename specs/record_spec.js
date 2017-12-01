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

  it('should have a title');

  it('should have a genre');

  it('should have a price');

});
