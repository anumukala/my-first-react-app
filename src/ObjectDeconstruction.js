//here getName is method inside User object
let User = {
  name: "Steve",
  age: "45",
  getName() {
    return 10;
  },
};

//old way to extract name and age
// let name = User.name;
// let age = User.age;

//Object deconstruction way

let { Uname, age, getName } = User;
console.log(Uname);
console.log(Age);
console.log(getName());
