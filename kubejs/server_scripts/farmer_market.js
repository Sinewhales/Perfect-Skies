
ServerEvents.recipes(event => {
event.remove({ id: 'farmingforblockheads:market' })
event.shaped(
  Item.of('farmingforblockheads:market', 1), // arg 1: output
  [
    'ABA',
    'C C', // arg 2: the shape (array of strings)
    'DED'
  ],
  {
    A: 'thermal:iron_plate',
    B: 'kubejs:heart_of_emerald',
    C: 'forestry:impregnated_stick',
    D: 'quark:blossom_log',
    E: 'minecraft:red_wool'
  }
)
})

