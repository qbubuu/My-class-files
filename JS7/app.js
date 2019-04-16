// Dates and times

let val;
const today = new Date();
value = today;
let birthday = new Date('11-1-1984');
birthday = new Date ('April 4, 2001');
value = birthday;

// value = today.getMilliseconds();

const me = {
  age: 23,
  name: "Daniel Maldonado",
  birthdate: new Date ('7/31/1995'),
  favoriteColor: 'red',
  hobbies: ['music', 'magic', 'basketball'],
  getBirthYear: function()  {
    return 2019 - this.age;
  }
};

console.log(me.getBirthYear());

const chris = {
  age: 22,
  name: "Christian Tate",
  birthdate: new Date ('6/6/1996'),
  favoriteColor: 'black',
  hobbies: ['guitar', 'data science', 'bio hacking']

};

console.log(chris.age);
console.log(chris.hobbies[0]);
console.log(`Hi, my name is ${me.name}. I was born on ${me.getBirthYear}, which makes me ${me.age} years old. My favorite color is ${me.favoriteColor} and some of my hobbies are ${me.hobbies[0]}, ${me.hobbies[1]}, and ${me.hobbies[2]}.`);



/*
reduceage function () {
  chris.age = age - 10

};


//******** */

//output

// console.log(value);