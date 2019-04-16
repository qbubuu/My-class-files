//Single-line comment

/* multiline

comment*/

console.log('Hello world!');

let firstName = "Daniel"
let lastName = "Maldonado"

console.log(firstName)
console.log(lastName)

let val;


//Splitting string
val = firstName.split('m');
val = firstName.split('mo');
val = "Today is a beautiful day".split('');

//console.log(val)

//Slicing
val = "California".slice(4);
val = "California".slice(3, 9); //Alt shift down

//console.log(val)
//Escape characters \' \" \`
val = "This is my aunt's house's backyard.";
val = "She said, \"Leggo my aunt's Eggo.\".";
val = 'This is my aunt\'s house.';
val = `"This is my aunt's house," she said.`;
val = `This is ${firstName}'s laptop.`;

//console.log(val)
// template string above = 
// variable interpolation!

// Escape characters (for formatting); \t \n
val = `My todo list:\n\t1) Walk dog\n\t2) Eat ass\n\t3) Cry`

//console.log(val)

console.log(val.length);
let person = {
  name: "Daniel",
  age: 100,
  thoughts: function thoughtProcess(age)  {
    return 500 - age;

  }

}

let newName = new String();
console.log(newName);

console.log(person.age); //property of person
console.log(person.thoughts); //method of 

val = val.toUpperCase();
val = val.toLowerCase();

//INDEXING
// with brackets [*]:
console.log(val[0]);
console.log(val[8]);
console.log(val[9]);
console.log(val[10]);

val = val[0] + val[9] + val[10] + val[11];

//Character at
let char = val.charAt(2);
console.log(`The [2] - indexed character of val is ${char}.`);

//OUTPUT
console.log(val)

