const triggers = {
  phases: {
    setup: ['start', 'during', 'end'],
    planning: ['start', 'during', 'end'],
    system: ['start', 'during', 'end'],
    activation: ['start', 'during', 'end'],
    engagement: ['start', 'during', 'end'],
    end: ['start', 'during', 'end'],
  },

    attack: ['friendly', 'enemy', 'self'],
    defend: ['friendly', 'enemy', 'self'],
    destroyed: ['friendly', 'enemy', 'self'],

  device: {
    remote,
    mine,
    bomb,
  },
  actions: [
    'boost',
    'focus',
    'evade',
    'lock',
    'barrelroll',
    'reinforce',
    'cloak',
    'coordinate',
    'calculate',
    'jam',
    'reload',
    'slam',
    'rotatearc',
    'special',
  ],

  range: [{ low: 0, high: 2 }, { low: 3 }],

  ability: 'while you attack or defend at range 1-3, do this thing',

  prettyTrigger: '*or# & R1-3 =>  ',

  prettyOutcome: 'do this thing',
  
  misc: true,
};
