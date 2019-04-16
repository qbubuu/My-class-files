// Javascript Project 1

//REPLACING CONSOLE.LOG W C()
function c() {
  console.log(...arguments);
};

// Define current state
let states = {location: "start", possiblestates: ["start", "deathbyhunger", "lunarbase", "vampire room", "vampireroom", "deathbyvampire", "becomevampire", "escortedbyvampire"]};


//START THE GAME
function start() {
  c("Welcome to the TLC 2.0 Console Adventure game.", 
  "\n================", 
  "\nFollow instructions and pay attention to win the game.",
  //Describe stuff in start room
  "\nYou wake up in a torch lit dark room tied to a chair that is itself chained to a wall. Some items lie on a table.",
  "\nYou can [look] around but you can\'t move yet"
  );
};

//STATE FUNCTION
function state() {

};


//HELP FUNCTION
function helps() {

};

//LOOK FUNCTION
function _look() {
  switch(state.location) {
    case "start":
    c("Observing the table, you see a pair of keys jst within reach of your feet. You can [reach] for it just barely.")
      break;
    case "deathbyhunger":
      break;
    case "lunarbase":
      break;
    case "vampireroom":
      break;
    case "deathbyvampire":
      break;
    case "becomevampire": 
      break;
    case "escortedbyvampire":
      break;
  };
};

// LOOK FUNCTION COMMAND
Object.defineProperty(window, "look", {get: _look});





//START GAME
start();





