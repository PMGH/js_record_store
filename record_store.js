var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
};

RecordStore.prototype = {

  addRecord: function(record){
    this.inventory.push(record);
  },

  listInventory: function(){
    var inventoryStr = "";
    for (record of this.inventory){
      inventoryStr = inventoryStr + record.artist + ": " + record.title  + "\n";
    }
    return inventoryStr;
  },

  sellRecord: function(record){
    var index = this.inventory.lastIndexOf(record);
    if (index !== -1){
      this.inventory.splice(index, 1);
      this.balance += record.price;
    }
  }

}

module.exports = RecordStore;
