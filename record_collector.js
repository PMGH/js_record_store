var RecordCollector = function(){
  this.collection = [];
}

RecordCollector.prototype = {

  buyRecord: function(recordStore, record){
    this.collection.push(recordStore.sellRecord(record));
  },

  sellRecord: function(recordStore, record){
    var index = this.collection.lastIndexOf(record);
    if (index !== -1){
      return this.collection.splice(index, 1);
    }
  }

}

module.exports = RecordCollector;
