const fetch = require("node-fetch");

let swappiPromises = [];

for(let i = 1; i < 51; i++)
{
const p = fetch("https://swapi.co/api/people/" + i)
.then(res => res.json())
swappiPromises.push(p);
}

Promise.all(swappiPromises)
.then(data => data.map(thing => console.log(thing.name)))

