import { stringify, parse } from 'jsurl';

const sample = {
  name: 'X-Squad',
  faction: 'separatistalliance',
  description: 'Test xws 2.0.0 data',
  points: 76,
  version: '2.0.0',
  pilots: [
    {
      id: 'bombardmentdrone',
      points: 44,
      upgrades: {
        modification: ['angleddeflectors'],
        configuration: ['landingstruts'],
        device: ['drk1probedroids'],
        sensor: ['trajectorysimulator'],
      },
    },
    {
      id: 'dfs311-vultureclassdroidfighter',
      points: 32,
      upgrades: {
        missile: ['clustermissiles'],
        modification: ['angleddeflectors'],
        configuration: ['grapplingstruts'],
      },
      vendor: {
        pyxwb2: {
          url: 'https://github.com/minsis/pyxwb2',
        },
      },
    },
  ],
  vendor: {
    pyxwb2: {
      url: 'https://github.com/minsis/pyxwb2',
    },
  },
};

const simpleSample = {
  name: 'X-Squad',
  faction: 'separatistalliance',
  pilots: [
    {
      id: 'bombardmentdrone',
      upgrades: [
        'angleddeflectors',
        'landingstruts',
        'drk1probedroids',
        'trajectorysimulator',
      ],
    },
    {
      id: 'dfs311-vultureclassdroidfighter',
      upgrades: ['clustermissiles', 'angleddeflectors', 'grapplingstruts'],
    },
  ],
};

// assumes input has been validated & formatted
export const encodeURL = (xws) => {
  //convert XWS JSON object to URL
  return stringify(xws);
};

export const decodeURL = (url) => {
  return parse(url);
};
