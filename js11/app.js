for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(`current number = ${i}`);

};
for (let i = 0; i < 18; i++) {
  if (i == 13) {
    console.log(`${i} is my favorite number!.`);
    
  } else if (i == 15) {
    console.log('YOU WIN!')
    break;
  }
  
    else {
  console.log(i);
  console.log(`current number = ${i}`);
  }
};


//for know the length
//while if you don't
let health = 100;
while (health > 0) {
  health -=10;
  console.log("I've been hit! My health is now " + health + "!");
  
};

/*
if (health = 0) {
  console.log("YOU'RE DEAD.")
}
else {
  console.log("You're still alive")
};
*/

let something = 10

do {
  console.log(something);
  something = something - 2;
} while (something > 0);

console.log(`Smallest value in JavaScript for a number: ${Number.MIN_VALUE}`);



//more complex example
//spread operator "..." countable

let longNight = [...Array(7).keys()];

console.log(typeof longNight);
console.log(Array(12, "fudge"))

do {
  console.log("The night is long and full of terrors...");
  console.log(`${longNight.length} years left.`);
  longNight.pop();
} while (longNight.length >= 1);

let instructors = [
  {name: "Ramon",   title: "STEM Instructor"},
  {name: "Fatima",  title: "STEM Instructor"},
  {name: "Natalie", title: "Education Liason Specialist"},
  {name: "Jayden",  title: "STEM and Healthcare Instructor"}
];

for (let i = 0; i < instructors.length; i++) {
  console.log(instructors[i].name);
};

// A better way of looping through strings


//forEach() METHOD: ()

instructors.forEach(function(person, id) {
  console.log(person.name);
  console.log(instructors[id].title);
}
);

console.log(instructors[0].name);

