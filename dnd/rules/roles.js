// The six roles and their playbooks (our own writing). Steps name slots and
// vars, never items: {weapon.melee}, {skill.stealth}, {spell:bless}, {attacks}.
// A step whose `requires` the character doesn't meet, or whose slot it can't
// fill, is dropped; an empty "Do this" falls back to the basic action
// (rules/common.js BASIC). At most 3 If… entries per node; `more` lists Ifs
// shown under Other actions instead (an If displaced from the three).
// `signature`: the one weapon add-on (a feature id) shown on weapon lines in
// Do this / If…; the detail pages show every add-on. A weapon's full line
// appears once per page (the first one inside Do this; the first-turn line
// names it only); later mentions are just its name. Steps never show a
// weapon's quantity.

const S = (text, requires) => (requires ? { text, requires } : { text });
const I = (when, then, requires) => (requires ? { when, then, requires } : { when, then });

// ---- shared pieces ----
const HIT_DICE = S('Short rest: spend hit dice (**{hitDice}**, each one {mod.con}) until you are near full HP.');
const WATCH = I('The party camps', 'Take a watch: your passive Perception is **{passivePerception}**.');
const ZERO_HP = I('You drop to 0 HP', 'Death saves at the start of your turns: 10+ succeeds; three successes or three failures ends it.');
const OPPORTUNITY = S('An enemy tries to walk away from you: opportunity attack with {weapon.melee}.');
const BEST_SAVES = S('Roll the save the DM names. Your best: {bestSaves}.');
const INDOMITABLE = I('You fail a save that matters', '**Indomitable**: reroll it, and use the new roll.', ['indomitable']);
const SECOND_WIND = I('You are below half HP', 'Bonus action: **Second Wind**, regain **{secondWind}** HP.', ['second-wind']);
const CHECK = {
  do: [
    S('Your best skills: {bestSkills}.'),
    S('Anything else: open **Other actions** for every skill and the ability it uses.'),
  ],
  if: [I('Someone in the party is better at it', 'Take the **Help** action instead: they roll with advantage.')],
};
const QUIET_OR_LOUD = [
  S('Your armor is loud (disadvantage on Stealth). Stay back with the group and let the scout go first.', ['stealth-disadvantage']),
  S('Follow the scout quietly: {skill.stealth}.', ['!stealth-disadvantage']),
  S('Stay close enough to charge in if the scout is spotted.'),
];
const LOOK = I('You are the one searching', 'Look first: {skill.perception}; for a mechanism, {skill.investigation}.');
const STABILIZE = I('An ally is dying and no healer is near', 'Action: stabilize them with {skill.medicine} (DC 10).');
// Tank roles on "A friend needs help" (not the Striker).
const SHOVE_TEXT = (extra = '') => `**Shove** it ({skill.athletics}${extra} vs its Athletics/Acrobatics: push it 5 ft away or knock it prone) or **Grapple** it (it can't move away from you; your ally can step away). Each replaces one of your attacks.`;
const SHOVE = I('An enemy is on your ally', SHOVE_TEXT());

const fighterRest = {
  do: [
    HIT_DICE,
    S('A short rest brings back **Second Wind** and **Action Surge**.', ['action-surge']),
    S('A short rest brings back **Second Wind**.', ['second-wind', '!action-surge']),
  ],
  if: [WATCH],
};

export default {
  defender: {
    id: 'defender', class: 'fighter', default: true, label: 'Defender', signature: 'improved-critical',
    job: "Stand in front of the people who can't take hits; make enemies deal with you.",
    playbook: {
      turn: {
        first: [S('Roll initiative **{initiative}**. Then move to the front, between the enemies and your weakest ally.')],
        do: [
          S('Step up to the enemy closest to your allies and stay there.'),
          S('Attack **{attacks}** with {weapon.melee}.'),
          S('Attack **{attacks}** with {weapon.ranged}.', ['!weapon.melee']),
          S('Hard fight? **Action Surge**: attack **{attacks}** more this turn.', ['action-surge']),
        ],
        if: [
          I('No enemy within reach', 'Move up to cover the back line, or attack from here with {weapon.ranged}.'),
          SECOND_WIND,
        ],
      },
      defend: {
        do: [
          S('Reaction: when an enemy you can see attacks an ally within 5 ft of you, **Protection** gives that attack disadvantage. Otherwise, an opportunity attack when an enemy leaves your reach.', ['style-protection', 'shield']),
          S('Reaction: an opportunity attack with {weapon.melee} when an enemy leaves your reach.', ['!style-protection']),
          S('Reaction: an opportunity attack with {weapon.melee} when an enemy leaves your reach.', ['style-protection', '!shield']),
          S('Let the hits land on you, not on your allies.'),
        ],
        if: [INDOMITABLE, I('Enemies surround you', 'Next turn, take the **Dodge** action if nobody needs your damage.')],
      },
      hurt: {
        do: [
          S('Bonus action: **Second Wind**, regain **{secondWind}** HP. Keep fighting.', ['second-wind']),
          S('Hold the line while you have more HP than the ally behind you.'),
        ],
        if: [I('You would drop this round', 'Step back so a healer can reach you; the next-toughest ally steps up.'), ZERO_HP],
      },
      explore: {
        do: [S('Walk at the front of the marching order.'), S('Force stuck doors, lift gates, break things: {skill.athletics}.')],
        if: [WATCH, I('Something attacks from behind', 'Move to it: you are the one who takes hits.')],
      },
      social: {
        do: [S("Let the party's talker lead; stand where the other side can see you."), S('Read the other side: {skill.insight}.')],
        if: [I('Someone threatens the party', 'Step forward and make it clear they go through you: {skill.intimidation}.')],
      },
      sneak: { do: QUIET_OR_LOUD, if: [I('The scout is spotted', 'Move up fast and put yourself between them and the enemy.')] },
      search: {
        do: [S('Stand guard while others search: if a trap or ambush goes off, you react first.'), S('Force open what will not open: {skill.athletics}.')],
        if: [LOOK],
      },
      rest: fighterRest,
      save: { do: [BEST_SAVES], if: [INDOMITABLE] },
      check: CHECK,
      help: {
        do: [
          S('Stand next to the ally in trouble so the enemy has to deal with you.'),
          S('When an enemy you can see attacks them, **Protection** (reaction) gives that attack disadvantage.', ['style-protection', 'shield']),
          S('Take the **Help** action when they need advantage more than they need your damage.'),
        ],
        if: [SHOVE, STABILIZE],
      },
    },
  },

  striker: {
    id: 'striker', class: 'fighter', label: 'Striker', signature: 'improved-critical',
    job: 'Find the most dangerous enemy and hit it as hard as you can.',
    playbook: {
      turn: {
        first: [S('Roll initiative **{initiative}**. Pick the enemy that would hurt your party most.')],
        do: [
          S('Move to that enemy.'),
          S('Attack **{attacks}** with {weapon.melee}.'),
          S('Need it down now? **Action Surge**: attack **{attacks}** more.', ['action-surge']),
        ],
        if: [
          I("You can't reach it this turn", 'Attack it from where you are with {weapon.ranged}.'),
          I('It drops', 'Move straight on to the next most dangerous enemy.'),
          SECOND_WIND,
        ],
      },
      defend: {
        do: [OPPORTUNITY, S('Keep the pressure on rather than backing off.')],
        if: [INDOMITABLE],
      },
      hurt: {
        do: [
          S('Bonus action: **Second Wind**, regain **{secondWind}** HP.', ['second-wind']),
          S('Finish your target if it is nearly down; otherwise step back from the biggest threat.'),
        ],
        if: [ZERO_HP],
      },
      explore: {
        do: [S('Walk at the front or second in line.'), S('Climb, lift, carry, force: {skill.athletics}.')],
        if: [WATCH],
      },
      social: {
        do: [S("Let the talker lead; you're the muscle behind them."), S('When a threat helps: {skill.intimidation}.')],
        if: [I('Talking fails and blades come out', 'You go first: roll initiative **{initiative}**.')],
      },
      sneak: { do: QUIET_OR_LOUD, if: [I('The scout is spotted', 'Charge the enemy who spotted them.')] },
      search: {
        do: [S('Stand guard while others search; be ready if something jumps out.'), S('Force open what will not open: {skill.athletics}.')],
        if: [LOOK],
      },
      rest: fighterRest,
      save: { do: [BEST_SAVES], if: [INDOMITABLE] },
      check: CHECK,
      help: {
        do: [
          S('Kill whatever is hurting your ally: the best help is a dead enemy.'),
          S('Take the **Help** action when they need advantage more than they need your damage.'),
        ],
        if: [STABILIZE],
      },
    },
  },

  rager: {
    id: 'rager', class: 'barbarian', default: true, label: 'Rager', signature: 'rage',
    job: "Charge in, rage, hit hard. You're built to take hits.",
    playbook: {
      turn: {
        first: [
          S('Roll initiative **{initiative}** with advantage (**Feral Instinct**).', ['feral-instinct']),
          S('Roll initiative **{initiative}**.', ['!feral-instinct']),
          S('**Rage** as a bonus action ({rageUses}/long rest).', ['rage']),
        ],
        do: [
          S('Charge the biggest enemy you can reach.'),
          S('**Reckless Attack** (advantage): attack **{attacks}** with {weapon.melee}.', ['reckless-attack']),
          S('Attack **{attacks}** with {weapon.melee}.', ['!reckless-attack']),
          S('From your second turn of a frenzied rage: bonus action, attack again with it.', ['frenzy', 'weapon.melee']),
        ],
        if: [
          I('No enemy within reach', 'Close in; for now throw {weapon.ranged} (no rage bonus).'),
          I('A small fight', 'Skip the Frenzy: it costs a level of exhaustion.', ['frenzy']),
          I('Out of rages', 'Fight on anyway: you have the most HP.', ['rage']),
        ],
      },
      defend: {
        do: [
          S('While raging, bludgeoning, piercing and slashing damage against you is halved.', ['rage']),
          OPPORTUNITY,
        ],
        if: [
          I('You used Reckless Attack', 'Attacks against you have advantage until your next turn. You can take it.', ['reckless-attack']),
          I('A trap or spell you can see calls for a Dex save', 'You roll it with advantage (**Danger Sense**).', ['danger-sense']),
        ],
      },
      hurt: {
        do: [
          S('Keep raging: weapon damage against you is halved.', ['rage']),
          S("Don't back off early: you have more HP than anyone. Pull back only if you'd drop this round."),
        ],
        if: [
          I('You drop to 0 HP for the first time today', '**Relentless Endurance**: you drop to 1 HP instead.', ['relentless-endurance']),
          ZERO_HP,
        ],
      },
      explore: {
        do: [S('Walk at the front of the line.'), S('Climb, break, carry, swim: {skill.athletics}.')],
        if: [WATCH],
      },
      social: {
        do: [S('Let the talker lead; you are the threat they never have to say out loud.'), S('When it helps: {skill.intimidation}.')],
        if: [I('You want one person scared', '**Intimidating Presence** (action): they make a Wis save (DC **{intimidateDC}**) or are frightened.', ['intimidating-presence'])],
      },
      sneak: { do: QUIET_OR_LOUD, if: [I('The scout is spotted', 'Charge in; rage on the way.')] },
      search: {
        do: [S('Break open what will not open: {skill.athletics}.'), S('Let the careful ones look for traps; stay alert at the back.')],
        if: [I('A trap goes off', 'Dex save with advantage if you saw it coming (**Danger Sense**).', ['danger-sense']), LOOK],
      },
      rest: {
        do: [
          HIT_DICE,
          S('A long rest brings back all **{rageUses}** rages.', ['rage']),
          S('A long rest also removes one level of exhaustion (from a **Frenzy**).', ['frenzy']),
        ],
        if: [WATCH],
      },
      save: {
        do: [
          BEST_SAVES,
          S('Raging: advantage on Str saves.', ['rage']),
          S("Raging: you can't be charmed or frightened (**Mindless Rage**).", ['mindless-rage']),
        ],
        if: [I('A trap or spell you can see calls for a Dex save', 'Advantage (**Danger Sense**).', ['danger-sense'])],
      },
      check: CHECK,
      help: {
        do: [S('Get between your ally and whatever is hurting them.'), S('Carry a downed ally out of danger: you are the strongest.')],
        if: [
          I('An enemy is on your ally', SHOVE_TEXT(', advantage while raging,'), ['rage']),
          I('An enemy is on your ally', SHOVE_TEXT(), ['!rage']),
          STABILIZE,
        ],
      },
    },
  },

  skirmisher: {
    id: 'skirmisher', class: 'rogue', default: true, label: 'Skirmisher', signature: 'sneak-attack',
    job: "Hit once per turn, very hard, from where they can't hit back.",
    playbook: {
      turn: {
        first: [S('Roll initiative **{initiative}**. Start at range or hidden.')],
        do: [
          S('Set up **Sneak Attack** (a target with an ally next to it, or advantage). Attack with {weapon.sneak}.', ['sneak-attack']),
          S('Attack with {weapon.sneak}.', ['!sneak-attack']),
          S('Bonus action: Hide, or Disengage and step away (**Cunning Action**).', ['cunning-action']),
        ],
        if: [
          I('An enemy is next to you', 'Bonus action: Disengage, step away, then shoot. If an ally is next to it too, stab it with {weapon.melee} instead.', ['cunning-action']),
          I('Caster or archer at the back', 'Go for them.'),
          I('No easy target', 'Hide first (bonus action), then attack.', ['cunning-action']),
        ],
      },
      defend: {
        do: [
          S('Reaction: **Uncanny Dodge** on a big hit (halves the damage); otherwise an opportunity attack when an enemy leaves your reach (a second **Sneak Attack** this round).', ['uncanny-dodge']),
          S('An enemy tries to walk away from you: opportunity attack with {weapon.melee}.', ['!uncanny-dodge']),
        ],
        if: [
          I('An area effect calls for a Dex save', '**Evasion**: success = no damage, failure = half.', ['evasion']),
          I('Enemies close in on you', 'Next turn, Disengage (bonus action) and get out of reach.', ['cunning-action']),
        ],
      },
      hurt: {
        do: [
          S('Get out: **Cunning Action** to Disengage or Dash (bonus action), then Hide or attack from range.', ['cunning-action']),
          S('Fight from range: {weapon.ranged}.'),
          S("Stay out of reach: you have fewer HP than the front line."),
        ],
        if: [ZERO_HP],
      },
      explore: {
        do: [S('Scout ahead, out of sight of the group but within shouting distance.'), S('Spot trouble first: {skill.perception}.')],
        if: [I('You find something', 'Come back and tell the party before you act alone.'), WATCH],
      },
      social: {
        do: [S('Read people: {skill.insight}.'), S('When the truth will not work: {skill.deception}.')],
        if: [I('Someone has something you need', 'Lift it quietly: {skill.sleight-of-hand}.')],
      },
      sneak: {
        do: [
          S('You go first: {skill.stealth}.'),
          S('Hide as a bonus action whenever you need to (**Cunning Action**).', ['cunning-action']),
          S('Report back before you act alone.'),
        ],
        if: [I('You are spotted', 'Dash back to the party (bonus action).', ['cunning-action'])],
      },
      search: {
        do: [
          S('Check for traps before anyone walks in: {skill.perception} to spot them, {skill.investigation} to work out the trigger.'),
          S('Open locks and disarm traps: {tool.thieves-tools}.'),
        ],
        if: [I('You find a trap you cannot disarm', 'Mark it and lead the party around it.')],
      },
      rest: { do: [HIT_DICE], if: [WATCH] },
      save: {
        do: [BEST_SAVES],
        if: [I('An area effect calls for a Dex save', '**Evasion**: success = no damage, failure = half.', ['evasion'])],
      },
      check: CHECK,
      help: {
        do: [
          S('Help an ally hit: stand next to their target, so both of you get a better attack.'),
          S('Stabilize a dying ally: {skill.medicine} (DC 10).'),
        ],
        if: [I('An ally is grabbed or trapped', 'Get them loose: {skill.sleight-of-hand} or {skill.acrobatics}.')],
      },
    },
  },

  archer: {
    id: 'archer', class: 'ranger', default: true, label: 'Archer', signature: 'hunters-mark-addon',
    job: 'Mark the target, shoot every turn.',
    playbook: {
      turn: {
        first: [S('Roll initiative **{initiative}**. Stay 30 ft or more behind the front line, with a clear shot.')],
        do: [
          S('Bonus action: mark the most dangerous enemy with {spell:hunters-mark}.', ['spell:hunters-mark']),
          S('Attack **{attacks}** with {weapon.ranged}.'),
          S('Keep your distance: make melee enemies cross open ground to reach you.', ['weapon.ranged']),
        ],
        if: [
          I('The marked target drops', 'Bonus action: move the mark (no slot).', ['spell:hunters-mark']),
          I('An enemy is next to you', 'Step back first (shooting up close is at disadvantage), or attack with {weapon.melee}.'),
        ],
      },
      defend: {
        do: [
          S('Took damage while concentrating on your mark? Con save (DC 10 or half the damage): {save.con}.', ['spell:hunters-mark']),
          OPPORTUNITY,
        ],
        if: [
          I('A Large or bigger enemy next to you attacks you', '**Giant Killer** (reaction): attack it right after.', ['giant-killer']),
          I('An enemy hits you', 'You get +4 AC against its other attacks this turn (**Multiattack Defense**).', ['multiattack-defense']),
          I('You want to step away', 'Opportunity attacks against you have disadvantage (**Escape the Horde**).', ['escape-the-horde']),
        ],
      },
      hurt: {
        do: [S('Fall back and keep shooting; call for the healer.')],
        if: [
          I('No healer nearby', 'Heal yourself: {spell:cure-wounds}.', ['spell:cure-wounds']),
          I('Out of slots', 'Eat a berry you made with **Goodberry** earlier (action, 1 HP each).', ['spell:goodberry']),
          ZERO_HP,
        ],
      },
      explore: {
        do: [
          S('Lead the way and navigate: {skill.survival}.'),
          S('In {terrain}: you cannot get lost, the group keeps full speed, and you find twice the food.', ['natural-explorer']),
          S('Feed the party: {spell:goodberry}.', ['spell:goodberry']),
        ],
        if: [
          I('You suspect something unnatural nearby', '**Primeval Awareness**: spend a slot to sense aberrations, celestials, dragons, elementals, fey, fiends or undead within a mile.', ['primeval-awareness']),
          I('Tracking {favoredEnemy}', 'You roll Survival with advantage.', ['favored-enemy']),
          WATCH,
        ],
      },
      social: {
        do: [S('Let the talker lead; watch the listener: {skill.insight}.'), S('Speak up about roads, beasts and the wilds: you know them best.')],
        if: [I('They lie about the land', 'Call it out: {skill.survival}.')],
      },
      sneak: {
        do: [
          S('The whole party gets +10 to Stealth with {spell:pass-without-trace}.', ['spell:pass-without-trace']),
          S('Move just behind the scout: {skill.stealth}.'),
        ],
        if: [
          I('You need to stay hidden in one place', '**Hide in Plain Sight**: 1 minute of camouflage gives +10 to Stealth while you stay still.', ['hide-in-plain-sight']),
          I('Your armor makes noise', 'Stay at the back: it gives you disadvantage on Stealth.', ['stealth-disadvantage']),
        ],
      },
      search: {
        do: [S('Read the ground for tracks and signs: {skill.survival}.'), S('Scan for movement: {skill.perception}.')],
        if: [I('Searching inside a building', 'Let the scout lead; cover the door.')],
      },
      rest: {
        do: [
          HIT_DICE,
          S('A long rest brings back your spell slots: {slots}.', ['spellcasting']),
          S('Cast {spell:goodberry} before sleeping so the party eats.', ['spell:goodberry']),
        ],
        if: [I('Camping in the wild', 'Pick the campsite and take a watch: passive Perception **{passivePerception}**.')],
      },
      save: {
        do: [BEST_SAVES],
        if: [I('Something tries to frighten you', 'You roll with advantage (**Steel Will**).', ['steel-will'])],
      },
      check: CHECK,
      help: {
        do: [
          S('Heal: {spell:cure-wounds}.', ['spell:cure-wounds']),
          S('Cover them: shoot whatever is hurting them with {weapon.ranged}.'),
        ],
        if: [I('Poisoned, blinded, deafened or paralyzed', 'Cast {spell:lesser-restoration}.', ['spell:lesser-restoration']), STABILIZE],
      },
    },
  },

  protector: {
    id: 'protector', class: 'paladin', default: true, label: 'Protector',
    job: 'Keep allies inside your aura and on their feet; smite when it matters.',
    playbook: {
      turn: {
        first: [
          S('Roll initiative **{initiative}**.'),
          S('Cast {spell:bless} on yourself and two allies.', ['spell:bless']),
        ],
        do: [
          S('Fight next to your weakest ally.'),
          S('Attack **{attacks}** with {weapon.melee}.'),
        ],
        // Smite is a choice after a hit, not part of every swing (U6); Sacred Weapon is under Other actions.
        if: [
          I('A hit that really matters, or an undead/fiend', '**Divine Smite** after you hit: 2d8 radiant (1st-level slot), +1d8 per higher slot, +1d8 vs undead/fiends.', ['divine-smite']),
          I('An ally is down at 0 HP', 'Action: **Lay on Hands**; even 1 HP gets them up.', ['lay-on-hands']),
          I('Undead or fiends crowd you', '**Turn the Unholy** (action): Wis save DC **{spellDC}** within 30 ft or they flee.', ['turn-the-unholy']),
        ],
      },
      defend: {
        do: [
          S('Keep allies within {auraRange} ft so your aura adds **{auraBonus}** to their saves.', ['aura-of-protection']),
          OPPORTUNITY,
          S('Stand where enemies have to get past you.'),
        ],
        if: [
          I('You take damage while concentrating', 'Con save (DC 10 or half the damage): {save.con}.', ['caster']),
          I('An enemy you can see attacks an ally within 5 ft of you', '**Protection** (reaction): give that attack disadvantage.', ['style-protection', 'shield']),
        ],
      },
      hurt: {
        do: [S('Action: **Lay on Hands**: up to **{layOnHands}** HP from your pool, on yourself.', ['lay-on-hands'])],
        if: [I('Pool empty', 'Heal yourself: {spell:cure-wounds}.', ['spell:cure-wounds']), ZERO_HP],
      },
      explore: {
        do: [
          S('Walk second in line, so your aura covers the most allies.'),
          S('In places that feel wrong (crypts, ruins), **Divine Sense** (action) finds undead, fiends and celestials within 60 ft.', ['divine-sense']),
        ],
        if: [I('Someone is sick or poisoned', '**Lay on Hands**: 5 points cure a disease or a poison.', ['lay-on-hands']), WATCH],
      },
      social: {
        do: [S('Speak for the party: {skill.persuasion}.'), S('Read them: {skill.insight}.')],
        if: [
          I('You need the truth', 'Nobody can lie inside {spell:zone-of-truth}.', ['spell:zone-of-truth']),
          I('They threaten the party', 'Stand firm: {skill.intimidation}.'),
        ],
      },
      sneak: { do: QUIET_OR_LOUD, if: [I('The scout is spotted', 'Move up and get the scout inside your aura.')] },
      search: {
        do: [
          S('**Divine Sense** (action): undead, fiends, celestials and desecrated ground within 60 ft.', ['divine-sense']),
          S('Look carefully: {skill.perception}; for a mechanism, {skill.investigation}.'),
        ],
        if: [
          I('You suspect a curse', 'Cast {spell:remove-curse}.', ['spell:remove-curse']),
          I('Magic blocks the way', 'Cast {spell:dispel-magic}.', ['spell:dispel-magic']),
        ],
      },
      rest: {
        do: [
          HIT_DICE,
          S('A long rest refills **Lay on Hands** ({layOnHands} HP) and your spell slots.', ['lay-on-hands']),
          S('A short rest brings back **Channel Divinity**.', ['channel-divinity']),
        ],
        if: [
          I('The long rest ends', 'Prepare **{preparedCount}** spells for the day.', ['spellcasting']),
          I('A big fight is coming', 'Three allies get +5 HP maximum for 8 hours from {spell:aid}.', ['spell:aid']),
        ],
      },
      save: {
        do: [
          S('Your aura already adds **{auraBonus}** to your saves.', ['aura-of-protection']),
          BEST_SAVES,
          S('You are immune to disease.', ['divine-health']),
        ],
        if: [
          I('A charm effect', "You and allies within {auraRange} ft can't be charmed (**Aura of Devotion**).", ['aura-of-devotion']),
          I('A fear effect', "You and allies within {auraRange} ft can't be frightened (**Aura of Courage**).", ['aura-of-courage']),
        ],
      },
      check: CHECK,
      help: {
        do: [S('Action: **Lay on Hands**: up to **{layOnHands}** HP from your pool (even 1 HP gets a downed ally up), or 5 to cure a disease or poison.', ['lay-on-hands'])],
        if: [
          I('Pool empty', 'Cast {spell:cure-wounds}.', ['spell:cure-wounds']),
          I('Someone died in the last minute', 'Cast {spell:revivify}.', ['spell:revivify']),
          SHOVE,
        ],
        // Displaced by the shove/grapple If (U7).
        more: [I('Poisoned, blinded, deafened or paralyzed', 'Cast {spell:lesser-restoration}.', ['spell:lesser-restoration'])],
      },
    },
  },
};
