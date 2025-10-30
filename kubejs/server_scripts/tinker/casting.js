ServerEvents.recipes(event => {
event.custom({
  "type": "tconstruct:casting_table",
  "cooling_time": 111,
  "fluid": {
    "amount": 90,
    "fluid": "kubejs:amber_paste"
  },
  "result": 'kubejs:amber_paste_chunk'
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'actuallyadditions:wood_casing'
  },
  "cast_consumed": true,
  "cooling_time": 113,
  "fluid": {
    "amount": 1000,
    "fluid": "tconstruct:seared_stone"
  },
  "result": "kubejs:seared_casing"
})

// Invar Gear
event.remove({ id: "thermal:parts/invar_gear" })
event.remove({ id: "tconstruct:smeltery/casting/metal/invar/gear_gold_cast" })
event.remove({ id: "tconstruct:smeltery/casting/metal/invar/gear_sand_cast" })
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'kubejs:stone_gear'
  },
    "cast_consumed": true,
  "cooling_time": 120,
  "fluid": {
    "amount": 360,
    "fluid": "tconstruct:molten_invar"
  },
  "result": 'thermal:invar_gear'
})


// Clay
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'minecraft:sand'
  },
  "cast_consumed": true,
  "cooling_time": 60,
  "fluid": {
    "amount": 1000,
    "fluid": "minecraft:water"
  },
  "result": "minecraft:clay"
})

// Iron Gear
event.remove({ id: "tconstruct:smeltery/casting/metal/iron/gear_gold_cast" })
event.remove({ id: "tconstruct:smeltery/casting/metal/iron/gear_sand_cast" })
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'kubejs:stone_gear'
  },
    "cast_consumed": true,
  "cooling_time": 120,
  "fluid": {
    "amount": 360,
    "fluid": "tconstruct:molten_iron"
  },
  "result": 'thermal:iron_gear'
})

// Impregnated Stick
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'minecraft:stick'
  },
    "cast_consumed": true,
  "cooling_time": 20,
  "fluid": {
    "amount": 125,
    "fluid": "thermal:resin"
  },
  "result": 'forestry:impregnated_stick'
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'kubejs:cotton_cloth'
  },
    "cast_consumed": true,
  "cooling_time": 100,
  "fluid": {
    "amount": 250,
    "fluid": "tconstruct:honey"
  },
  "result": 'kubejs:synthethic_leather'
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'thermal:cured_rubber'
  },
    "cast_consumed": true,
  "cooling_time": 60,
  "fluid": {
    "amount": 100,
    "fluid": "integrateddynamics:menril_resin"
  },
  "result": 'kubejs:empowered_rubber'
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "cooling_time": 54,
  "fluid": {
    "amount": 90,
    "fluid": "kubejs:molten_duralumin"
  },
  "result": {
    "item": 'kubejs:duralumin'
  }
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "cooling_time": 54,
  "fluid": {
    "amount": 90,
    "fluid": "kubejs:molten_pulsating_iron"
  },
  "result": {
    "item": 'kubejs:pulsating_iron'
  }
})

// Foundry
event.remove({ id: "tconstruct:smeltery/casting/scorched/foundry_controller" })
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'tconstruct:smeltery_controller'
  },
  "cast_consumed": true,
  "cooling_time": 113,
  "fluid": {
    "amount": 1000,
    "fluid": "tconstruct:scorched_stone"
  },
  "result": "tconstruct:foundry_controller"
})

// Nether Grout
event.remove({ id: "tconstruct:smeltery/scorched/nether_grout_multiple" })
event.remove({ id: "tconstruct:smeltery/scorched/nether_grout" })
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'dustandash:cooled_magma_block'
  },
  "cast_consumed": true,
  "cooling_time": 113,
  "fluid": {
    "amount": 250,
    "fluid": "tconstruct:liquid_soul"
  },
  "result": "tconstruct:nether_grout"
})

// Scorched Bricks
event.remove({ id: "tconstruct:smeltery/scorched/scorched_brick" })
event.remove({ id: "tconstruct:smeltery/scorched/scorched_brick_kiln" })
event.remove({ id: "tconstruct:smeltery/melting/scorched/grout" })
event.remove({ id: "tconstruct:smeltery/casting/scorched/brick_composite" })
event.custom({
  "type": "architects_palette:warping",
  "dimension": "minecraft:the_nether",
  "ingredient": [
    {
      "item":  "tconstruct:nether_grout"
    }
  ],
  "result": {
    "item": 'tconstruct:scorched_brick',
    "count": 2
  }
})

// Remove Molten Lead
event.remove({ id: "tconstruct:smeltery/melting/metal/silver/ore_singular" })
event.remove({ id: "tconstruct:smeltery/melting/metal/silver/raw" })
event.remove({ id: "tconstruct:smeltery/melting/metal/silver/raw_block" })

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 180,
      "rate": "metal",
      "tag": "forge:molten_gold"
    }
  ],
  "ingredient": {
    "type": "forge:difference",
    "base": {
      "tag": "forge:ores/silver"
    },
    "subtracted": {
      "tag": "tconstruct:non_singular_ore_rates"
    }
  },
  "rate": "metal",
  "result": {
    "amount": 180,
    "tag": "forge:molten_silver"
  },
  "temperature": 800,
  "time": 150
})

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 90,
      "rate": "metal",
      "tag": "forge:molten_gold"
    }
  ],
  "ingredient": {
    "tag": "forge:raw_materials/silver"
  },
  "rate": "metal",
  "result": {
    "amount": 90,
    "tag": "forge:molten_silver"
  },
  "temperature": 800,
  "time": 90
})

event.custom({
  "type": "tconstruct:ore_melting",
  "byproducts": [
    {
      "amount": 810,
      "rate": "metal",
      "tag": "forge:molten_silver"
    }
  ],
  "ingredient": {
    "tag": "forge:storage_blocks/raw_silver"
  },
  "rate": "metal",
  "result": {
    "amount": 810,
    "tag": "forge:molten_gold"
  },
  "temperature": 800,
  "time": 361
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "cooling_time": 54,
  "fluid": {
    "amount": 90,
    "fluid": "kubejs:molten_black_steel"
  },
  "result": {
    "item": 'kubejs:black_steel_ingot'
  }
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'minecraft:obsidian'
  },
  "cast_consumed": true,
  "cooling_time": 200,
  "fluid": {
    "amount": 360,
    "fluid": "kubejs:molten_black_steel"
  },
  "result": 'kubejs:reinforced_obsidian_block'
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cooling_time": 171,
  "fluid": {
    "amount": 810,
    "fluid": "kubejs:molten_duralumin"
  },
  "result": "kubejs:duralumin_block"
})

// Tin Tank
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'fluidtank:tank_copper'
  },
  "cast_consumed": true,
  "cooling_time": 200,
  "fluid": {
    "amount": 1000,
    "fluid": "tconstruct:molten_tin"
  },
  "result": 'fluidtank:tank_tin'
})

// Black Steel
event.custom({
  "type": "tconstruct:casting_basin",
  "cooling_time": 171,
  "fluid": {
    "amount": 810,
    "fluid": "kubejs:molten_black_steel"
  },
  "result": "kubejs:black_steel_block"
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'fluidtank:tank_iron'
  },
  "cast_consumed": true,
  "cooling_time": 200,
  "fluid": {
    "amount": 1000,
    "fluid": "tconstruct:molten_amethyst_bronze"
  },
  "result": 'fluidtank:tank_bronze'
})

event.custom({
  "type": "tconstruct:casting_table",
  "cooling_time": 111,
  "fluid": {
    "amount": 250,
    "fluid": "tconstruct:blazing_blood"
  },
  "result": 'kubejs:blaze_shard'
})

})

