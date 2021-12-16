//here getName is method inside User Array...we use function keyword inside array
let User = [
    name: "Steve",
    age: "45",
    function getName() {
      return 10;
    },
];
  
  //old way to extract name and age
  // let name = User.name;
  // let age = User.age;
  
  //Array deconstruction way
  
  let [ Uname, age, getName ] = User;
  console.log(Uname);
  console.log(Age);
  console.log(getName());