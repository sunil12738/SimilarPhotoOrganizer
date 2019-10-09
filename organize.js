const execSync = require('child_process').execSync;
const fs = require("fs");
// import { execSync } from 'child_process';  // replace ^ if using ES modules
const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);
let folders = 0
fs.readFile("./list.txt", "utf8", (err, data) => {
  try {
    if (err) throw err
    const jsonFileMap = data.split("\n") //Array
    // console.log(jsonFileMap, typeof jsonFileMap)
    for(let i = 0; i < jsonFileMap.length - 1; ++i) {
      const individual = jsonFileMap[i]
      const splitt = individual.split(" ")
      const aa = Date.now()
      const output1 = execSync("mkdir " + aa, { encoding: 'utf-8' });  // the default is 'buffer'
      for (let j = 0; j < splitt.length; ++j) {
        const output2 = execSync("mv " +  splitt[j] + " " + aa + "/", { encoding: 'utf-8' });  // the default is 'buffer'
      }
      ++folders
    }      
  } catch (e) {
    console.log(e)
  }
})
