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

})
