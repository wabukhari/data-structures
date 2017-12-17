function Stack() {

  var storage = [];

  this.addToStack = function(val) {
    storage.push(val);
  }

  this.removeFromStack = function() {
    if(storage.length) {
      var poppedValue = storage.pop();
      return poppedValue;      
    } else {
      return 'Stack is empty'
    }

  }

  this.stackSize = function(val) {
    return storage.length;
  }

};

var myStack = new Stack()
myStack.addToStack(1)
myStack.addToStack(2)
myStack.removeFromStack()
