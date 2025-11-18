ServerEvents.recipes(event => {
event.remove({ id: 'thermal:device_tree_extractor' })
event.remove({ id: 'thermal:devices/tree_extractor/tree_extractor_jungle' })
event.remove({ id: 'thermal:parts/iron_gear' })
event.remove({ id: 'thermal:machine_frame' })
event.remove({ id: 'thermal:redstone_servo' })
event.remove({ id: 'thermal:dynamo_stirling' })
event.remove({ id: 'thermal:rubber_from_vine' })
event.remove({ id: 'thermal:rubber_from_dandelion' })
event.remove({ id: 'thermal:smelting/cured_rubber_from_smelting' })
event.remove({ id: 'nuclearcraft:alloy_smelter/thermal_cured_rubber' })
event.remove({ id: 'nuclearcraft:thermal_smelting/cured_rubber_from_smelting' })
event.remove({ id: 'thermal:machines/smelter/smelter_cured_rubber' })
event.remove({ id: 'systeams:boiler_pipe' })
event.remove({ id: 'thermal:machine_smelter' })
event.remove({ id: 'thermal:rf_coil' })
event.remove({ id: 'thermal:parts/gold_gear' })
event.remove({ id: 'thermal_extra:crafting/iron_rod' })
event.remove({ id: 'thermal:parts/lapis_gear' })

// [0] Iron Plate 
event.shaped(
  Item.of('thermal:iron_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'minecraft:iron_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// [0] Gold Plate 
event.shaped(
  Item.of('thermal:gold_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'minecraft:gold_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// [0] Copper Plate
event.shaped(
  Item.of('thermal:copper_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'minecraft:copper_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// [1] Gold Gear
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "thermal:gold_plate"
    },
    "B": {
      "item": "thermal:iron_gear"
    }
  },
  "result": {
    "item": "thermal:gold_gear"
  }
})

// Arboreal
event.shaped(
  Item.of('thermal:device_tree_extractor', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'AEA'
  ],
  {
    A: 'eidolon:polished_planks',
    B: 'supplementaries:faucet',
    C: 'kubejs:pewter_plate',
    D: 'extendedcrafting:frame',
    E: 'kubejs:black_steel_gear'
  }
)

// Rubber
event.remove({ id: 'thermal:rubber_3' })

event.shaped(
  Item.of('thermal:rubberwood_sapling', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'thermal_extra:sticky_ball',
    B: '#minecraft:saplings'
  }
)
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    " B ",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:red_alloy_plate"
    },
    "B": {
      "item": "thermal:iron_plate"
    }
  },
  "result": {
    "item": 'thermal:redstone_servo'
  }
})

event.custom({
    "type": "lychee:item_burning",
    "item_in": {
        "item": "kubejs:rubber_sulfur"
    },
    "post": {
        "type": "drop_item",
        "item": "thermal:cured_rubber"
    }
})

event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": 'thermal:rubber'
        }
      ],
      "count": 8
    },
    {
      "item": 'thermal:sulfur',
      "count": 1
    }
  ],
  "result": [
    {
      "item": "thermal:cured_rubber",
      "count": 8
    }
  ],
  "energy": 16000
})

event.custom({
  "type": "thermal:chiller",
  "ingredients": [
    {
      "fluid": "thermal:latex",
      "amount": 250
    },
    {
      "item": "thermal:chiller_ball_cast"
    }
  ],
  "result": [
    {
      "item": 'thermal:rubber',
      "count": 1
    }
  ],
  "energy": 20000
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "GHIHG",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "kubejs:black_iron_gear"
    },
    "B": {
      "item": "alexscaves:galena"
    },
    "C": {
      "item": "integratedterminals:menril_glass"
    },
    "D": {
      "item": "thermal:cured_rubber"
    },
    "E": {
      "item": "kubejs:electrotine_plate"
    },
    "F": {
      "item": "integrateddynamics:crystalized_menril_chunk"
    },
    "G": {
      "item": "thermal:rf_coil"
    },
    "H": {
      "item": "minecraft:piston"
    },
    "I": {
      "item": 'projectred_core:motor'
    }
  },
  "result": {
    "item": 'thermal:dynamo_stirling'
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "GHIHG",
    "DEJED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "thermal:lead_plate"
    },
    "B": {
      "item": "thermal:tin_gear"
    },
    "C": {
      "item": "kubejs:pristine_chipset"
    },
    "D": {
      "item": "integratedterminals:menril_glass"
    },
    "E": {
      "item": "extendedcrafting:advanced_component"
    },
    "F": {
      "item": "alexscaves:scarlet_neodymium_node"
    },
    "G": {
      "item": "kubejs:electrotine_gear"
    },
    "H": {
      "item": "forestry:electron_tube_tin"
    },
    "I": {
      "item": "extendedcrafting:frame"
    },
    "J": {
      "item": "alexscaves:azure_neodymium_node"
    }
  },
  "result": {
    "item": "thermal:machine_frame"
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "GHIHG",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "kubejs:electrotine_plate"
    },
    "B": {
      "item": "kubejs:black_iron_gear"
    },
    "C": {
      "item": "kubejs:pyrotheum"
    },
    "D": {
      "item": "integratedscripting:mendesite"
    },
    "E": {
      "item": "forestry:electron_tube_emerald"
    },
    "F": {
      "item": "alexscaves:raw_scarlet_neodymium"
    },
    "G": {
      "item": "thermal:rf_coil"
    },
    "H": {
      "item": "kubejs:sturdy_chipset"
    },
    "I": {
      "item": "thermal:machine_frame"
    }
  },
  "result": {
    "item": 'thermal:machine_smelter'
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "item": "thermal:copper_nugget"
    },
    "B": {
      "item": "kubejs:red_alloy_plate"
    },
    "C": {
      "item": "thermal:gold_gear"
    }
  },
  "result": {
    "item": 'thermal:rf_coil'
  }
})

event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'thermal:iron_plate' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'thermal_extra:iron_rod', count: 1 }
  ]
})

// Better recipe for resin balls
event.custom({
  "type": "integrateddynamics:drying_basin",
  "fluid": {
    "fluid": "thermal:resin",
    "amount": 250
  },
  "duration": 20,
  "result": {
    "item": 'thermal_extra:sticky_ball'
  }
})

event.custom({
  "type": "integrateddynamics:drying_basin",
  "fluid": {
    "fluid": "thermal:latex",
    "amount": 250
  },
  "duration": 40,
  "result": {
    "item": 'thermal:rubber'
  }
})

// Bronze Plate
event.shaped(
  Item.of('thermal:bronze_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'thermal:bronze_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Bronze Plate
event.shaped(
  Item.of('thermal:nickel_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'thermal:nickel_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Lapis Plate
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": 'kubejs:lapis_plate'
    },
    "B": {
      "item": 'kubejs:stone_gear'
    }
  },
  "result": {
    "item": 'thermal:lapis_gear'
  }
})

// Invar Plate
event.shaped(
  Item.of('thermal:invar_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'thermal:invar_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Electrum Plate
event.shaped(
  Item.of('thermal:electrum_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'thermal:electrum_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Lead Plate
event.shaped(
  Item.of('thermal:lead_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'thermal:lead_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Copper Rod
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'thermal:copper_plate' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'thermal_extra:copper_rod', count: 1 }
  ]
})

event.remove({ id: 'thermal_extra:crafting/copper_rod' })

// Silver Plate
event.shaped(
  Item.of('thermal:silver_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'thermal:silver_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Tin Plate
event.shaped(
  Item.of('thermal:tin_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'thermal:tin_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Copper Gear
event.remove({ id: 'thermal:parts/copper_gear' })

// Bronze Rod
event.remove({ id: 'thermal_extra:crafting/bronze_rod' })
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'thermal:bronze_plate' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'thermal_extra:bronze_rod', count: 1 }
  ]
})
})

