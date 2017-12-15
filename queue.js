var Queue = function() {

  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.count++] = val;
};

Queue.prototype.dequeue = function () {
  if (this.count) {
    var result = this.storage['0']
    for (var i = 1; i < this.count; i++) {
      this.storage[i-1] = this.storage[i];
    }
    this.count--;
  return result;
  }
}

Queue.prototype.size = function () {
  return this.count;
}




