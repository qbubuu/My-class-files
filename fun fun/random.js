// Atk, Def, Speed, Quick, Luck
let oppattributes;
let attributes;
let wincount = 0;

//two ways to generate player stats
function custom() {
  attributes = [prompt("Enter a number between 1-100"), prompt("Enter a number between 1-100"), prompt("Enter a number between 1-100"), prompt("Enter a number between 1-100"), prompt("Enter a number between 1-100")]
  console.log(attributes);
};

function random() {
  attributes = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
  console.log("YOUR STATS: " + attributes);
};

//way to generate a difficutly element
function levelselect() {
  level = prompt("Choose difficulty. 1-100");
  console.log("LEVEL: " + level);
};

//creates opponent stats
function generateopp() {
  oppattributes = [Math.floor(Math.random() * level) + 1, Math.floor(Math.random() * level) + 1, Math.floor(Math.random() * level) + 1, Math.floor(Math.random() * level) + 1, Math.floor(Math.random() * level) + 1];
  console.log("OPPONENTS STATS: " + oppattributes);
};

// Competiton based on atk and def
function autobattle() {
  do {
    oppattributes[1] -= attributes[0];
    console.log("OPPONENT HP: " + oppattributes[1]);
    attributes[1] -= oppattributes[0];
    console.log("YOUR HP: " + attributes[1]);
  } while (oppattributes[1] > 0 && attributes[1] > 0)

  if (attributes[1] < 1) {
    console.log("YOU LOSE ROUND 1");
} else if () {
  console.log("It's a tie!!")
  //break;
}
  if (oppattributes[1] < 1) {
    console.log("YOU WIN ROUND 1")
    wincount += 1;
  }
};

// Competition based on speed and quickness
function race() {
  console.log("NOW FOR A RACE")
  console.count('Race was called')
  if (attributes[2] + attributes[3] > oppattributes[2] + oppattributes[3]) {
    console.log("YOU WIN ROUND 2");
    wincount += 1;

 //TIE ELSE IF QUESTION!?!?!?!?!?!?
  } else if (attributes[2] + attributes[3] == oppattributes[2] + oppattributes[3]) {
    console.log("It's a tie!!")
    //break;
  } else {
    console.log("YOU LOST ROUND 2")
  }
};

// Competition based on luck
function gamble() {
  console.log("NOW FOR A ROLL OF THE DICE.")
  if ((Math.floor(Math.random() * 6) + 1)*attributes[4] > (Math.floor(Math.random() * 6) + 1)*oppattributes[4]) {
    console.log("YOU WIN THE FINAL ROUND");
    wincount += 1;
  } else {
    console.log("YOU LOST THE FINAL ROUND");
  }
}

// Win counter
function tally() {
  if (wincount > 1) {
    console.log("YOU WIN THE WAR!")
  } else {
    console.log("YOUR OPPONENT WAS VICTORIOUS")
  }
  wincount = 0;
}

// Main function that starts game
function start() {
  console.log("An enemy approaches.");
  random();
  levelselect();
  generateopp();
  autobattle();
  race();
  gamble();
  tally();
};
