var assert = require('assert');
var RecordCollector = require('../record_collector.js');
var RecordStore = require('../record_store.js');
var Record = require('../record.js');


describe("record collector tests", function(){

  var recordCollector;
  var recordStore;
  var record;
  var record2;
  var record3;

  beforeEach(function(){
    recordCollector = new RecordCollector();
    recordStore = new RecordStore("Big Pals", "Glasgow", 20000);
    record = new Record("Young Guns", "Bones", "Rock", 7.99);
    record2 = new Record("Foo Fighters", "One By One", "Rock", 6.95);
    record3 = new Record("Deadmau5", "For Lack Of A Better Name", "Dance", 6.50);
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
  });

  it('should be able to buy records', function(){
    assert.strictEqual(recordStore.inventory.length, 3);
    recordCollector.buyRecord(recordStore, record);

    assert.deepStrictEqual(recordCollector.collection, [record]);
    assert.strictEqual(recordStore.inventory.length, 2);
  });

  it('should be able to sell records');

});
