ServerEvents.recipes(event => {
  // Wood
event.remove({ id: 'fluidtank:tank_wood' })
event.shaped(
  Item.of('fluidtank:tank_wood', 1), // arg 1: output
  [
    'ABA',
    'B B', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'kubejs:wood_sheet',
    B: 'minecraft:glass_pane',  //arg 3: the mapping object
  }
)

// Stone
event.remove({ id: 'fluidtank:tank_stone' })
event.shaped(
  Item.of('fluidtank:tank_stone', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'CBC'
  ],
  {
    A: 'netherexp:soul_slate',
    B: 'fluidtank:tank_wood',
    C: 'extendedcrafting:black_iron_slate' //arg 3: the mapping object
  }
)

// Copper Tank
event.remove({ id: 'fluidtank:tank_copper' })
event.shaped(
  Item.of('fluidtank:tank_copper', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'CBC'
  ],
  {
    A: 'thermal:copper_plate',
    B: 'fluidtank:tank_stone',
    C: 'kubejs:black_steel_plate'
  }
)

event.remove({ id: 'fluidtank:tank_tin' })
event.remove({ id: 'fluidtank:tank_iron' })

event.remove({ id: 'fluidtank:tank_bronze' })

// Empty Tank
event.shapeless(
  Item.of('fluidtank:tank_wood'), // arg 1: output
  [
    'fluidtank:tank_wood'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_stone'), // arg 1: output
  [
    'fluidtank:tank_stone'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_iron'), // arg 1: output
  [
    'fluidtank:tank_iron'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_gold'), // arg 1: output
  [
    'fluidtank:tank_gold'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_diamond'), // arg 1: output
  [
    'fluidtank:tank_diamond'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_emerald'), // arg 1: output
  [
    'fluidtank:tank_emerald'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_star'), // arg 1: output
  [
    'fluidtank:tank_star'
  ]
)

event.shapeless(
  Item.of('fluidtank:creative'), // arg 1: output
  [
    'fluidtank:creative'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_copper'), // arg 1: output
  [
    'fluidtank:tank_copper'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_tin'), // arg 1: output
  [
   'fluidtank:tank_tin'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_bronze'), // arg 1: output
  [
    'fluidtank:tank_bronze'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_lead'), // arg 1: output
  [
    'fluidtank:tank_lead'
  ]
)

event.shapeless(
  Item.of('fluidtank:tank_silver'), // arg 1: output
  [
    'fluidtank:tank_silver'
  ]
)
})
