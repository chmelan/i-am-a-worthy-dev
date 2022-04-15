export const triggers = {
  any: {
    phase: ['any'],
  },
  duringPlanningPhase: {
    phase: ['planning'],
  },
  duringSystemPhase: {
    phase: ['system'],
    text: 'During the System Phase',
  },
  duringActivationPhase: {
    phase: ['activation'],
  },
  duringEngagementPhase: {
    phase: ['engagement'],
  },
  duringEngagementPhase_and_Initiative0: {
    phase: ['engagement'],
    tags: ['initiative 0'],
    text: 'At initiative 0',
  },
  duringEngagementPhase_and_Initiative1: {
    phase: ['engagement'],
    tags: ['initiative 1'],
    text: 'At initiative 1',
  },
  duringEngagementPhase_and_Initiative2: {
    phase: ['engagement'],
    tags: ['initiative 2'],
    text: 'At initiative 2',
  },
  duringEngagementPhase_and_Initiative3: {
    phase: ['engagement'],
    tags: ['initiative 3'],
    text: 'At initiative 3',
  },
  duringEngagementPhase_and_Initiative4: {
    phase: ['engagement'],
    tags: ['initiative 4'],
    text: 'At initiative 4',
  },
  duringEngagementPhase_and_Initiative5: {
    phase: ['engagement'],
    tags: ['initiative 5'],
    text: 'At initiative 5',
  },
  duringEngagementPhase_and_Initiative6: {
    phase: ['engagement'],
    tags: ['initiative 6'],
    text: 'At initiative 6',
  },
  duringEngagementPhase_and_Initiative7: {
    phase: ['engagement'],
    tags: ['initiative 7'],
    text: 'At initiative 7',
  },

  duringEngagementPhase_and_Initiative0_and_EnemyInBullseyeArc: {
    phase: ['engagement'],
    tags: ['initiative 0', 'bullseye arc'],
    text: 'At initiative 0, you may perform a bonus primary attack against an enemy ship in your %BULLSEYEARC%',
  },

  duringEndPhase: {
    phase: ['end'],
  },
  startPlanningPhase: {
    phase: ['planning'],
  },
  startSystemPhase: {
    phase: ['system'],
  },
  startActivationPhase: {
    phase: ['activation'],
    text: 'At the start of the Activation Phase',
  },
  startEngagementPhase: {
    phase: ['engagement'],
    text: 'At the start of the Engagement Phase',
  },
  startEndPhase: {
    phase: ['end'],
    text: 'At the start of the End Phase',
  },

  endActivationPhase: {
    phase: ['activation'],
    text: 'At the end of the Activation Phase',
  },

  beforePlayerRevealManuever: {
    phase: ['activation'],
    text: ['Before you reveal your maneuver', 'Before you reveal your dial'],
  },

  afterPlayerFullyExecuteManuever: {
    phase: ['activation'],
    text: [
      'After you fully execute a maneuver',
      'After you fully execute a speed 3-5 maneuver',
    ],
  },
  afterPlayerFullyExecuteManuever_and_PlayerNotDepletedOrStrained: {
    phase: ['activation'],
    text: [
      'After you fully execute a maneuver, if you are not depleted or strained',
    ],
  },
  afterPlayerFullyExecuteManuever_and_Speed3To5: {
    phase: ['activation'],
    text: 'After you fully execute a speed 3-5 maneuver',
  },
  afterPlayerFullyExecuteRedManuever: {
    phase: ['activation'],
    text: 'After you fully execute a red maneuver',
  },
  afterPlayerFullyExecuteManuever_and_Moved_Through_Friendly: {
    phase: ['activation'],
    text: 'After you fully execute a maneuver, if you moved through a friendly ship',
  },

  afterPlayerDefend: {
    phase: ['engagement'],
    tags: ['defend'],
    text: ['After you defend', 'After defending'],
  },
  duringPlayerDefend: {
    phase: ['engagement'],
    tags: ['defend'],
    text: ['While you defend'],
  },
  duringPlayerDefend_and_ChargeActive: {
    phase: ['engagement'],
    tags: ['defend'],
    text: ['While you defend, if your %CHARGE% is active'],
  },
  duringPlayerDefend_and_AttackObstructedByBombOrMine: {
    phase: ['engagement'],
    tags: ['defend'],
    text: ['While you defend against an attack obstructed by a bomb or mine'],
  },
  duringPlayerDefend_and_AttackerInFrontArc: {
    phase: ['engagement'],
    tags: ['defend', 'front arc'],
    text: ['While you defend, if the attacker is in your %FRONTARC%,'],
  },
  duringPlayerDefendBeforePlayerDealtCrit_and_AttackerInFrontArc: {
    phase: ['engagement'],
    tags: ['defend', 'front arc', 'crit'],
    text: ['While you defend, if the attacker is in your %FRONTARC%,'],
  },
  afterPlayerSlamAction: {
    phase: ['any'],
    text: 'After you perform a %SLAM% action',
  },
  afterPlayerPartiallyExecuteManuever: {
    phase: ['activation'],
    text: [
      'After you partially execute a maneuver',
      'after you partially execute a maneuver',
    ],
  },

  duringPlayerAttack: {
    phase: ['engagement'],
    tags: ['attack'],
    text: [
      'While you perform an attack',
      'While you move and perform attacks',
      'While you perform a primary attack',
      'While you perform a special attack',
    ],
  },

  duringPlayerAttack_and_LockOnDefender: {
    phase: ['engagement'],
    tags: ['attack', 'lock'],
    text: ['While you perform an attack against a locked ship'],
  },

  duringPlayerAttack_and_PlayerEvading: {
    phase: ['engagement'],
    tags: ['attack', 'evading'],
    text: ['While you perform an attack, if you are evading'],
  },
  duringPlayerAttack_and_AttackRange0: {
    phase: ['engagement'],
    tags: ['attack'],
    text: ['While you perform an attack at attack range 0'],
  },
  duringPlayerAttack_and_DefenderRange0To1ofFriendlyDevice: {
    phase: ['engagement'],
    tags: ['attack', 'device', 'friendly device'],
    text: [
      'While you perform a primary attack, if the defender is at range 0-1 of at least 1&nbsp;friendly device',
    ],
  },
  duringPlayerAttack_and_AttackRange0to2: {
    phase: ['engagement'],
    tags: ['attack'],
    text: ['While you perform an attack at attack range 0-2'],
  },
  duringPlayerPrimaryAttack: {
    phase: ['engagement'],
    tags: ['attack'],
    text: ['While you perform a primary attack'],
  },
  duringPlayerPrimaryAttackAfterNeutralizeResults: {
    phase: ['engagement'],
    tags: ['attack'],
    text: [
      'While you perform a primary attack, after the Neutralize Results step',
    ],
  },
  duringPlayerMissileAttack: {
    phase: ['engagement'],
    tags: ['attack', 'specialAttack', 'missileAttack'],
    text: ['While you perform a %MISSILE% or %CANNON% attack'],
  },
  duringPlayerCannonAttack: {
    phase: ['engagement'],
    tags: ['attack', 'specialAttack', 'cannonAttack'],
    text: ['While you perform a %MISSILE% or %CANNON% attack'],
  },
  duringPlayerSpecialAttack: {
    phase: ['engagement'],
    tags: ['attack'],
    text: ['While you perform a special attack'],
  },
  duringPlayerAttack_and_EnemyInBullseye: {
    phase: ['engagement'],
    tags: ['attack', 'bullseye'],
    text: [
      'While you perform an attack, if the defender is in your %BULLSEYEARC%',
    ],
  },
  duringPlayerAttack_and_EnemyInFrontArc: {
    phase: ['engagement'],
    tags: ['attack', 'front arc'],
    text: [
      'While you perform an attack, if the defender is in your %BULLSEYEARC%',
    ],
  },
  duringPlayerAttack_and_AttackObstructedByObstacle: {
    phase: ['engagement'],
    tags: ['attack', 'defend'],
    text: [
      'While you perform an attack, if the attack is obstructed by an obstacle',
      'While you perform an attack that is obstructed by an obstacle',
    ],
  },
  duringPlayerDefendOrAttack_and_PlayerStressed: {
    phase: ['engagement'],
    tags: ['attack', 'defend', 'stressed'],
    text: [
      'While you defend or perform an attack, if you are stressed',
      'While you defend or perform a primary attack, if you are stressed',
    ],
  },
  duringPlayerDefendOrAttack_and_PlayerNotStressed: {
    phase: ['engagement'],
    tags: ['attack', 'defend', 'stressed'],
    text: ['While you perform an attack, if you are not stressed'],
  },

  duringPlayerDefendOrAttack_and_PlayerLockOnEnemy: {
    phase: ['engagement'],
    tags: ['attack', 'defend', 'stressed', 'lock'],
    text: 'While you defend or perform an attack, if you have a lock on the enemy ship',
  },
  duringPlayerDefendOrAttack_and_EnemyStressed: {
    phase: ['engagement'],
    tags: ['attack', 'defend', 'stressed', 'enemy'],
    text: 'While you defend or perform an attack, if the enemy ship is stressed',
  },
  duringPlayerDefendOrPrimaryAttack: {
    phase: ['engagement'],
    tags: ['attack', 'defend'],
    text: ['While you defend or perform a primary attack'],
  },
  duringPlayerDefendOrPrimaryAttack_and_PlayerSpeedHigher: {
    phase: ['engagement'],
    tags: ['attack', 'defend'],
    text: [
      "While you defend or perform a primary attack, if the speed of your revealed maneuver is higher than the enemy ship's",
    ],
  },
  duringPlayerDefendOrAttack: {
    phase: ['engagement'],
    tags: ['attack', 'defend'],
    text: [
      'While you defend or perform an attack',
      'while you defend or perform an attack',
      'While you defend or perform a primary attack',
    ],
  },
  duringPlayerDefendOrAttackBeforeAttackDiceRolled: {
    phase: ['engagement'],
    tags: ['attack', 'defend'],
    text: [
      'While you defend or perform an attack, before attack dice are rolled',
    ],
  },
  duringPlayerDefendOrAttackBeforeAttackDiceRolled_and_PlayerNotInEnemyBullseyeArc:
    {
      phase: ['engagement'],
      tags: ['attack', 'defend'],
      text: [
        'While you defend or perform an attack, before attack dice are rolled, if you are not in the enemy ship’s %BULLSEYEARC%,',
      ],
    },
  afterPlayerDefendOrAttack: {
    phase: ['engagement'],
    text: 'After you defend or perform an attack',
  },
  afterPlayerAttack: {
    phase: ['engagement'],
    text: 'After you perform an attack',
  },
  afterPlayerAttackHits: {
    phase: ['engagement'],
    text: [
      'After you perform an attack that hits',
      'After you perform an attack at attack range 1-2 that hits',
    ],
  },
  afterPlayerAttackHits_and_PlayerEvading: {
    phase: ['engagement'],
    text: ['After you perform an attack that hits, if you are evading'],
  },
  afterPlayerAttackMisses: {
    phase: ['engagement'],
    text: [
      'After you perform an attack that misses',
      'After you perform an attack that missed',
    ],
  },
  afterPlayerAttack_and_EnemyDestroyed: {
    phase: ['engagement'],
    text: 'After you perform an attack, if the defender was destroyed',
  },
  afterPlayerAttack_and_EnemyCrit: {
    phase: ['engagement'],
    text: 'After you perform an attack, if the defender was dealt a faceup damage card',
  },

  beforePlayerDealtCrit: {
    phase: ['any'],
    tags: 'crit',
    text: 'Before you would be dealt a faceup damage card',
  },

  duringFriendlyAttack: {
    phase: ['engagement'],
    tags: ['attack'],
    text: [
      'While a friendly ship at range&nbsp;0-2 performs an attack',
      'While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack',
    ],
  },
  beforeFriendlyBombOrMineDetonate: {
    phase: ['any'],
    tags: ['bomb', 'mine', 'detonate', 'friendly'],
    text: 'Before a friendly bomb or mine would detonate',
  },
  duringFriendlyDefendOrAttack: {
    phase: ['engagement'],
    tags: ['attack'],
    text: [
      'While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack',
    ],
  },
  duringFriendlyDefendOrAttack_and_AttackRange1To2: {
    phase: ['engagement'],
    tags: ['attack'],
    text: [
      'While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack',
    ],
  },

  duringFriendlyAttack_and_AttackRange0To2: {
    phase: ['engagement'],
    tags: ['attack'],
    text: ['While a friendly ship at range&nbsp;0-2 performs an attack'],
  },
  duringFriendlyAttackBeforeNeutralizeResults_and_AttackerRange0To3_and_DefenderInFriendlyAttackerBullseyeArc:
    {
      phase: ['engagement'],
      tags: ['attack'],
      text: [
        'While a friendly ship at range&nbsp;0-3 performs a primary attack, if the defender is in its %BULLSEYEARC%, before the Neutralize Results step',
      ],
    },
  duringFriendlyTorpedoAttack_and_AttackerRange0To1: {
    phase: ['engagement'],
    tags: ['attack', 'missile'],
    text: [
      'While a friendly ship at range 0-1 performs a %TORPEDO% or %MISSILE% attack,',
    ],
  },
  duringFriendlyMissileAttack_and_AttackerRange0To1: {
    phase: ['engagement'],
    tags: ['attack', 'missile'],
    text: [
      'While a friendly ship at range 0-1 performs a %TORPEDO% or %MISSILE% attack,',
    ],
  },

  duringFriendlyDefend_and_Range0To1: {
    phase: ['engagement'],
    tags: ['defend'],
    text: ['While another friendly ship at range 0-1 defends'],
  },

  duringFriendlyDefendBeforeNeutralizeResults: {
    phase: ['engagement'],
    tags: ['defend'],
    text: [
      'While another friendly ship at range 0-1 defends, before the Neutralize Results step',
    ],
  },
  duringFriendlyDefendBeforeNeutralizeResults_and_Range0To1: {
    phase: ['engagement'],
    tags: ['defend'],
    text: [
      'While another friendly ship at range 0-1 defends, before the Neutralize Results step,',
    ],
  },
  afterFriendlyDestroyed_and_FriendlyRange0To3: {
    phase: ['engagement'],
    tags: ['destroyed', 'friendly', 'friendly destroyed'],
    text: ['After a friendly ship at range 0-3 is destroyed'],
  },
  duringPlayerCoordinate: {
    phase: ['any'],
    actions: ['coordiate'],
    text: 'While you coordinate',
  },
  duringPlayerDock: {
    phase: ['any'],
    tags: ['dock'],
    actions: ['dock'],
    text: 'You can dock at range 0-1.',
  },
  duringPlayerDocked: {
    phase: ['any'],
    tags: ['dock'],
    actions: ['dock'],
    text: 'While you are docked',
  },
  duringEnemyStressed: {
    phase: ['any'],
    tags: ['stressed'],
    text: 'if the enemy ship is stressed,',
  },
  afterEnemyDestroyed: {
    phase: ['any'],
    tags: ['destroyed'],
    text: 'After an enemy ship at range 0-3 is destroyed',
  },
  afterEnemyDamaged: {
    phase: ['any'],
    tags: ['damaged'],
    text: 'After an enemy ship suffers damage',
  },
  afterEnemyDamaged_and_EnemyNotDefending: {
    phase: ['any'],
    tags: ['damaged', 'not defending'],
    text: 'After an enemy ship suffers damage, if it is not defending',
  },
  afterEnemyDestroyed_and_Range0To3: {
    phase: ['any'],
    tags: ['destroyed'],
    text: 'After an enemy ship at range 0-3 is destroyed',
  },
  duringPlayerStressed: {
    phase: ['any'],
    tags: ['stressed'],
    text: 'While you are stressed,',
  },

  beforePlayerCarrierShipActivates: {
    phase: ['activation'],
    tags: ['dock'],
    actions: ['dock'],
    text: 'Before your carrier ship activates',
  },
  duringPlayerMove: {
    phase: ['any'],
    tags: ['move'],
    text: 'While you move',
  },
  afterPlayerAction: {
    phase: ['any'],
    tags: ['action'],
    text: 'After you perform an action',
  },
  beforePlayerRemoved: {
    phase: ['any'],
    text: ['Before you are removed', 'before you are removed'],
  },
  afterPlayerFocusAction: {
    phase: ['any'],
    text: ['After you perform a %FOCUS% action'],
  },
  duringPlayerBarrelRollAction: {
    phase: ['any'],
    tags: ['action', 'barrel roll'],
    text: ['While you perform a barrel roll'],
  },
  duringFriendlyLockAction: {
    phase: ['any'],
    tags: ['action', 'lock'],
    text: [
      'Friendly ships can acquire locks',
      'while friendly ships acquire locks',
    ],
  },
  duringPlayerDropDevice: {
    phase: ['any'],
    tags: ['device', 'bomb', 'remove'],
    text: ['If you would drop a device'],
  },
  duringPlayerDropDeviceStraight: {
    phase: ['any'],
    tags: ['device', 'bomb', 'remove'],
    text: ['If you would drop a device using a %STRAIGHT% template'],
  },
};
