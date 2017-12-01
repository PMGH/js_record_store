var assert = require('assert');
var RecordStore = require('../record_store.js');

describe("record store tests", function(){

  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Big Pals", "Glasgow");
  });

  it('should have a Name');

  it('should have a City');

  it('should have an inventory, starting empty');

});
