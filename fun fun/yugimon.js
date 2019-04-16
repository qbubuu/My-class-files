//curse of dragon
let mon = [2000, 1600];
let atk = mon[0];
let def = mon[1];
let LP1 = 7000;

console.log(atk);
console.log(def);

//blue-eyes white dragon
let mo2 = [3000, 2500];
let atk2 = mo2[0];
let def2 = mo2[1];
let LP2 = 8000;

console.log(atk2);
console.log(def2);

let PLAYERTURN = 1;
console.log(PLAYERTURN);

//needs back ticks vv
console.log(
"PLAYER 1 LP: " +
LP1 +
` The attack did 1000 life points of damage. FIGHT BACK. Type:attackback(). To attack back.`
);

//i like big butts and I cannot lie





//do -while opponent attacks PLAYERTURN if(e.keyCode == 32)
function oppatk() {
do {
LP1 -= 1000;
console.log("OUUUUCH!");
console.log(`PLAYER 1 LP: ${LP1}`);
PLAYERTURN += 1;
} while (PLAYERTURN < 1);
console.log(PLAYERTURN);
};

//function attackback() 
function attackback() {
  if (PLAYERTURN > 0) {
  let attack = atk2 - atk;
  console.log(attack + " points of damage!");
  LP2 -= attack;
  console.log(`PLAYER 2 LP: ${LP2}`);
  PLAYERTURN -= 1;
  oppatk();
  } else {
  console.log("Its not your turn.");
  }
  }

/*
if (PLAYERTURN = 1) {
attackback();
} else {
console.log("Its not your turn");
}
*/

//POKEMAN PRACTICE

//THESE VARS WILL COME IN HANDY TO CHANGE POKEMON
//let activeplayer = "Arcanine";
//let computer = "Raichu"


let arcanine = [250, 5, 15];
let HP1 = arcanine[0];
let PP1 = arcanine[1];

let raichu = [230, 7, 15];
let HP2 = raichu[0];
let PP2 = raichu[1];

function flamethrower() {
if (PP1 > 0) {
HP2 -= 90;
PP1 -= 1;
console.log("Arcanine used flamethrower.");
console.log(`Raichu has ${HP2} HP.`);
} else {
console.log("OUT OF PP");
}
}

function thunderbolt() {
if (PP2 > 0) {
HP1 -= 90;
PP2 -= 1;
console.log("Raichu used thunderbolt.");
console.log(`Arcanine has ${HP1} HP.`);
} else {
console.log("OUT OF PP");
}
}

flamethrower();
flamethrower();
flamethrower();
flamethrower();
flamethrower();
flamethrower();
flamethrower();

console.log(PP1);

//strength, luck, speed

let max = Math.floor(Math.random() * 100) + 1;

//random number between 1 and 100
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);
console.log(Math.floor(Math.random() * 100) + 1);

console.log(max);
console.log(max);