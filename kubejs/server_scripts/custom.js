ServerEvents.recipes(event => {

  // [0] Plate Hammer
event.shaped(
  Item.of('kubejs:plate_hammer', 1), // arg 1: output
  [
    'BBB',
    'BBB', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:stick',
    B: 'minecraft:iron_ingot',  //arg 3: the mapping object
  }
)

// [0] Scanner Battery
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " A ",
    "BCB",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "projectred_core:red_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": 'projectred_core:electrotine_dust'
    }
  },
  "result": {
    "item": "kubejs:scanner_battery"
  }
})
// [0] Cactus Juice
event.shapeless(
  Item.of('kubejs:cactus_juice'), // arg 1: output
  [
    'minecraft:cactus'
  ]
)


// [0] Inactive Luminessence
event.custom({
  "type": "ae2:transform",
  "circumstance": {
    "type": "fluid",
    "tag": "minecraft:water"
  },
  "ingredients": [
    {
      "item": 'mysticalagriculture:inferium_essence'
    },
    {
      "item": 'minecraft:glowstone_dust'
    },
        {
      "item": 'projectred_core:electrotine_dust'
    }
  ],
  "result": {
    "item": 'kubejs:inactive_luminessence',
    "count": 2
  }
})

// [0] Ink
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": "minecraft:black_dye"
    },
    "block_in": {
        "blocks": ["water"],
        "state": {
            "level": 0
        }
    },
    "post": [
        {
            "type": "place",
            "block": "kubejs:black_dye"
        }
    ]
})

event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": 'supplementaries:antique_ink'
    },
    "block_in": {
        "blocks": ["water"],
        "state": {
            "level": 0
        }
    },
    "post": [
        {
            "type": "place",
            "block": "kubejs:black_dye"
        }
    ]
})

// Ancient Rune
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "tag": 'minecraft:decorated_pot_sherds'
    },
    "block_in": "kubejs:enchanted_water",
    "post": [
        {
            "type": "drop_item",
            "item": 'kubejs:ancient_rune'
        },
        {
            "type": "place",
            "block": "*"
        }
    ]
})

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

// [1] Sulfuric Rubber
event.shaped(
  Item.of('kubejs:rubber_sulfur', 8), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'thermal:rubber',
    B: 'thermal:sulfur'  //arg 3: the mapping object
  }
)

// [1] Electrotine Gear

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "kubejs:electrotine_plate"
    },
    "B": {
      "item": "thermal:iron_gear"
    }
  },
  "result": {
    "item": "kubejs:electrotine_gear"
  }
})

// [1] Tanned Leather

event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": "minecraft:leather",
  "fluid": {
    "fluid": "thermal:resin",
    "amount": 250
  },
  "duration": 100,
  "result": {
    "item": 'kubejs:tanned_leather'
  }
})

// [1] Nature Extract
event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": 'quark:blossom_log',
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'quark:yellow_blossom_leaves',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": 'quark:yellow_blossom_sapling',
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "kubejs:nature_extract",
    "amount": 30
  }
})

event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": 'quark:blossom_log',
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'quark:blue_blossom_leaves',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": 'quark:blue_blossom_sapling',
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "kubejs:nature_extract",
    "amount": 30
  }
})

event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": 'quark:blossom_log',
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'quark:red_blossom_leaves',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": 'quark:red_blossom_sapling',
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "kubejs:nature_extract",
    "amount": 30
  }
})

event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": 'quark:blossom_log',
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'quark:lavender_blossom_leaves',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": 'quark:lavender_blossom_sapling',
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "kubejs:nature_extract",
    "amount": 30
  }
})

event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": 'quark:blossom_log',
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'quark:orange_blossom_leaves',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": 'quark:orange_blossom_sapling',
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "kubejs:nature_extract",
    "amount": 30
  }
}) 

// [1] Electrotine Crystal
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": 'projectred_exploration:electrotine_block'
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:electrotine_crystal"
  }
})

// [1] Glowstone Crystal
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": 'extendedcrafting:luminessence_block'
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:glowstone_crystal"
  }
})

// [1] Heating Coil
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'kubejs:red_alloy_plate' }
  ],
  tool: { item: 'kubejs:plate_hammer' },
  result: [
    { item: 'kubejs:heat_coil', count: 1 }
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

// [2] Dark Iron Gear (Thermal)
event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": 'thermal:iron_gear'
    },
    {
      "fluid": "kubejs:black_dye",
      "amount": 250
    }
  ],
  "result": [
    {
      "item": 'kubejs:black_iron_gear'
    }
  ],
  "experience": 0.1
})

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

// [2] Ink (Thermal)
event.custom({
  "type": "thermal:brewer",
  "ingredients": [
    {
      "item": 'minecraft:black_dye'
    },
	{
      "fluid": "minecraft:water",
	  "amount": 1000
    }
  ],
  "result": [
    {
      "fluid": "kubejs:black_dye",
      "amount": 1000
    }
  ],
  "energy": 1000
})

// Raw Aluminum Block
event.shaped(
  Item.of('kubejs:raw_aluminum_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'kubejs:raw_aluminum_ore'  //arg 3: the mapping object
  }
)

// Cotton Cloth
event.shaped(
  Item.of('kubejs:cotton_cloth', 1), // arg 1: output
  [
    'ABA',
    'BAB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'rusticdelight:cotton_boll',
    B: 'minecraft:string',  //arg 3: the mapping object
  }
)

// Impregnated Wood
event.shaped(
  Item.of('kubejs:impregnated_wood', 8), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: '#minecraft:planks',
    B: 'thermal:resin_bucket',  //arg 3: the mapping object
  }
)

event.shaped(
  Item.of('kubejs:crushing_hammer', 1), // arg 1: output
  [
    ' A ',
    ' BA', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'minecraft:stick',  //arg 3: the mapping object
  }
)

// Mud Bricks
event.smelting('kubejs:mud_brick', 'kubejs:mud_ball')

// Aluminum
event.smelting('kubejs:aluminum_ingot', 'kubejs:raw_aluminum_ore')
event.blasting('kubejs:aluminum_ingot', 'kubejs:raw_aluminum_ore')

event.smelting('kubejs:aluminum_ingot', 'kubejs:aluminum_dust')
event.blasting('kubejs:aluminum_ingot', 'kubejs:aluminum_dust')
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

// Red Alloy Block
event.shaped(
  Item.of('kubejs:red_alloy_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'projectred_core:red_ingot'
  }
)

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

// Small Mud Bricks
event.shaped(
  Item.of('kubejs:mud_bricks', 1), // arg 1: output
  [
    'AA ',
    'AA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'kubejs:mud_brick'  //arg 3: the mapping object
  }
)

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

// Double Compressed Cobblestone
event.shaped(
  Item.of('kubejs:double_compressed_cobblestone', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'quark:sturdy_stone',

  }
)

// Compressed Furnace
event.shaped(
  Item.of('kubejs:compressed_furnace', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:furnace',

  }
)

// Triple Compressed Cobblestone
event.shaped(
  Item.of('kubejs:triple_compressed_cobblestone', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'kubejs:double_compressed_cobblestone',

  }
)

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

// Better Recipes for Lapis Plates
event.custom({
  "type": "integrateddynamics:squeezer",
  "item": {
    "item": 'minecraft:lapis_block'
  },
  "result": {
    "items": [
      {
        "item": {
          "item": 'kubejs:lapis_plate',
          "count": 4
        }
      }
    ]
  }

  
}
)
event.remove({ id: 'integrateddynamics:squeezer/ore/dust_obsidian' })
event.custom({
  "type": "integrateddynamics:squeezer",
  "item": {
    "item": 'minecraft:obsidian'
  },
  "result": {
    "items": [
      {
        "item": {
          "item": 'kubejs:obsidian_plate',
          "count": 2
        }
      }
    ]
  }})

  event.custom({
  "type": "integrateddynamics:squeezer",
  "item": {
    "tag": 'minecraft:logs'
  },
  "result": {
    "items": [
      {
        "item": {
          "item": 'kubejs:wood_sheet',
          "count": 2
        }
      }
    ]
  }}) 

  // Emerald Heart Dupe
  event.recipes.summoningrituals
    .altar(Ingredient.of('kubejs:heart_of_emerald'))
    .itemOutput('2x kubejs:heart_of_emerald')
    .input('kubejs:enchanted_water_bucket')
    .input('8x extendedcrafting:luminessence')
    .input('2x minecraft:emerald')
    .input('farmersdelight:organic_compost')
    .input('2x tconstruct:jeweled_apple')
    .input('minecraft:white_dye')
    .recipeTime(200)

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

// Artisan Worktable
event.shapeless(
  Item.of('custommachinery:custom_machine_item', '{machine:"kubejs:artistan_worktable"}'), // arg 1: output
  [
    'minecraft:crafting_table',
    '#perfectskies:hammer'
  ]
).damageIngredient('#perfectskies:hammer', 1)

// Aluminum
event.shapeless(
  Item.of('kubejs:aluminum_ingot'), // arg 1: output
  [
    '9x kubejs:aluminum_nugget'
  ]
)

event.shapeless(
  Item.of('kubejs:aluminum_nugget', 9), // arg 1: output
  [
    'kubejs:aluminum_ingot'
  ]
)
// Alu Block
event.shapeless(
  Item.of('kubejs:aluminum_block'), // arg 1: output
  [
    '9x kubejs:aluminum_ingot'
  ]
)

event.shapeless(
  Item.of('kubejs:aluminum_ingot', 9), // arg 1: output
  [
    'kubejs:aluminum_block'
  ]
)

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

// Buildcraft Depreciation
// Wooden Gear
event.shaped(
  Item.of('kubejs:wooden_gear', 1), // arg 1: output
  [
    ' A ',
    'A A', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'forestry:impregnated_stick',

  }
)

// Stone Gear
event.shaped(
  Item.of('kubejs:stone_gear', 1), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'netherexp:soul_slate',
    B: 'kubejs:wooden_gear'

  }
)

// Redstone Crystal
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": 'minecraft:redstone_block'
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:redstone_crystal"
  }
})

// Conductive Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "minecraft:redstone"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "kubejs:redstone_chipset"
  }
})
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:redstone_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:conductive_chipset"
  }
})


// Sturdy Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:iron_ingot"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:iron_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:iron_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:sturdy_chipset"
  }
})

// Refined Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:gold_ingot"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:golden_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:golden_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:refined_chipset"
  }
})

// Pristine Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:diamond"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:diamond_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:diamond_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:pristine_chipset"
  }
})

// Pulsating Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:ender_pearl"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:ender_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:ender_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:pulsating_chipset"
  }
})

// Quartz Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": 'minecraft:quartz'
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:quartz_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:quartz_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:glinting_chipset"
  }
})

// Attuned
// Quartz Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": 'minecraft:emerald'
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:emerald_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:emerald_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:attuned_chipset"
  }
})

// Soul Extract
event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": 'minecraft:warped_stem',
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'minecraft:warped_wart_block',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": "minecraft:warped_fungus",
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "kubejs:soul_extract",
    "amount": 30
  }
})

event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": 'minecraft:crimson_stem',
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'minecraft:nether_wart_block',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": "minecraft:crimson_fungus",
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "kubejs:soul_extract",
    "amount": 30
  }
})

// Soul Glass Easier
event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": "minecraft:glass",
  "fluid": {
    "fluid": "kubejs:soul_extract",
    "amount": 500
  },
  "duration": 100,
  "result": {
    "item": 'tconstruct:soul_glass'
  }
})

// Empowered Rubber
event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": 'thermal:cured_rubber',
  "fluid": {
    "fluid": "integrateddynamics:menril_resin",
    "amount": 500
  },
  "duration": 100,
  "result": {
    "item": 'kubejs:empowered_rubber'
  }
})

// Paper Stack
event.shaped(
  Item.of('kubejs:paper_stack', 1), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:paper',
    B: 'minecraft:string',  //arg 3: the mapping object
  }
)

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

// Ardite Rod
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'kubejs:ardite_plate' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'kubejs:ardite_rod', count: 1 }
  ]
})

// Dried Glowberries
event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'minecraft:glow_berries'
    }
  ],
  "output": {
    "item": 'kubejs:dried_glowberries'
  },
  "dryingTimeInTicks": 100
})

// Ardite Dust
event.smelting('tinkers_thinking:ardite_ingot', 'kubejs:ardite_dust')
event.blasting('tinkers_thinking:ardite_ingot', 'kubejs:ardite_dust')

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item":  'kubejs:ardite_dust'
  },
  "result": {
    "amount": 90,
    "fluid": "tinkers_thinking:molten_ardite"
  },
  "temperature": 1296,
  "time": 20
})



})






// Ink (Squid Milking)
function milk(event, currentTime) {
  event.getTarget().persistentData.put("lastMilked", currentTime)
  let pitch =  Math.random() + 0.8;
  Utils.server.runCommandSilent(`playsound minecraft:entity.cow.milk neutral @a ${event.getTarget().getX()} ${event.getTarget().getY()} ${event.getTarget().getZ()} 1 ${pitch}`)
  if (event.player.getMainHandItem().count == 1)
    event.server.scheduleInTicks(1, () => {
      event.player.setMainHandItem("kubejs:black_dye_bucket");
    });
  else{
    event.player.setMainHandItem(event.player.getMainHandItem().withCount(event.player.getMainHandItem().count - 1))
    event.player.give(Item.of("kubejs:black_dye_bucket").withCount(1))
  } 
  }
ItemEvents.entityInteracted("minecraft:bucket", (event) => {
    if (event.getTarget().getType() != "minecraft:squid") return
    let currentTime = event.getTarget().level.getTime();
    event.player.swing();
    if (!event.getTarget().persistentData.get("lastMilked")) {
        event.getTarget().persistentData.put("lastMilked", currentTime) // first time milking
        milk(event, currentTime)
        event.cancel();
    }else{
        let lastMilked = event.getTarget().persistentData.getLong("lastMilked");
        let timeSinceLastMilked = currentTime - lastMilked;
        if (timeSinceLastMilked < 400) {
            event.getLevel().runCommandSilent("/particle angry_villager " + event.getTarget().getX() + " " + event.getTarget().getY() + " " + event.getTarget().getZ() + " 0.3 0.7 0.3 1 4");
            event.getLevel().runCommandSilent(`/title ${event.player.displayName.getString()} actionbar "Can't milk now. Try again later"`);
            event.cancel();
        }else{
          milk(event, currentTime)
          event.cancel();
        }
    }
    
});
