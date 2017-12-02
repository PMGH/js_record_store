var assert = require('assert');
var RecordStore = require('../record_store.js');
var Record = require('../record.js');

describe("record store tests", function(){

  var recordStore;
  var record;

  beforeEach(function(){
    recordStore = new RecordStore("Big Pals", "Glasgow", 20000);
    record = new Record("Young Guns", "Bones", "Rock", 7.99);
    record2 = new Record("Foo Fighters", "One By One", "Rock", 6.95);
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

  it('should be able to return an inventory list', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);

    assert.strictEqual(recordStore.listInventory(), "Young Guns: Bones\nFoo Fighters: One By One\n");
  });

  it('should be able to sell a record and increase balance as a result', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.inventory.length, 2);
    assert.strictEqual(recordStore.balance, 20000);

    recordStore.sellRecord(record);
    assert.strictEqual(recordStore.inventory.length, 1);
    assert.strictEqual(recordStore.inventory[0], record2);
    assert.strictEqual(recordStore.balance, 20007.99);

    recordStore.sellRecord(record); // record already sold
    assert.strictEqual(recordStore.inventory.length, 1);
    assert.strictEqual(recordStore.inventory[0], record2);
    assert.strictEqual(recordStore.balance, 20007.99);
  });

  it('should be able to report the store finances', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);

    assert.strictEqual(recordStore.getFinances(), "Balance: 20000, Inventory Value: 14.94");
  });

  it('should be able to view all Records of a given Genre');

});
