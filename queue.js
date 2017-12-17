// function Queue() {

//   this.storage = [];
// };
// Queue.prototype.add = function (value){
//   this.storage.push(value);
// }
// Queue.prototype.remove = function (){
//   return this.storage.shift();
// }
// Queue.prototype.size = function (){
//   return this.storage.length();
// }

// var myq=new Queue();
// myq.add("item1");
// myq.add("item2");
// myq.add(3);
// var sizeofQ, removedval;
// sizeofQ=myq.size();
// removedval=myq.remove();

// console.log(`Size of Queue is ${sizeofQ} and removed item is ${removedval}`);


 class Queue {
  constructor(){
    var storage = [];
  }

.add = function (value){
  this.storage.push(value);
}
Queue.prototype.remove = function (){
  return this.storage.shift();
}
Queue.prototype.size = function (){
  return this.storage.length();
}

var myq=new Queue();
myq.add("item1");
myq.add("item2");
myq.add(3);
var sizeofQ, removedval;
sizeofQ=myq.size();
removedval=myq.remove();

console.log(`Size of Queue is ${sizeofQ} and removed item is ${removedval}`);
