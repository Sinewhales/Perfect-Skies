ServerEvents.recipes(event => {
// [2] Purple Neodymium
event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": 'alexscaves:azure_neodymium_ingot'
        },

      ],
      "count": 1
    },
    {
      "item": 'alexscaves:scarlet_neodymium_ingot',
      "count": 1
    }
  ],
  "result": [
    {
      "item": 'kubejs:purple_neodymium',
      "count": 1
    }
  ],
  "energy": 16000
})

// Duralumin Block
event.shaped(
  Item.of('kubejs:duralumin_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'kubejs:duralumin'
  }
)

// Black Steel Block
event.shaped(
  Item.of('kubejs:black_steel_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'kubejs:black_steel_ingot'
  }
)

// Conductive Alloy
event.shapeless(
  Item.of('kubejs:conductive_alloy_block'), // arg 1: output
  [
    '9x kubejs:conductive_alloy_ingot'
  ]
)

// Demon Metal
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": 'tinkers_thinking:ardite_ingot'
    },
    "block_in": "minecraft:lava",
    "post": [
        {
            "type": "drop_item",
            "item": 'kubejs:demon_metal'
        }
    ]
})
})

