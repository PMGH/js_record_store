var _ = require('lodash');

var RecordCollector = function(cash){
  this.collection = [];
  this.cash = cash;
}

RecordCollector.prototype = {

  buyRecord: function(recordStore, record){
    if (this.cash >= record.price){
      this.collection.push(recordStore.sellRecord(record));
      this.cash -= record.price;
    }
  },

  sellRecord: function(recordStore, record){
    var index = this.collection.lastIndexOf(record);
    if (index !== -1){
      this.cash += record.price;
      return this.collection.splice(index, 1);
    }
  },

  getCollectionValue: function(){
    return _.sumBy(this.collection, function(record){
      return record.price;
    });
  }

}

module.exports = RecordCollector;
