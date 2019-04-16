let chara = [100, 1, 1, 1, 1];
let [hp, skill, power, something, level] = chara;
let game = ["slay the dragon", "save the damsel", "go to space", "relax on the beach", "dollar bills on top of dollar bills", "go fuck yourself"];
let raandom;
let reward;
let difficulty;
let task;
let answer;

// Starts game
function mission () {
    raandom = Math.floor(Math.random() * 5);
    console.log("difficulty: " + raandom);
    difficulty = raandom;
    task = (game[raandom]);
    console.log(task);
    answer = prompt(game[raandom]);
    console.log(answer);
    if (task = answer) {
        success();
    } else {
        console.log("try again");
        mission();
    }
};

// Indicates proper answer to task
function success () {
    console.log("success")
    skill += difficulty*level
    console.log("SKILL: " + skill);
    levelup();
    mission();
};

// Counts skill points and checks for level up
function levelup () {
    if (skill >= 25) {
        level += 1;
        skill = 0;
        console.log("LEVEL UP");
        console.log("Level: " + level);
    }

};