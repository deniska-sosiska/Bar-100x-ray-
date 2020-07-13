
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

module.exports = Card;
