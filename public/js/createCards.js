const myFunc = require('./myFunc') // Подключаю свои функции и класс
const Card = require('./myClass') // Подключаю свои функции и класс
const random = require('random');

//var
let users = 9;
let cards = [];

// int main() {
for (let i = 0; i < users; i++) {
  // получаю атрибуты
  let forProfession = myFunc.funcToGetStr('Профессии');
  let profession = myFunc.getAttribute(forProfession);
  let forHealth = myFunc.funcToGetStr('Болезни');
  let health = myFunc.getAttribute(forHealth);
  let forBaggage = myFunc.funcToGetStr('Багаж');
  let baggage = myFunc.getAttribute(forBaggage);
  let forHobby = myFunc.funcToGetStr('Хобби');
  let hobby = myFunc.getAttribute(forHobby);
  let forPhobias = myFunc.funcToGetStr('Фобии');
  let phobias = myFunc.getAttribute(forPhobias);
  let forHumanQuality = myFunc.funcToGetStr('Качество человека');
  let humanQuality = myFunc.getAttribute(forHumanQuality);

  // Получаю доп. атрибуты
  if (random.int(0, 3) == 3) {
    forAdditionalInfo = myFunc.funcToGetStr('Дополнительная информация');
    additionalInfo = myFunc.getAttribute(forAdditionalInfo);
  } else {  additionalInfo = 'Нету';  }
  if (random.int(0, 3) == 3) {
    forAction = myFunc.funcToGetStr('Карты действия');
    action = myFunc.getAttribute(forAction);
  } else {  action = 'Нету';  }

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

let forCatastrophe = myFunc.funcToGetStr('Катастрофы');
let catastrophe = myFunc.createCatastrophe(forCatastrophe);
cards.unshift(catastrophe);
// console.log(cards);
module.exports = cards;
//}
