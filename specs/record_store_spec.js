var assert = require('assert');
var RecordStore = require('../record_store.js');
var Record = require('../record.js');

describe("record store tests", function(){

  var recordStore;
  var record;

  beforeEach(function(){
    recordStore = new RecordStore("Big Pals", "Glasgow", 20000);
    record = new Record("Young Guns", "Bones", "Rock", 7.99);
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

  it('should have a balance', function(){
    assert.strictEqual(recordStore.balance, 20000);
  });

  it('should be able to add a record to it\'s inventory', function(){
    recordStore.addRecord(record);

    assert.strictEqual(recordStore.inventory.length, 1);
  });

  it('should be able to return an inventory list');

});
