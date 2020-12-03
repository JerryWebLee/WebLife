/* // 抽象基类
class Vehicle {
  constructor() {
    console.log(new.target);
    // if (new.target === Vehicle) {
    //   throw new Error('不允许实例化基类')
    // }
  }
} 

class Bus extends Vehicle {

}

new Bus()
new Vehicle() */

function Person() {
  console.log(new.target === Person);
}

function Student() {

}

Student.prototype = new Person()

new Student()