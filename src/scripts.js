console.log("Hello");

let bandNumber = 0;

const takeNumber = (bandName) => {
 bandNumber += 1
 return `${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum");
console.log(scum);
const under = takeNumber("Underdogs");
console.log(under);