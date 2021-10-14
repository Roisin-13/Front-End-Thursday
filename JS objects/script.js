let darthVader = {
    allegience: "empire",
    weapon: "lightsabre",
    sith: true
}
console.log(darthVader);


console.log(`Darth Vader's allegiance is to the ${darthVader.allegience}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a Sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);
console.log(Object.keys(darthVader).length);

darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia'];

console.log(`darthVader's first child is: ${darthVader.childNames[0]}`)


for (const property in darthVader) {
    console.log(`${property}: ${darthVader[property]}`);
}

darthVader.allegience = "The light side";
console.log(darthVader);
darthVader.sith = false;

delete darthVader.children;

console.log(darthVader);

let { allegiance, weapon, sith, childNames } = darthVader;

console.log(allegiance);
console.log(weapon);
console.log(sith);
console.log(childNames);

darthVader = {};
console.log(darthVader);

