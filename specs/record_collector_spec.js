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
    recordCollector = new RecordCollector(20);
    recordCollector2 = new RecordCollector(0);
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

  it('should be able to sell records', function(){
    recordCollector.buyRecord(recordStore, record);
    assert.strictEqual(recordCollector.collection.length, 1);
    assert.strictEqual(recordStore.inventory.length, 2);

    recordStore.addRecord(recordCollector.sellRecord(recordStore, record));
    assert.strictEqual(recordCollector.collection.length, 0);
    assert.strictEqual(recordStore.inventory.length, 3);
  });

  it('should have cash that increases and decreases with buying and selling respectively', function(){
    assert.strictEqual(recordCollector.cash, 20);
    recordCollector.buyRecord(recordStore, record);

    assert.strictEqual(recordCollector.cash, 12.01);

    recordStore.addRecord(recordCollector.sellRecord(recordStore, record));

    assert.strictEqual(recordCollector.cash, 20);
  });

  it('should not be able to buy a record if they cannot afford it', function(){
    assert.strictEqual(recordCollector2.collection.length, 0);
    recordCollector2.buyRecord(recordStore, record);

    assert.strictEqual(recordCollector2.collection.length, 0);
  });

  it('should be able to view the total value of their collection', function(){
    recordCollector.buyRecord(recordStore, record);
    recordCollector.buyRecord(recordStore, record3);

    assert.strictEqual(recordCollector.getCollectionValue(), 14.49);
  });

  it('should be able to view the total value of all records of a given Genre', function(){
    var recordCollector3 = new RecordCollector(100);
    recordCollector3.buyRecord(recordStore, record);
    recordCollector3.buyRecord(recordStore, record2);
    recordCollector3.buyRecord(recordStore, record3);

    assert.strictEqual(recordCollector3.totalValueByGenre("Rock"), 14.94);
    assert.strictEqual(recordCollector3.totalValueByGenre("Dance"), 6.50);
  });

  it('should be able to view their most valuable record', function(){
    var recordCollector3 = new RecordCollector(100);
    recordCollector3.buyRecord(recordStore, record);
    recordCollector3.buyRecord(recordStore, record2);
    recordCollector3.buyRecord(recordStore, record3);
    var record4 = new Record("Emancipator", "Seven Seas", "Electornic", 12.99);
    recordCollector3.buyRecord(recordStore, record4);

    assert.strictEqual(recordCollector3.mostValuableRecord(), record4);
  });

  it('should be able to sort their records by value. (ascending or descending)', function(){
    var recordCollector3 = new RecordCollector(100);
    recordCollector3.buyRecord(recordStore, record);
    recordCollector3.buyRecord(recordStore, record2);
    recordCollector3.buyRecord(recordStore, record3);
    var record4 = new Record("Emancipator", "Seven Seas", "Electornic", 12.99);
    recordCollector3.buyRecord(recordStore, record4);

    var ascExpected = [record3, record2, record, record4];
    var descExpected = [record4, record, record2, record3];

    assert.deepStrictEqual(recordCollector3.sortRecordsByValue('asc'), ascExpected);
    assert.deepStrictEqual(recordCollector3.sortRecordsByValue('desc'), descExpected);
  });

});
