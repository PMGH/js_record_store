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
    var sum = _.sumBy(this.collection, function(record){
      return record.price;
    });
    return Math.round(sum * 100) / 100;
  },

  totalValueByGenre: function(genre){
    var array = _.filter(this.collection, { 'genre': genre });
    var sum = _.sumBy(array, function(record){
      return record.price;
    });
    return Math.round(sum * 100) / 100;
  },

  mostValuableRecord: function(){
    return _.sortBy(this.collection, function(record){
      return record.price;
    })[this.collection.length - 1];
  },

  sortRecordsByValue: function(order){
    return _.orderBy(this.collection, ['price'], [order]);
  }

}

module.exports = RecordCollector;
