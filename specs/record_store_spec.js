var assert = require('assert');
var RecordStore = require('../record_store.js');

describe("record store tests", function(){

  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Big Pals", "Glasgow");
  });

  it('should have a Name', function(){
    assert.strictEqual(recordStore.name, "Big Pals");
  });

  it('should have a City', function(){
    assert.strictEqual(recordStore.city, "Glasgow");
  });

  it('should have an inventory, starting empty', function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it('should have a balance');

});
