ServerEvents.recipes(event => {
  // Pattern
    event.remove({ id: "tconstruct:tables/pattern" })
    event.shapeless(
      Item.of('tconstruct:pattern'), // arg 1: output
      [
        '4x minecraft:paper'
      ]
    )

// Tree Bark to Planks
    event.shapeless(
      Item.of('minecraft:oak_planks'), // arg 1: output
      [
        '4x farmersdelight:tree_bark'
      ]
    )


// Cobblestone
 event.remove({ id: "projectvibrantjourneys:cobblestone_from_rocks" })
     event.shapeless(
      Item.of('minecraft:cobblestone'), // arg 1: output
      [
        '4x kubejs:rock'
      ]
    )

// Ceramic Plate
event.remove({ id: "ceramics:unfired_clay_plate" })
event.shaped(
  Item.of('ceramics:unfired_clay_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: '#perfectskies:hammer',
    B: 'minecraft:clay_ball',  //arg 3: the mapping object
  }
).damageIngredient('#perfectskies:hammer', 1)

// Clay Bucket
event.remove({ id: "ceramics:unfired_clay_bucket" })
event.shaped(
  Item.of('ceramics:unfired_clay_bucket', 1), // arg 1: output
  [
    '   ',
    'A A', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'ceramics:unfired_clay_plate',

  }
)

event.remove({ id: "cb_microblock:stone_rod" })
event.remove({ id: 'farmersdelight:cutting/stone' })

// Stone Rod
event.shaped(
  Item.of('cb_microblock:stone_rod', 1), // arg 1: output
  [
    '   ',
    ' A ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'kubejs:rock',

  }
)

// Sticks

event.remove({ id: "quark:tweaks/crafting/utility/misc/easy_sticks_bamboo" })
event.remove({ id: 'minecraft:stick' })
event.remove({ id: "quark:tweaks/crafting/utility/misc/easy_sticks" })
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { tag: 'minecraft:planks' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'minecraft:stick', count: 1 }
  ]
})

event.shaped(
  Item.of('minecraft:stick', 1), // arg 1: output
  [
    '   ',
    ' A ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:bamboo',

  }
)

// Clay Bucket
event.custom({
  "type": "tinkers_thinking:drying_rack",
  "ingredient": [
    {
      "item": 'ceramics:unfired_clay_bucket'
    }
  ],
  "output": {
    "item": 'minecraft:leather'
  }
})

// Stones give random nuggets when smelted
event.smelting('minecraft:iron_nugget', 'minecraft:andesite')
event.smelting('thermal:copper_nugget', 'minecraft:granite')
event.smelting('thermal:silver_nugget', 'minecraft:diorite')
event.smelting('thermal:tin_nugget', 'quark:shale')
event.smelting('thermal:nickel_nugget', 'quark:limestone')
event.smelting('minecraft:gold_nugget', 'quark:jasper')
})
