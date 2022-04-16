import manifest from "../../lib/data/manifest.json"
import fs from "fs"
import { stringify } from "querystring";

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

    //if there isn't an ability, return
    if (!ability){
        return
    }  
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

};

// parse pilots per ships
const parseShip = (ship: any) => {

 ship.pilots.map( (pilot: any) => {
     //parse ship ability
     if (pilot.shipAbility){
         parseAbility(pilot.shipAbility.text, pilot)
     }
     
     //parse pilot ability
     if (pilot.ability){
        parseAbility(pilot.ability, pilot)
    }
   
        
 })
 return ship;
}

//parse a JSON file of cards
export const parseCategory = (cards: any) => {
    // map through all cards

    cards.map((card: any) => {
        // if ships


        // if double sided, map through each side
        if (card.sides){
            card.sides.map((side: any) => {
                parseAbility(side.ability, card);
            });

        }
        // edge case for conditions
        else{
            parseAbility(card.ability, card);
        }
            


    });
    // delete file if it exists in "parsed folder"
    // write file to parsed folder

    return cards;
};



// Parse the entire X Wing collection 
export const parseAll = () => {
    // initialize data container
    const allCards = { 

}
// parse conditions
    const rawdata = fs.readFileSync("./lib/" + manifest.conditions,  'utf-8');
    const parsedCond = JSON.parse(rawdata);
    allCards["conditions"] = parseCategory(parsedCond)


// parse upgrades
    manifest.upgrades.map(path => {
        const key = path.replace('data/upgrades/', '').replace('.json', '')
        const rawdata = fs.readFileSync("./lib/" + path,  'utf-8');
        const parsed = JSON.parse(rawdata);
        allCards[key] = parseCategory(parsed)
    })

// parse ships

    manifest.pilots.map((faction) => {
        allCards[faction.faction] = {}
        faction.ships.map(path => {
            const shipKey = path.replace('data/pilots/', '').replace('.json', '').replace('', '')
            let rawdata = fs.readFileSync("./lib/" + path,  'utf-8');

            let parsed = JSON.parse(rawdata);
            allCards[faction.faction][shipKey] = parseShip(parsed)
        })

    })
    fs.writeFileSync("output.json", JSON.stringify(allCards))
    console.log("completed parsing")
}


parseAll()