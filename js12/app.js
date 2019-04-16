//FUNCTIONS

// box for code for later use

// repetitive uses. different depending on what's called

// create paramaters to get them to do different things

// FUNCTION DECLARATION - creating a function


function myFirstFunction() {
  console.log("This is my first function.");

};

// console.log(myFirstFunction());

function p (string) {
  console.log(string);

};

p(5);

function groceries(food1, food2, food3) {
  return `We need to get ${food1}, ${food2}, and ${food3}`
  p("fundam")
};


p(groceries('bananas', 'pears', 'ice cream'));

let todo = {
  tasklist: [],
  add: function(task) {
    this.tasklist.push(task);
  },
  get: function() {
    this.tasklist.forEach(function(task, id) {
      p(`Task ${id + 1}: ${task}`);
    })
  },
  delete(id) {
    this.tasklist.splice(id - 1, 1);
  },
  edit(id, task) {
    this.tasklist[id - 1] = task;
  },
  swap(id1, id2) {
    let T1 = this.tasklist[id1 - 1];
    let T2 = this.tasklist[id2 - 1];
    this.edit(id1, T2);
    this.edit(id2, T1);
  }
};


todo.add("Go Shopping");
todo.add("Go hiking");
todo.add("Go scuba diving");
todo.add("Go to sleep");
todo.delete(4);
todo.get();
todo.swap(1,2)
p(todo.tasklist);

//FUNCTION EXPRESSION

//1: name function

let cheese = function() {
  console.log("I like cheese")
};

cheese();

//2: using a function once after defining it

(function() {
  console.log("an IIFE");
})();

//the last parentheses calls immediately and only once