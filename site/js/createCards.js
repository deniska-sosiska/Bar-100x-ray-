const fs = require('fs');
const random = require('random');

//var
let users = 9;
let cards = [];

let arrayForNonRepeat = ['none'];

//func
function funcToGetStr(nameFile) {
  let words = '';
  let array = [];
  let number = 0;
  let fileThatRead = fs.readFileSync('../files/' + nameFile + '.txt', 'utf-8');
  for (let letter = 0; letter < fileThatRead.length; letter++) {
    if (fileThatRead[letter] == '\n') {
      array.push(words);
      words = '';
      number += 1;
    } else {  words += fileThatRead[letter];  }
  }
  return [array, number];
}

function createCatastrophe(nameArray) {
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


function getAttributeWithOutRepeat(forAttribute) {
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

function getAttribute(forAttribute) {
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



class Card {
  constructor(profession, health, biologicalCharacterization, baggage, hobby, phobias, humanQuality, additionalInfo, action) {
    this.__profession = profession;                                    //Профессия
    this.__health = health;                                            //Здоровье
    this.__biologicalCharacterization = biologicalCharacterization;    //Биологичесткая хар-ка []
    this.__baggage = baggage;                                          //Багаж
    this.__hobby = hobby;                                              //Хобби
    this.__phobias = phobias;                                          //Фобии
    this.__humanQuality = humanQuality;                                //Качество человека
    this.__additionalInfo = additionalInfo;                            //Доп. информация
    this.__action = action;                                            //Спец. действие
  }
}


// int main() {
for (let i = 0; i < users; i++) {
  // получаю атрибуты
  let forProfession = funcToGetStr('Профессии');
  let profession = getAttribute(forProfession);
  let forHealth = funcToGetStr('Болезни');
  let health = getAttribute(forHealth);
  let forBaggage = funcToGetStr('Багаж');
  let baggage = getAttribute(forBaggage);
  let forHobby = funcToGetStr('Хобби');
  let hobby = getAttribute(forHobby);
  let forPhobias = funcToGetStr('Фобии');
  let phobias = getAttribute(forPhobias);
  let forHumanQuality = funcToGetStr('Качество человека');
  let humanQuality = getAttribute(forHumanQuality);

  // Получаю доп. атрибуты
  if (random.int(0, 3) == 3) {
    forAdditionalInfo = funcToGetStr('Дополнительная информация');
    additionalInfo = getAttribute(forAdditionalInfo);
  } else {  additionalInfo = 'none';  }
  if (random.int(0, 3) == 3) {
    forAction = funcToGetStr('Карты действия');
    action = getAttribute(forAction);
  } else {  action = 'none';  }

  // Получаю Биологичесткую характеристику
  let age = random.int(18, 68);
  if (random.int(0, 1) == 1) {  sex = 'Мужчина';  }
  else {  sex = 'Женщина';  }
  if (random.int(0, 3) == 3) {  biologicalCharacterization = [sex, age,'чайлдфри']; }
  else {  biologicalCharacterization = [sex, age];  }

  // создаю/перезаписываю класс, и добавляю его в массив
  let card = new Card(profession, health, biologicalCharacterization, baggage, hobby, phobias, humanQuality, additionalInfo, action);
  cards.push(card);
}

let forCatastrophe = funcToGetStr('Катастрофы');
let catastrophe = createCatastrophe(forCatastrophe);

console.log(cards);
//}
