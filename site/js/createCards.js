const fs = require('fs');

let array = []

function funcToReadFile(nameFile, nameArray) {
  let words = ''
  fs.readFile('../files/' + nameFile + '.txt', 'utf-8', (err, data) => {
    for (let letter = 0; letter < data.length; letter++) {
      if (data[letter] == '\n') {
        nameArray.push(words);
        words = '';
      }
      else {  words = words + data[letter]; }
    }
    // console.log(array);
    // for (let i = 0; i < array.length; i++) console.log(array[i]);
  });
};

funcToReadFile('Болезни', array);
