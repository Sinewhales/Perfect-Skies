ServerEvents.recipes(event => {


// Compost
event.remove({ id: 'farmersdelight:organic_compost_from_rotten_flesh' })
event.remove({ id: 'farmersdelight:organic_compost_from_tree_bark' })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", 'farmersdelight:organic_compost')
.requireItem('minecraft:dirt', "input1").requireItem('farmersdelight:straw', "input2").requireItem('thermal:compost', "input4").requireItem('thermal:niter', "input5").requireFluid(Fluid.of("minecraft:water", 1000))
event.campfireCooking('farmersdelight:rich_soil', 'farmersdelight:organic_compost', 0.35, 400)

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


})

