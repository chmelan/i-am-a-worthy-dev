import astromech from './cards/astromech.json';
const checkObjKey = (key: string, myObject: any) => {
  !(key in myObject) && (myObject[key] = {});
};

const checkArrKey = (key: string, myObject: any) => {
  !(key in myObject) && (myObject[key] = []);
};
const updateArr = (item: string, arr: string[]) => {
  arr.indexOf(item) === -1 ? arr.push(item) : null;
};
const parseAbility = (ability: string, card: any) => {
  // if there isn't a triggers property, add it
  checkObjKey('triggers', card);

  //* System Phase *//
  if (ability.includes('During the System Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('attack', card.triggers.combat);
    updateArr('self', card.triggers.combat.attack);
  }

  //* Attack *//
  if (ability.includes('While you perform an attack')) {
    checkObjKey('combat', card.triggers);
    checkArrKey('attack', card.triggers.combat);
    updateArr('self', card.triggers.combat.attack);
  }

  //* Defend *//
  if (ability.includes('While you defend')) {
    checkObjKey('combat', card.triggers);
    checkArrKey('defend', card.triggers.combat);
    updateArr('self', card.triggers.combat.defend);
  }

  //* Actions *//
  if (ability.includes('Action:')) {
    checkArrKey('actions', card.triggers);
    updateArr('special', card.triggers.actions);
  }

  console.log(card);
};

export const parseData = (cards: any) => {
  // map through all cards
  cards.map((card: any) => {
    // map through each side
    card.sides.map((side: any) => {
      parseAbility(side.ability, card);
    });
  });
};
