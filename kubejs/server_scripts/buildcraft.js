ServerEvents.recipes(event => {
event.remove({ id: 'buildcraftcore:gear_wood' })
event.remove({ id: 'buildcraftsilicon:assembly_table' })
event.remove({ id: 'buildcraftsilicon:laser' })

// [1] Wood Gear
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " A ",
    "A A",
    " A "
  ],
  "key": {
    "A": {
      "item": "forestry:impregnated_stick"
    }
  },
  "result": {
    "item": 'buildcraftcore:gear_wood'
  }
})

// [1] Stone Gear
event.remove({ id: 'buildcraftcore:gear_stone' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "quark:shale"
    },
    "B": {
      "item": "buildcraftcore:gear_wood"
    }
  },
  "result": {
    "item": 'buildcraftcore:gear_stone'
  }
})

// [1] Stirling Engine
event.remove({ id: 'buildcraftenergy:engine_stone' })
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
      "item": "buildcraftcore:gear_stone"
    },
    "B": {
      "item": "architects_palette:moonshale"
    },
    "C": {
      "item": "minecraft:tinted_glass"
    },
    "D": {
      "item": "geolosys:anthracite_coal"
    },
    "E": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "F": {
      "item": "integrateddynamics:crystalized_menril_chunk"
    },
    "G": {
      "item": "kubejs:heat_coil"
    },
    "H": {
      "item": "minecraft:piston"
    },
    "I": {
      "item": "buildcraftcore:engine_wood"
    }
  },
  "result": {
    "item": 'buildcraftcore:engine_stone'
  }
})

// [1] Redstone Engine

event.remove({ id: 'buildcraftcore:engine_wood' })
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
      "item": "buildcraftcore:gear_wood"
    },
    "B": {
      "item": "minecraft:warped_planks"
    },
    "C": {
      "item": "minecraft:glass"
    },
    "D": {
      "item": "minecraft:redstone"
    },
    "E": {
      "item": "thermal:copper_plate"
    },
    "F": {
      "item": "thermal_extra:sticky_ball"
    },
    "G": {
      "item": "kubejs:wood_sheet"
    },
    "H": {
      "item": "minecraft:piston"
    },
    "I": {
      "item": "projectred_expansion:frame"
    }
  },
  "result": {
    "item": 'buildcraftcore:engine_wood'
  }
})

// [1] Assembly Table

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "CGHGC",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "kubejs:obsidian_plate"
    },
    "B": {
      "item": "thermal:lead_gear"
    },
    "C": {
      "item": "alexscaves:raw_scarlet_neodymium"
    },
    "D": {
      "item": "kubejs:red_alloy_plate"
    },
    "E": {
      "item": "integratedscripting:mendesite"
    },
    "F": {
      "item": "minecraft:diamond_block"
    },
    "G": {
      "item": "extendedcrafting:basic_table"
    },
    "H": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": 'buildcraftsilicon:assembly_table'
  }
})

// [1] Laser

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " ABA ",
    " BCB ",
    " ABA ",
    " DED ",
    "DEEED"
  ],
  "key": {
    "A": {
      "item": "alexscaves:raw_scarlet_neodymium"
    },
    "B": {
      "item": "kubejs:red_alloy_plate"
    },
    "C": {
      "item": "minecraft:diamond"
    },
    "D": {
      "item": "kubejs:black_iron_gear"
    },
    "E": {
      "item": "kubejs:obsidian_plate"
    }
  },
  "result": {
    "item": 'buildcraftsilicon:laser'
  }
})

// Pipe Sealant
event.remove({ id: 'buildcrafttransport:pipe_sealant' })
event.shapeless(
  Item.of('buildcrafttransport:waterproof'), // arg 1: output
  [
    'tinkers_thinking:earth_slime_drop',
    'minecraft:green_dye',
    'thermal:rubber',
    'kubejs:amber_paste_chunk'
  ]
)

// Iron Pipe
event.replaceInput(
  { id: 'buildcrafttransport:pipe_items_iron_colorless_colorless' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'thermal:iron_plate'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

// Gold Pipe
event.replaceInput(
  { id: 'buildcrafttransport:pipe_items_gold_colorless_colorless' }, // Arg 1: the filter
  'minecraft:gold_ingot',            // Arg 2: the item to replace
  'thermal:gold_plate'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)


})

