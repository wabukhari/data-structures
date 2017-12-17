var Stack = function() {

  this.storage = {};

  this.count = 0

};


  Stack.prototype.push = function(val){
    this.storage[this.count] = val;
    this.count++;
  }

  Stack.prototype.pop = function(){
   if (this.count){
    this.count--;
  }
    return this.storage[this.count];
  }

  Stack.prototype.size = function(){
   return this.count;
  }



