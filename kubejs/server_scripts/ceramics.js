ServerEvents.recipes(event => {
// Circuits in Kiln
event.custom({
  "type": "ceramics:kiln",
  "category": "item",
  "cookingtime": 100,
  "experience": 0.1,
  "ingredient": {
    "item": 'minecraft:smooth_stone'
  },
  "result": {
    "count": 2,
    "item": "projectred_core:plate"
  }
})

// Algal Bricks in Kiln
event.custom({
  "type": "ceramics:kiln",
  "category": "item",
  "cookingtime": 100,
  "experience": 0.1,
  "ingredient": {
    "item": 'architects_palette:algal_blend'
  },
  "result": {
    "count": 1,
    "item": 'architects_palette:algal_brick'
  }
})

// Scorched Bricks
event.custom({
  "type": "ceramics:kiln",
  "category": "item",
  "cookingtime": 100,
  "experience": 0.1,
  "ingredient": {
    "item": 'tconstruct:nether_grout'
  },
  "result": {
    "count": 2,
    "item": 'tconstruct:scorched_brick'
  }
})

// Kiln
event.remove({ id: "ceramics:kiln" })
event.shaped(
  Item.of('ceramics:kiln', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'CCC'
  ],
  {
    A: 'ceramics:clay_plate',
    B: 'minecraft:furnace',
    C: 'minecraft:bricks'

  }
)
})

