function Queue() {

  this.storage = [];
};

Queue.prototype.addToQueue = function (val) {
  this.storage.push(val);
};

Queue.prototype.removeFromQueue = function () {
  if (this.storage.length) {
    var result = this.storage.shift();
  } else {
    var result = 'Queue is empty';
  }
  return result;
}

Queue.prototype.queueSize = function () {
  return this.storage.length;
}

var myQueue = new Queue;
myQueue.addToQueue(4);
myQueue.queueSize();
myQueue.removeFromQueue();
myQueue.removeFromQueue();


