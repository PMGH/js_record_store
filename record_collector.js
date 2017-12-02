var RecordCollector = function(cash){
  this.collection = [];
  this.cash = cash;
}

RecordCollector.prototype = {

  buyRecord: function(recordStore, record){
    this.collection.push(recordStore.sellRecord(record));
    this.cash -= record.price;
  },

  sellRecord: function(recordStore, record){
    var index = this.collection.lastIndexOf(record);
    if (index !== -1){
      this.cash += record.price;
      return this.collection.splice(index, 1);
    }
  }

}

module.exports = RecordCollector;
