ServerEvents.recipes(event => {
// [1] Electrotine Plate

event.shaped(
  Item.of('kubejs:electrotine_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'projectred_core:electrotine_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Amethyst Bronze Plate
event.shaped(
  Item.of('kubejs:amethyst_bronze_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'tconstruct:amethyst_bronze_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// [1] Diamond Plate

event.shaped(
  Item.of('kubejs:diamond_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'minecraft:diamond',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// [1] Red Alloy Plate
event.shaped(
  Item.of('kubejs:red_alloy_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'projectred_core:red_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Pewter
event.shaped(
  Item.of('kubejs:pewter_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'eidolon:pewter_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// [1] Obsidian Plate
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'minecraft:obsidian'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": "kubejs:obsidian_plate",
            "count": 2
        }
    ]
})

// [1] Wood Sheet
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "tag": 'minecraft:logs'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": "kubejs:wood_sheet",
            "count": 2
        }
    ]
})

// [2] Purple Neodymium Plate
event.shaped(
  Item.of('kubejs:purple_neodymium_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'kubejs:purple_neodymium',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)


// [2] Electrotine Plate (Thermal)
event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'projectred_core:electrotine_ingot'
  },
  "result": [
    {
      "item": 'kubejs:electrotine_plate'
    }
  ]
})

// Amethyst Bronze
event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'tconstruct:amethyst_bronze_ingot'
  },
  "result": [
    {
      "item": 'kubejs:amethyst_bronze_plate'
    }
  ]
})

// Pewter
event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'eidolon:pewter_ingot'
  },
  "result": [
    {
      "item": 'kubejs:pewter_plate'
    }
  ]
})

// [2] Diamond Plate (Thermal)
event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'minecraft:diamond'
  },
  "result": [
    {
      "item": 'kubejs:diamond_plate'
    }
  ]
})

// [2] Red Alloy Plate (Thermal)

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'projectred_core:red_ingot'
  },
  "result": [
    {
      "item": 'kubejs:red_alloy_plate'
    }
  ]
})

// [2] Purple Neodymium Plate (Thermal)

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'kubejs:purple_neodymium'
  },
  "result": [
    {
      "item": 'kubejs:purple_neodymium_plate'
    }
  ]
})

// Lapis Plate
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'minecraft:lapis_block'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'kubejs:lapis_plate',
            "count": 4
        }
    ]
})

// Duralumin Plate
event.shaped(
  Item.of('kubejs:duralumin_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'kubejs:duralumin',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'kubejs:duralumin'
  },
  "result": [
    {
      "item": 'kubejs:duralumin_plate'
    }
  ]
})

// Pulsating Iron Plate
event.shaped(
  Item.of('kubejs:pulsating_iron_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'kubejs:pulsating_iron',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'kubejs:pulsating_iron'
  },
  "result": [
    {
      "item": 'kubejs:pulsating_iron_plate'
    }
  ]
})

// Black Steel Plate
event.shaped(
  Item.of('kubejs:black_steel_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'kubejs:black_steel_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'kubejs:black_steel_ingot'
  },
  "result": [
    {
      "item": 'kubejs:black_steel_plate'
    }
  ]
})

// Aluminum Plate
event.shaped(
  Item.of('kubejs:aluminum_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'kubejs:aluminum_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'kubejs:aluminum_ingot'
  },
  "result": [
    {
      "item": 'kubejs:aluminum_plate'
    }
  ]
})

// Ardite Plate
event.shaped(
  Item.of('kubejs:ardite_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'tinkers_thinking:ardite_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

})

