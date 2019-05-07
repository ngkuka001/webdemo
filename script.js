const Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.demo = function() {
    console.log(`this is ${this.name}`);
}

const test = new Person('kuka', 23);
test.demo();