ServerEvents.recipes(event => {


// Compost
event.remove({ id: 'farmersdelight:organic_compost_from_rotten_flesh' })
event.remove({ id: 'farmersdelight:organic_compost_from_tree_bark' })

event.shapeless(
  Item.of('farmersdelight:organic_compost'), // arg 1: output
  [
'4x thermal:compost'
  ]
)

// Stone Knife 
event.remove({ id: 'moredelight:stone_knife' })
event.shapeless(
  Item.of('moredelight:stone_knife'), // arg 1: output
  [
'minecraft:stick',
'kubejs:rock'
  ]
)
// Cooking Pot
event.remove({ id: 'farmersdelight:cooking_pot' })
event.shaped(
  Item.of('farmersdelight:cooking_pot', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    A: 'tconstruct:seared_brick',
    B: Item.of('tconstruct:large_plate', '{Material:"tconstruct:copper"}').strongNBT(),
    C: 'tconstruct:hepatizon_ingot',
    D: 'tinkers_thinking:pulp_bottle'

  }
)

event.remove({ id: 'farmersdelight:canvas' })

})

