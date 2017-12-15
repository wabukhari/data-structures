function Set() {

  this.storage = [];
};

Set.prototype.addToSet = function (val) {
  this.storage.push(val);
};

Set.prototype.removeFromSet = function(val) {
  if (this.storage.length) {
    var index = this.storage.indexOf(val)
    index !== -1 ? this.storage.splice(index, 1) : ''
  } 
}

Set.prototype.contains = function(val) {
  return this.storage.includes(val);
}

var mySet = new Set();
mySet.addToSet(4);
mySet.addToSet('hello');


