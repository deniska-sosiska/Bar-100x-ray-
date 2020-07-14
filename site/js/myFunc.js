const fs = require('fs');
const random = require('random');

let arrayForNonRepeat = ['none'];

let funcToGetStr = function(nameFile) { // Получаю массив строк и количество этих строк
  let words = '';
  let array = [];
  let number = 0;
  let fileThatRead = fs.readFileSync('./site/files/' + nameFile + '.txt', 'utf-8');
  // Изменил (../files/' + nameFile + '.txt') на  (./site/files/' + nameFile + '.txt'),
  // т.к. вызываю главный файл карточек через index.js
  for (let letter = 0; letter < fileThatRead.length; letter++) {
    if (fileThatRead[letter] == '\n') {
      array.push(words);
      words = '';
      number += 1;
    } else {  words += fileThatRead[letter];  }
  }
  return [array, number];
}

let createCatastrophe = function(nameArray) { // Получаю катастрофу и описание катастрофы
  let line = 0;
  while (true) {
    line = random.int(0, nameArray[1] - 2);
    if (line % 2 == 1) {  continue;  }
    else {  break;  }
  }
  for (let i = 0; i < nameArray[1]; i++) {
    if (line == i) {
      nameCatastrophe = nameArray[0][i];
      descriptionCatastrophe = nameArray[0][i + 1];
      break;
    }
  }
  return [nameCatastrophe, descriptionCatastrophe];
}

let getAttribute = function(forAttribute) { // Получаю атрибут из массива
  let exitFromGetAttribute = true;
  while (exitFromGetAttribute) {
    let forRandom = random.int(1, forAttribute[1] - 1);
    for (let i = 0; i < forAttribute[1] - 1; i++) {
      if (forRandom == i) {
        forAAttribute = forAttribute[0][i];
        arrayForNonRepeat.unshift(forAAttribute);
        attribute = getAttributeWithOutRepeat(forAAttribute);
        if (attribute == 'Not this') {
          exitFromGetAttribute = true;
        } else {
          exitFromGetAttribute = false;
          break;
        }
      }
    }
  }
  return attribute;
}

let getAttributeWithOutRepeat = function(forAttribute) { // Проверка на повторение атрибута
  for (let i = 1; i < arrayForNonRepeat.length; i++) {
    if  (arrayForNonRepeat[i] == forAttribute) {
      arrayForNonRepeat.shift();
      attribute = 'Not this';
      break;
    }
    else {  attribute = forAttribute; }
  }
  return attribute;
}

module.exports = {
  funcToGetStr: funcToGetStr,
  createCatastrophe: createCatastrophe,
  getAttribute: getAttribute,
  getAttributeWithOutRepeat: getAttributeWithOutRepeat
}
