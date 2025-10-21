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
event.remove({ id: 'buildcraftcore:gear_iron' })
event.remove({ id: 'buildcraftcore:gear_iron' })
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
event.remove({ id: 'buildcraftcore:gear_gold' })
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
event.remove({ id: 'geolosys:crafting/nuggets/copper_nugget_to_copper_ingot' })
event.remove({ id: 'geolosys:crafting/nuggets/copper_ingot_to_copper_nugget' })

// Aluminum Cluster replacement
event.smelting('geolosys:aluminum_ingot', 'kubejs:raw_aluminum_ore')
event.blasting('geolosys:aluminum_ingot', 'kubejs:raw_aluminum_ore')
event.remove({ input: 'geolosys:aluminum_cluster' })
event.remove({ input: 'geolosys:copper_cluster' })
event.remove({ input: 'geolosys:gold_cluster' })
event.remove({ input: 'geolosys:iron_cluster' })
event.remove({ input: 'geolosys:lead_cluster' })
event.remove({ input: 'geolosys:zinc_cluster' })
event.remove({ input: 'geolosys:uranium_cluster' })
event.remove({ input: 'geolosys:tin_cluster' })
event.remove({ input: 'geolosys:silver_cluster' })
event.remove({ input: 'geolosys:platinum_cluster' })
event.remove({ input: 'geolosys:osmium_cluster' })
event.remove({ input: 'geolosys:nickel_cluster' })
event.remove({ input: 'geolosys:nether_gold_cluster' })

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
})