let playername = "John Doe";
console.log(playername);

let playerage = 30;
console.log(playerage);

let isPlayerActive = true;
console.log(isPlayerActive);

let playerSkills: string[] = ["Shooting", "Passing", "Dribbling"];
console.log(playerSkills);

let playerStats: { goals: number; assists: number } = {
  goals: 10,
  assists: 5,
};
console.log(playerStats);

const playerInfo = {
  name: playername,
  age: playerage,
  active: isPlayerActive,
  skills: playerSkills,
  stats: playerStats,
};
console.log(playerInfo);

console.log("This is the Lesson 2 script file.");

console.log("Fixing the tsconfig.json file to set the correct rootDir and outDir for the project.");

playerage = 31; // Updating the player's age
console.log(`Updated player age: ${playerage}`);

function multiply(a: number, b: number): number {
 
    return a * b;
}

console.log(multiply(13493743, 99999));
console.log(multiply(13493743, 967832473));
console.log(multiply(5865489568, 999999999));

let fruits = [];

fruits.push("Date");
fruits.push("Elderberry");

console.log(fruits);
fruits.push("Fig");
console.log(fruits);

fruits.push(5344); 
console.log(fruits);

let person = { //his is an object literal
    name: "Musfiq",
    age: 23,
    isStudent:true,
    country: "Bangladesh",
    };

    person.name="Musfiqur Rahman";
    console.log(person);