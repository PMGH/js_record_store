var RecordCollector = function(){
  this.collection = [];
}

RecordCollector.prototype = {

  buyRecord: function(recordStore, record){
    this.collection.push(recordStore.sellRecord(record));
  } 

}

module.exports = RecordCollector;
