// function Stack() {

//   this.storage = [];
// };
// Stack.prototype.add = function (value){
//   this.storage.push(value);
// }
// Stack.prototype.  remove = function (){
//   return this.storage.pop();
// }
// Stack.prototype.size = function (){
//   return this.storage.length();
// }

class Stack{

    constructor(){

        var storage = [];
       
      this.add = function (value){
          storage.push(value);
          }      
      this.remove = function (){
        return storage.pop();  
      }
      this.size = function (){
        return storage.length;  
      };

    };
}    
var myStack=new Stack();
myStack.add("item1");
myStack.add("item2");
myStack.add(3);
var sizeofQ, removedval;
sizeofQ=myStack.size();
removedval=myStack.remove();
console.log(myStack);

console.log(`Size of Stack is ${sizeofQ} and removed item is ${removedval}`);