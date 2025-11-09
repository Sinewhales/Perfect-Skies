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
})

