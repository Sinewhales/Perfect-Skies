ServerEvents.recipes(event => {
// Circuits in Kiln
event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'minecraft:smooth_stone'}, result: Item.of("projectred_core:plate",2)})


// Algal Bricks in Kiln
event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'architects_palette:algal_blend'}, result: Item.of('architects_palette:algal_brick',1)})


// Scorched Bricks
event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'tconstruct:nether_grout'}, result: Item.of('tconstruct:scorched_brick',2)})

// Grout in Kiln
event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'tconstruct:grout'}, result: Item.of('tconstruct:seared_brick', 1)})

// Kiln
event.remove({ id: "clayworks:kiln" })
event.shaped(
  Item.of('clayworks:kiln', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    A: 'supplementaries:daub',
    B: 'minecraft:furnace',
    C: 'minecraft:terracotta'

  }
)
})

