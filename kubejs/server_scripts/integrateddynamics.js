ServerEvents.recipes(event => {
event.remove({ id: 'treetap:id_menril' })
event.remove({ id: 'integrateddynamics:squeezer/base/menril_resin_logs' })
event.remove({ id: 'integrateddynamics:squeezer/base/menril_resin_planks' })
event.remove({ id: 'integrateddynamics:mechanical_squeezer/base/menril_resin_logs' })
event.remove({ id: 'integrateddynamics:mechanical_squeezer/base/menril_resin_planks' })

event.remove({ id: 'integrateddynamics:crafting/drying_basin' })
event.remove({ id: 'integrateddynamics:crafting/squeezer' })
event.custom({
  "type": "thermal:tree_extractor",
  "trunk": {
    "Name": "integrateddynamics:menril_log",
    "Properties": {
      "axis": "y"
    }
  },
  "leaves": {
    "Name": 'integrateddynamics:menril_leaves',
    "Properties": {
      "persistent": "false"
    }
  },
  "sapling": 'integrateddynamics:menril_sapling',
  "min_height": 4,
  "max_height": 16,
  "min_leaves": 16,
  "max_leaves": 24,
  "result": {
    "fluid": "integrateddynamics:menril_resin",
    "amount": 30
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
      "item": "architects_palette:algal_bricks"
    },
    "B": {
      "item": "farmersdelight:rope"
    },
    "C": {
      "item": "kubejs:duralumin_plate"
    },
    "D": {
      "item": "kubejs:impregnated_wood"
    },
    "E": {
      "item": "kubejs:empowered_rubber"
    },
    "F": {
      "item": "minecraft:cauldron"
    },
    "G": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "H": {
      "item": "tconstruct:seared_basin"
    },
    "I": {
      "item": "actuallyadditions:wood_casing"
    }
  },
  "result": {
    "item": 'integrateddynamics:drying_basin'
  }
})
event.remove({ id: 'integratedterminals:crafting/part_terminal_storage' })
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
      "item": "kubejs:glowstone_crystal"
    },
    "B": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "C": {
      "item": "integratedterminals:menril_glass"
    },
    "D": {
      "item": "integrateddynamics:cable"
    },
    "E": {
      "item": "forestry:electron_tube_diamond"
    },
    "F": {
      "type": "forge:nbt",
      "item": "rftoolsutility:inventory_module",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "G": {
      "item": "integrateddynamics:variable_transformer_input"
    },
    "H": {
      "item": "kubejs:glinting_chipset"
    },
    "I": {
      "item": "integrateddynamics:part_display_panel"
    }
  },
  "result": {
    "item": 'integratedterminals:part_terminal_storage'
  }
})
event.remove({ id: 'integratedterminals:crafting/part_display_panel' })
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
      "item": "kubejs:reinforced_obsidian_block"
    },
    "B": {
      "item": "kubejs:empowered_rubber"
    },
    "C": {
      "item": "minecraft:anvil"
    },
    "D": {
      "item": "integratedterminals:menril_glass"
    },
    "E": {
      "item": "kubejs:black_steel_plate"
    },
    "F": {
      "item": "kubejs:gelatinous_ferrousslime_drop"
    },
    "G": {
      "item": "alexscaves:galena"
    },
    "H": {
      "item": "kubejs:electrotine_gear"
    },
    "I": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": "integrateddynamics:squeezer"
  }
})

// Lead

event.custom({
  "type": "integrateddynamics:squeezer",
  "item": {
    "item": 'alexscaves:galena'
  },
  "result": {
    "items": [
      {
        "item": {
          "item": 'thermal:lead_dust',
          "count": 1
        }
      }
    ]
  }
})
event.remove({ id: 'integrateddynamics:crafting/part_display_panel' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "GEHEG",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "B": {
      "item": "integrateddynamics:menril_berries"
    },
    "C": {
      "item": "kubejs:sturdy_chipset"
    },
    "D": {
      "item": "kubejs:electrotine_crystal"
    },
    "E": {
      "item": "integrateddynamics:cable"
    },
    "F": {
      "item": "integrateddynamics:variable_transformer_output"
    },
    "G": {
      "item": "integrateddynamics:part_static_light_panel"
    },
    "H": {
      "type": "forge:nbt",
      "item": "rftoolsutility:text_module",
      "count": 1,
      "nbt": "{Damage:0}"
    }
  },
  "result": {
    "item": 'integrateddynamics:part_display_panel'
  }
})
event.remove({ id: 'integrateddynamics:crafting/cable' })
event.remove({ id: 'integrateddynamics:crafting/cable_rotated' })
event.remove({ id: 'integrateddynamics:crafting/variable' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": 'integrateddynamics:crystalized_menril_chunk'
    },
    "B": {
      "item": "thermal:cured_rubber"
    },
    "C": {
      "item": "kubejs:refined_chipset"
    },
    "D": {
      "item": "thermal:lead_block"
    }
  },
  "result": {
    "item": 'integrateddynamics:cable',
    "count": 8
  }
})

event.shaped(
  Item.of('integrateddynamics:variable', 16), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'integrateddynamics:crystalized_menril_block',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// Menril glass
event.remove({ id: 'integratedterminals:drying_basin/menril_glass' })
event.remove({ id: 'integratedterminals:mechanical_drying_basin/menril_glass' })
event.custom({
  "type": "integrateddynamics:drying_basin",
  "fluid": {
    "fluid": "integrateddynamics:menril_resin",
    "amount": 1000
  },
  "item": {
    "item": 'tinkers_thinking:tempered_glass'
  },
  "duration": 200,
  "result": {
    "item": "integratedterminals:menril_glass"
  }
})

event.custom({
  "type": "integrateddynamics:mechanical_drying_basin",
  "fluid": {
    "fluid": "integrateddynamics:menril_resin",
    "amount": 1000
  },
  "item": {
    "item": 'tinkers_thinking:tempered_glass'
  },
  "duration": 20,
  "result": {
    "item": "integratedterminals:menril_glass"
  }
})
})

