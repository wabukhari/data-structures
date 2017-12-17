// function Car (model,color,year){

//         this.model = model;
//         this.color = color;
//         this.year = year;
//         var milage = 0;
//         this.drive = function(){
//           milage++;
//           console.log(`Driving a ${this.color} ${this.model}  ${milage}`);
//         };

// }
// var myCar = new Car("Crown", "Red", 2017)
// console.log(myCar.drive());
// console.log(myCar.drive());

class Car {

  constructor(model,color,year) {
        this.model = model;
        this.color = color;
        this.year = year;
        var milage = 0;
        this.drive = function() {
          milage++;
          console.log(`Driving a ${this.color} ${this.model}  ${milage}`);
          return milage;
        }
  }
  show (){console.log(this.drive())}
}

var myCar= new Car("Crown","Red",2019);
myCar.drive();
myCar.drive();

var presentmilage= myCar.show();
console.log(presentmilage); 