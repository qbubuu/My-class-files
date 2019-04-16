// let person = 0;
// let person1;
// let person2;

// // let space = true;

 function c(string) {
   console.log(string);
};

// c("butthole");

// function personcreate() {
//   let firstname = prompt("What is your first name?");
//   let lastname = prompt("What is your last name?");
//   let age = prompt("How old are you?");
  
//   if (firstname.length > 0 || lastname.length > 0 || age.length > 0 && person = 0) {
//     console.log(firstname + " " + lastname + " is " + age + " years old.");

// } else if (firstname.length > 0 || lastname.length > 0 || age.length > 0 && person=1)
// }

// // personcreate();
// // personcreate();

// (function google() {
//   c("two buttholes");
// })();

// (function google() {
//   c("two buttholes");
// })();


let person = 1;
let person0;
let person1;
let person2;
let firstname;
let lastname;
let age;


function ask() {
  firstname = prompt("What is your first name?");
  lastname = prompt("What is your last name?");
  age = prompt("How old are you?");
};


function createperson (firstname, lastname, age) {
  if (firstname !== undefined || lastname !== undefined || age !== undefined && person == 1) {
    person0 = [firstname, lastname, age];
    person += 1;
  } else if (firstname !== undefined || lastname !== undefined || age !== undefined && person == 2) {
    person1 = [firstname,lastname,age];
  } else {
    c("Anonymous");
  };

};
// {firstname: firstname, lastname: lastname, age: age}

//binary ifs
//firstname ? firstname : "unknown";

function every() {
  ask();
  createperson();
};

// every(); // ctrl, ? comment out section

let ject = {
  name: "Daniel",
  age: 23,
  add: function(x,y) {
    console.log(x+y);
  },
  subtract: function(x,y) {
    console.log(x-y);
  }
  
};

(function(){
  c(ject)
})();

(function(){
  c(ject.add(9,7))
}());









