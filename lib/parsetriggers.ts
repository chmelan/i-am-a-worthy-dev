import manifest from "./data/manifest.json"
import fs from "fs"

//Add empty object to key if key doesn't exist
const checkObjKey = (key: string, myObject: any) => {
  !(key in myObject) && (myObject[key] = {});
};

//Add empty array to key if key doesn't exist
const checkArrKey = (key: string, myObject: any) => {
  !(key in myObject) && (myObject[key] = []);
};


// Push item to array if it doesnt already exist
const updateArr = (item: string, arr: string[]) => {
  arr.indexOf(item) === -1 ? arr.push(item) : null;
};


// add trigger data to card based on text in ability

const parseAbility = (ability: string, card: any) => {
  // if there isn't a triggers property, add it
  checkObjKey('triggers', card);

 //* Setup  Phase *// TODO ** GET MORE GRANULAR
if (ability.includes('Setup:')) {
  checkObjKey('phases', card.triggers);
  checkArrKey('setup', card.triggers.phases);
  updateArr('during', card.triggers.phases.setup);
}
if (ability.includes('At the end of Setup')) {
  checkObjKey('phases', card.triggers);
  checkArrKey('setup', card.triggers.phases);
  updateArr('end', card.triggers.phases.setup);
}

 //* Planning  Phase *//
 if (ability.includes('At the start of the Planning Phase') || (ability.includes("the start of the next Planning Phase"))) {
  checkObjKey('phases', card.triggers);
  checkArrKey('planning', card.triggers.phases);
  updateArr('start', card.triggers.phases.planning);
}
if (ability.includes('During the Planning Phase')) {
  checkObjKey('phases', card.triggers);
  checkArrKey('planning', card.triggers.phases);
  updateArr('during', card.triggers.phases.planning);
}
if (ability.includes('At the end of the Planning Phase')) {
  checkObjKey('phases', card.triggers);
  checkArrKey('planning', card.triggers.phases);
  updateArr('end', card.triggers.phases.planning);
}

  //* System Phase *//
  if (ability.includes('At the start of the System Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('system', card.triggers.phases);
    updateArr('start', card.triggers.phases.system);
  }
  if (ability.includes('During the System Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('system', card.triggers.phases);
    updateArr('during', card.triggers.phases.system);
  }
  if (ability.includes('At the end of the System Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('system', card.triggers.phases);
    updateArr('end', card.triggers.phases.system);
  }

  //* Activation  Phase *//
  if (ability.includes('At the start of the Activation Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('activation', card.triggers.phases);
    updateArr('start', card.triggers.phases.activation);
  }
  if (ability.includes('During the Activation Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('activation', card.triggers.phases);
    updateArr('during', card.triggers.phases.activation);
  }
  if (ability.includes('At the end of the Activation Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('activation', card.triggers.phases);
    updateArr('end', card.triggers.phases.activation);
  }

  //* Engagement  Phase *//
  if (ability.includes('At the start of the Engagement Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('engagement', card.triggers.phases);
    updateArr('start', card.triggers.phases.engagement);
  }
  if (ability.includes('During the Engagement Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('engagement', card.triggers.phases);
    updateArr('during', card.triggers.phases.engagement);
  }
  if (ability.includes('At the end of the Engagement Phase')) {
    checkObjKey('phases', card.triggers);
    checkArrKey('engagement', card.triggers.phases);
    updateArr('end', card.triggers.phases.engagement);
  }

    //* End  Phase *//
    if (ability.includes('At the start of the End Phase')) {
      checkObjKey('phases', card.triggers);
      checkArrKey('end', card.triggers.phases);
      updateArr('start', card.triggers.phases.end);
    }
    if (ability.includes('During the End Phase')) {
      checkObjKey('phases', card.triggers);
      checkArrKey('end', card.triggers.phases);
      updateArr('during', card.triggers.phases.end);
    }
    if (ability.includes('At the end of the End Phase')) {
      checkObjKey('phases', card.triggers);
      checkArrKey('end', card.triggers.phases);
      updateArr('end', card.triggers.phases.end);
    }

  //* TODO Manuevers *//

  //* TODO Attack & REMOVE COMBAT*//
  if (ability.includes('While you perform an attack')) {
    checkObjKey('combat', card.triggers);
    checkArrKey('attack', card.triggers.combat);
    updateArr('self', card.triggers.combat.attack);
  }

  //* TODO Defend & REMOVE COMBAT*//
  if (ability.includes('While you defend')) {
    checkObjKey('combat', card.triggers);
    checkArrKey('defend', card.triggers.combat);
    updateArr('self', card.triggers.combat.defend);
  }
  if (ability.includes('After you defend') || ability.includes('After defending')) {
    checkObjKey('combat', card.triggers);
    checkArrKey('defend', card.triggers.combat);
    updateArr('self', card.triggers.combat.defend);
  }

  //* TODO Actions *//
  if (ability.includes('Action:')) {
    checkArrKey('actions', card.triggers);
    updateArr('special', card.triggers.actions);
  }

// TODO Add conditional that adds "misc" property to empty cards

  console.log(card);


};

//parse a JSON file of cards
export const parseCategory = (cards: any) => {
  // map through all cards
  cards.map((card: any) => {
    // map through each side
    card.sides.map((side: any) => {
      parseAbility(side.ability, card);
    });
  });
  // delete file if it exists in "parsed folder"
  // write file to parsed folder
  return cards;
};



// Parse the entire X Wing collection 
export const parseAll = () => {
 console.log(manifest)
 console.log(fs.readFileSync("./" + manifest.conditions))

 manifest.upgrades.map(path =>{
   console.log(path)
 })

 manifest.pilots.map((faction) =>{
   faction.ships.map(ship =>{
     console.log(ship)
   })
 })


}


parseAll()