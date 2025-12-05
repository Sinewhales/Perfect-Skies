ServerEvents.recipes(event => {
event.remove({ id: 'actuallyadditions:crafter_on_a_stick' })
event.remove({ id: 'industrialforegoing:dissolution_chamber/xp_bottles' })
event.remove({ id: 'thermal:machines/centrifuge/centrifuge_experience_bottle' })
event.custom({
  "type": "industrialforegoing:dissolution_chamber",
  "input": [],
  "inputFluid": "{Amount:250,FluidName:\"mob_grinding_utils:fluid_xp\"}",
  "output": {
    "count": 1,
    "item": "minecraft:experience_bottle"
  },
  "processingTime": 5
})

event.shapeless(
  Item.of('mob_grinding_utils:fluid_xp_bucket'), // arg 1: output
  [
    'industrialforegoing:essence_bucket'
  ]
)

event.custom({
  "type": "thermal:centrifuge",
  "ingredient": {
    "item": "minecraft:experience_bottle"
  },
  "result": [
    {
      "item": "minecraft:glass_bottle"
    },
    {
      "fluid": "mob_grinding_utils:fluid_xp",
      "amount": 250
    }
  ],
  "energy": 400
})

// Crafters 
event.remove({ id: 'trials:crafter' })
event.remove({ id: 'quark:automation' })

// Iron Dust
event.remove({ id: 'alchemistry:compactor/iron_dust' })
event.remove({ input: 'chemlib:iron_dust' })
event.custom({
  "type": "alchemistry:compactor",
  "group": "alchemistry:compactor",
  "input": {
    "count": 16,
    "ingredient": {
      "item": "chemlib:iron"
    }
  },
  "result": {
    "item": 'thermal:iron_dust'
  }
})

// Gold Dust
event.remove({ id: 'alchemistry:compactor/gold_dust' })
event.remove({ input: 'chemlib:gold_dust' })
event.custom({
  "type": "alchemistry:compactor",
  "group": "alchemistry:compactor",
  "input": {
    "count": 16,
    "ingredient": {
      "item": "chemlib:gold"
    }
  },
  "result": {
    "item": 'thermal:gold_dust'
  }
})

// Iron Gear
event.remove({ id: 'industrialforegoing:iron_gear' })
event.remove({ id: 'hammerlib:gears/iron' })
event.replaceInput(
  { input: '#forge:gears/iron' }, // Arg 1: the filter
  '#forge:gears/iron',            // Arg 2: the item to replace
  'thermal:iron_gear'       // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

// Rice
event.replaceInput(
  { input: 'actuallyadditions:rice' }, // Arg 1: the filter
  'actuallyadditions:rice',            // Arg 2: the item to replace
  'farmersdelight:rice'      // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { input: 'thermal:rice' }, // Arg 1: the filter
  'thermal:rice',            // Arg 2: the item to replace
  'farmersdelight:rice'      // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
event.remove({ id: 'actuallyadditions:crushing/rice' })
event.custom({
  "type": "actuallyadditions:crushing",
  "ingredient": {
    "item": 'farmersdelight:rice' 
  },
  "result": [
    {
      "chance": 1.0,
      "result": {
        "Count": 2,
        "id": "minecraft:sugar"
      }
    },
    {
      "chance": 0.0,
      "result": {
        "Count": 0,
        "id": "minecraft:air"
      }
    }
  ]
})

event.remove({ id: 'thermal:machines/press/press_rice_packing' })
event.remove({ id: 'thermal:machines/press/press_rice_unpacking' })
event.remove({ id: 'thermal:machines/insolator/insolator_rice' })
event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'farmersdelight:rice',
      "count": 9
    },
    {
      "item": "thermal:press_packing_3x3_die"
    }
  ],
  "result": [
    {
      "item": "farmersdelight:rice_bag"
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "farmersdelight:rice_bag",
      "count": 1
    },
    {
      "item": "thermal:press_unpacking_die"
    }
  ],
  "result": [
    {
      "item": 'farmersdelight:rice',
      "count": 9
    }
  ],
  "energy": 400
})

event.remove({ id: 'thermal:storage/rice_block' })
event.remove({ id: 'thermal:storage/rice_from_block' })
event.remove({ id: 'actuallyadditions:rice_seeds' })

// Tomato
event.remove({ id: 'thermal:storage/tomato_from_block' })
event.remove({ id: 'thermal:storage/tomato_block' })
event.remove({ id: 'thermal:machines/press/press_tomato_packing' })
event.remove({ id: 'thermal:machines/press/press_tomato_unpacking' })
event.remove({ id: 'thermal:storage/tomato_block' })
event.remove({ id: 'thermal:machines/insolator/insolator_tomato' })
event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'farmersdelight:tomato',
      "count": 9
    },
    {
      "item": "thermal:press_packing_3x3_die"
    }
  ],
  "result": [
    {
      "item": "farmersdelight:tomato_crate"
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": "farmersdelight:tomato_crate",
      "count": 1
    },
    {
      "item": "thermal:press_unpacking_die"
    }
  ],
  "result": [
    {
      "item": 'farmersdelight:tomato',
      "count": 9
    }
  ],
  "energy": 400
})
// Gold Gear
event.remove({ id: 'industrialforegoing:gold_gear' })
event.replaceInput(
  { input: '#forge:gears/gold' }, // Arg 1: the filter
  '#forge:gears/gold',            // Arg 2: the item to replace
  'thermal:gold_gear'       // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

// Copper Dust
event.remove({ id: 'alchemistry:compactor/copper_dust' })
event.remove({ input: 'chemlib:copper_dust' })
event.custom({
  "type": "alchemistry:compactor",
  "group": "alchemistry:compactor",
  "input": {
    "count": 16,
    "ingredient": {
      "item": "chemlib:copper"
    }
  },
  "result": {
    "item": 'thermal:copper_dust'
  }
})

// Copper Gear
event.remove({ id: 'forestry:gear_copper' })
event.replaceInput(
  { input: '#forge:gears/copper' }, // Arg 1: the filter
  '#forge:gears/copper',            // Arg 2: the item to replace
  'thermal:copper_gear'       // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

// Copper Nuggets
event.remove({ output: 'iceandfire:copper_nugget' })



// Onion
event.remove({ id: 'thermal:machines/insolator/insolator_onion' })
event.remove({ id: 'thermal:storage/onion_from_block' })
event.remove({ id: 'thermal:storage/onion_block' })
event.remove({ id: 'thermal:machines/press/press_onion_unpacking' })
event.remove({ id: 'thermal:machines/press/press_onion_packing' })
event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'farmersdelight:onion',
      "count": 9
    },
    {
      "item": "thermal:press_packing_3x3_die"
    }
  ],
  "result": [
    {
      "item": 'farmersdelight:onion_crate'
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'farmersdelight:onion_crate',
      "count": 1
    },
    {
      "item": "thermal:press_unpacking_die"
    }
  ],
  "result": [
    {
      "item": 'farmersdelight:onion',
      "count": 9
    }
  ],
  "energy": 400
})

// Flax
event.remove({ id: 'thermal:machines/insolator/insolator_flax' })
event.remove({ id: 'thermal:storage/flax_from_block' })
event.remove({ id: 'thermal:machines/press/press_flax_unpacking' })
event.remove({ id: 'thermal:storage/flax_block' })
event.remove({ id: 'minecraft:string' })
event.remove({ id: 'thermal:machines/press/press_flax_packing' })
event.custom({
  "type": "thermal:insolator",
  "ingredient": {
    "item": "supplementaries:flax_seeds"
  },
  "result": [
    {
      "item": "supplementaries:flax",
      "chance": 2.5
    },
    {
      "item": "supplementaries:flax_seeds",
      "chance": 1.1
    }
  ],
  "water_mod": 0.5,
  "experience": 0.15
})

event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'supplementaries:flax',
      "count": 9
    },
    {
      "item": "thermal:press_packing_3x3_die"
    }
  ],
  "result": [
    {
      "item": 'supplementaries:flax_block'
    }
  ],
  "energy": 400
})

event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'supplementaries:flax_block',
      "count": 1
    },
    {
      "item": "thermal:press_unpacking_die"
    }
  ],
  "result": [
    {
      "item": 'supplementaries:flax',
      "count": 9
    }
  ],
  "energy": 400
})

// Removing Barrier Blocks
event.remove({ id: 'minecraft:nuclearcraft_sodium_sm1' })
event.remove({ id: 'bloodmagic:soulforge/fungal_charge_2' })
event.remove({ id: 'bloodmagic:soulforge/fungal_charge' })
event.custom({
  "type": "bloodmagic:soulforge",
  "drain": 0.5,
  "input0": {
    "tag": "forge:cobblestone"
  },
  "input1": {
    "item": "minecraft:charcoal"
  },
  "input2": {
    "item": 'minecraft:warped_fungus'
  },
  "input3": {
    "tag": "forge:mushrooms"
  },
  "minimumDrain": 10.0,
  "output": {
    "count": 8,
    "item": "bloodmagic:fungal_charge"
  }
})

event.custom({
  "type": "bloodmagic:soulforge",
  "drain": 2.5,
  "input0": {
    "tag": "forge:storage_blocks/copper"
  },
  "input1": {
    "item": "minecraft:charcoal"
  },
  "input2": {
    "item": 'minecraft:warped_fungus'
  },
  "input3": {
    "tag": "forge:mushrooms"
  },
  "minimumDrain": 80.0,
  "output": {
    "count": 4,
    "item": "bloodmagic:fungal_charge_2"
  }
})

event.remove({ id: 'thermal:machines/press/unpacking/press_b_sandstone_unpacking' })
event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'ad_extendra:b_sandstone',
      "count": 1
    },
    {
      "item": "thermal:press_unpacking_die"
    }
  ],
  "result": [
    {
      "item": 'ad_extendra:b_sand',
      "count": 4
    }
  ],
  "energy": 400
})

event.remove({ id: 'thermal:machines/press/unpacking/press_venus_sandstone_unpacking' })
event.custom({
  "type": "thermal:press",
  "ingredients": [
    {
      "item": 'ad_astra:venus_sandstone',
      "count": 1
    },
    {
      "item": "thermal:press_unpacking_die"
    }
  ],
  "result": [
    {
      "item": 'ad_astra:venus_sand',
      "count": 4
    }
  ],
  "energy": 400
})
event.remove({ id: 'thermal:machines/pulverizer/pulverizer_venus_sandstone' })
event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "value": [
      {
        "item": 'ad_astra:venus_sandstone'
      },
      {
        "item": 'ad_astra:venus_sandstone_brick_stairs'
      }
    ],
    "count": 1
  },
  "result": [
    {
      "item": 'ad_astra:venus_sand',
      "count": 2
    },
    {
      "item": "thermal:niter",
      "chance": 0.3
    }
  ],
  "experience": 0.1
})

event.remove({ id: 'thermal:machines/pulverizer/pulverizer_b_sandstone' })
event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "value": [
      {
        "item": 'ad_extendra:b_sandstone'
      },
      {
        "item": 'ad_extendra:b_sandstone_brick_stairs'
      }
    ],
    "count": 1
  },
  "result": [
    {
      "item": 'ad_extendra:b_sand',
      "count": 2
    },
    {
      "item": "thermal:niter",
      "chance": 0.3
    }
  ],
  "experience": 0.1
})


event.remove({ id: 'alchemistry:dissolver/carpets' })
event.custom({
  "type": "alchemistry:dissolver",
  "group": "alchemistry:dissolver",
  "input": {
    "count": 1,
    "ingredient": {
      "tag": 'minecraft:wool_carpets'
    }
  },
  "output": {
    "groups": [
      {
        "probability": 66.66666666666666,
        "results": [
          {
            "count": 2,
            "item": "chemlib:keratin"
          },
          {
            "item": "chemlib:triglyceride"
          }
        ]
      },
      {
        "probability": 33.33333333333334,
        "results": [
          {
            "item": "minecraft:air"
          }
        ]
      }
    ],
    "rolls": 1,
    "weighted": false
  }
})

// Liquid EXP
event.remove({ id: 'experienceobelisk:filling/cognitium_bucket_filling_dummy' })
event.custom({
  "type": "experienceobelisk:filling",
  "ingredient": {
    "item": "minecraft:bucket"
  },
  "result": {
    "item": "mob_grinding_utils:fluid_xp_bucket",
    "count": 1
  },
  "cost_mB": 1000,
  "id": "experienceobelisk:cognitium_bucket_filling"
})

// Disable Experience Pump Upgrade for Unification
event.remove({ id: 'sophisticatedbackpacks:xp_pump_upgrade' })

// Remove
event.remove({ id: 'tconstruct:tables/book_substitute' })

// Rope
event.remove({ id: 'farmersdelight:rope' })
event.remove({ id: 'supplementaries:rope' })
event.shaped(
  Item.of('farmersdelight:rope', 1), // arg 1: output
  [
    'ABA',
    'BAB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'supplementaries:flax',
    B: 'farmersdelight:straw',
  }
)

event.replaceInput(
  { input: 'supplementaries:rope'}, // Arg 1: the filter
  'supplementaries:rope',            // Arg 2: the item to replace
  'farmersdelight:rope'       // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

// Steel
event.replaceInput(
  { output: 'tconstruct:steel_ingot'}, // Arg 1: the filter
  'tconstruct:steel_ingot',            // Arg 2: the item to replace
  'ad_astra:steel_ingot'      // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceOutput(
  { output: 'nuclearcraft:steel_ingot'}, // Arg 1: the filter
  'nuclearcraft:steel_ingot',            // Arg 2: the item to replace
  'ad_astra:steel_ingot'      // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceOutput(
  { output: 'thermal:steel_ingot'}, // Arg 1: the filter
  'thermal:steel_ingot',            // Arg 2: the item to replace
  'ad_astra:steel_ingot'      // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.remove({ id: 'tconstruct:common/materials/steel_ingot_from_nuggets' })
event.remove({ id: 'tconstruct:common/materials/steel_ingot_from_block' })
event.remove({ id: 'tconstruct:common/materials/steel_nugget_from_ingot' })
event.remove({ id: 'tconstruct:common/materials/steel_block_from_ingot' })
event.remove({ id: 'thermal:machines/centrifuge/centrifuge_experience_bottle' })

// Alu
event.replaceOutput(
  { output: 'dustandash:aluminum_ingot'}, // Arg 1: the filter
  'dustandash:aluminum_ingot',            // Arg 2: the item to replace
  'kubejs:aluminum_ingot'     // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.remove({ id: 'dustandash:ionizer/aluminum_ingot' })
event.remove({ id: 'dustandash:integrate/aluminum_ingot' })
event.remove({ id: 'minecraft:aluminum_from_nugget' })
event.remove({ id: 'minecraft:aluminum_from_block' })
event.remove({ id: 'nuclearcraft:blast_aluminum_dust' })
event.remove({ id: 'minecraft:nuclearcraft_aluminum_dust' })
event.remove({ id: 'minecraft:nuclearcraft_aluminum_plate' })

event.remove({ id: 'chemlib:aluminum_nugget_to_ingot' })
event.remove({ id: 'chemlib:aluminum_block_to_ingot' })
event.remove({ id: 'chemlib:aluminum_ingot_from_blasting_aluminum_dust' })
event.remove({ id: 'chemlib:aluminum_ingot_from_smelting_aluminum_dust' })
event.remove({ id: 'chemlib:aluminum_ingot_to_block' })
event.remove({ id: 'chemlib:aluminum_ingot_to_nugget' })
event.remove({ id: 'nuclearcraft:aluminum_nugget' })
event.remove({ id: 'nuclearcraft:aluminum_block' })

// Alu Dust Alchemistry
event.remove({ id: 'alchemistry:compactor/aluminum_dust' })
event.custom({
  "type": "alchemistry:compactor",
  "group": "alchemistry:compactor",
  "input": {
    "count": 16,
    "ingredient": {
      "item": "chemlib:aluminum"
    }
  },
  "result": {
    "item": "kubejs:aluminum_dust"
  }
})

// Alu Dust can be made in pulverizer 
event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": 'forge:ores/aluminum'
  },
  "result": [
    {
      "item": 'kubejs:aluminum_dust',
      "chance": 6.5
    },
    {
      "item": "thermal:iron_dust",
      "chance": 0.1
    },
    {
      "item": "minecraft:gravel",
      "chance": 0.2
    }
  ],
  "experience": 0.2
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "item": 'kubejs:aluminum_ingot'
  },
  "result": [
    {
      "item": 'kubejs:aluminum_dust',
      "count": 1
    }
  ],
  "energy_mod": 0.5
})

event.custom({
  "type": "thermal:pulverizer",
  "ingredient": {
    "tag": "forge:raw_materials/aluminum"
  },
  "result": [
    {
      "item": "kubejs:aluminum_dust",
      "chance": 1.25
    },
    {
      "item": "thermal:iron_dust",
      "chance": 0.05
    }
  ],
  "experience": 0.1
})

event.custom({
  "type": "thermal_extra:endothermic_dehydrator",
  "energy": 100000,
  "ingredients": [
    {
      "amount": 90,
      "fluid": "thermal_extra:raw_aluminum"
    }
  ],
  "result": [
    {
      "chance": 1.25,
      "count": 2,
      "item": "kubejs:aluminum_dust"
    },
    {
      "chance": 0.5,
      "item": "kubejs:aluminum_dust"
    },
    {
      "chance": 0.15,
      "item": "thermal:iron_dust"
    }
  ]
})

// Cobalt Dust
event.remove({ id: 'alchemistry:compactor/cobalt_dust' })
event.custom({
  "type": "alchemistry:compactor",
  "group": "alchemistry:compactor",
  "input": {
    "count": 16,
    "ingredient": {
      "item": "chemlib:cobalt"
    }
  },
  "result": {
    "item": 'kubejs:cobalt_dust'
  }
})

event.remove({ id: 'chemlib:cobalt_ingot_from_blasting_cobalt_dust' })
event.remove({ id: 'chemlib:cobalt_ingot_from_smelting_cobalt_dust' })

// Cobalt Ingot
event.remove({ id: 'chemlib:cobalt_nugget_to_ingot' })
event.remove({ id: 'chemlib:cobalt_block_to_ingot' })
event.remove({ id: 'chemlib:cobalt_ingot_to_nugget' })
event.remove({ id: 'chemlib:cobalt_ingot_to_block' })

event.remove({ id: 'minecraft:cobalt_from_nugget' })
event.remove({ id: 'minecraft:cobalt_from_block' })
event.remove({ id: 'nuclearcraft:blast_cobalt_dust' })
event.remove({ id: 'nuclearcraft:blast_cobalt_raw' })
event.remove({ id: 'nuclearcraft:blast_cobalt_ore' })
event.remove({ id: 'minecraft:nuclearcraft_cobalt_ore' })
event.remove({ id: 'minecraft:nuclearcraft_cobalt_dust' })
event.remove({ id: 'minecraft:nuclearcraft_cobalt_raw' })
event.remove({ id: 'minecraft:nuclearcraft_cobalt_plate' })
event.smelting('tconstruct:cobalt_ingot', 'nuclearcraft:cobalt_plate')
event.smelting('tconstruct:cobalt_ingot', 'kubejs:cobalt_dust')
event.smelting('tconstruct:cobalt_ingot', 'tconstruct:raw_cobalt')
event.smelting('tconstruct:cobalt_ingot', 'tconstruct:cobalt_ore')
event.blasting('tconstruct:cobalt_ingot', 'kubejs:cobalt_dust')

// Cobalt Nuggets
event.remove({ id: 'nuclearcraft:cobalt_nugget' })

// Cobalt Block
event.remove({ id: 'nuclearcraft:cobalt_block' })

// Sugar Cane Block (Quark)
event.remove({ id: 'quark:building/crafting/compressed/sugar_cane_block_uncompress' })
event.remove({ id: 'quark:building/crafting/compressed/sugar_cane_block' })
})