ServerEvents.recipes(event => {
event.remove({ id: 'treetap:tap' })
event.remove({ id: 'watercollector:watercollector' })
event.remove({ id: 'projectred_expansion:frame' })
event.remove({ id: 'mysticalagriculture:nature_agglomeratio' })
event.remove({ id: 'naturescompass:natures_compass' })
event.remove({ id: 'functionalstorage:oak_drawer_alternate_x1' })
event.remove({ id: 'functionalstorage:oak_drawer_alternate_x2' })
event.remove({ id: 'functionalstorage:oak_drawer_alternate_x4' })
event.remove({ id: 'actuallyadditions:charcoal_to_tiny' })
event.remove({ id: 'mob_grinding_utils:recipe_tank' })
event.remove({ id: 'mob_grinding_utils:recipe_tank_sink' })
event.remove({ id: 'giacomos_exp:expseed' })
event.remove({ id: 'rusticdelight:paper_from_cotton_boll' })
event.remove({ id: 'rusticdelight:string_from_cotton_boll' })
event.remove({ id: 'architects_palette:smelting/moonshale' })
event.remove({ id: 'glassential:glass_ethereal' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    " A ",
    "AAA",
    "AA "
  ],
  "key": {
    "A": {
      "item": "thermal:copper_plate"
    }
  },
  "result": {
    "item": 'treetap:tap'
  }
})

event.custom({
  "type": "treetap:tap_extract",
  "log": {
    "tag": "minecraft:logs"
  },
  "required_block_count": 4,
  "processing_time": 2400,
  "result": {
    "item": 'thermal:resin_bucket'
  },
  "collect_bucket": true,
  "display_fluid": {
    "fluid": "thermal:resin"
  },
  "particle_color": "#C76e00",
 
})

event.custom({
    "type": "lychee:item_burning",
    "item_in": {
        "tag": "logs_that_burn"
    },
    "post": {
        "type": "drop_item",
        "item": "supplementaries:ash"
    }
}
)

event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": "minecraft:compass",
  "fluid": {
    "fluid": "kubejs:nature_extract",
    "amount": 1000
  },
  "duration": 100,
  "result": {
    "item": 'naturescompass:naturescompass'
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
      "item": "integrateddynamics:crystalized_menril_block"
    },
    "B": {
      "item": "architects_palette:algal_bricks"
    },
    "C": {
      "item": "projectred_exploration:electrotine_block"
    },
    "D": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "E": {
      "item": "kubejs:duralumin"
    },
    "F": {
      "item": "minecraft:lily_pad"
    },
    "G": {
      "item": "fluidtank:tank_stone"
    },
    "H": {
      "item": "aquaculture:driftwood"
    },
    "I": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": 'watercollector:watercollector'
  }
})

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:wood_sheet"
    },
    "B": {
      "item": "forestry:impregnated_stick"
    },
    "C": {
      "item": "kubejs:wooden_gear"
    }
  },
  "result": {
    "item": 'projectred_expansion:frame'
  }
})



event.shaped(
  Item.of('mob_grinding_utils:tank', 1), // arg 1: output
  [
    'ABA',
    'CCC', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'extendedcrafting:black_iron_ingot',
    B: 'minecraft:obsidian',
    C: 'minecraft:glass'  //arg 3: the mapping object
  }
)

event.shaped(
  Item.of('mob_grinding_utils:tank_sink', 1), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'quark:grate',
    B: 'mob_grinding_utils:tank',
  }
)



event.replaceInput(
  { id: 'hangglider:glider_wing' }, // Arg 1: the filter
  'minecraft:leather',            // Arg 2: the item to replace
  'kubejs:tanned_leather'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { id: 'hangglider:glider_wing' }, // Arg 1: the filter
  'minecraft:stick',            // Arg 2: the item to replace
  'thermal_extra:iron_rod'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { id: 'hangglider:glider_framework' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'thermal_extra:iron_rod'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { id: 'quark:oddities/crafting/pipe' }, // Arg 1: the filter
  'minecraft:copper_ingot',            // Arg 2: the item to replace
  'thermal:copper_plate'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)


// Drawer everywood
event.shaped(
  Item.of('functionalstorage:oak_1', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: '#minecraft:planks',
    B: 'minecraft:chest',

  }
)

event.shaped(
  Item.of('functionalstorage:oak_2', 2), // arg 1: output
  [
    'ABA',
    'AAA', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: '#minecraft:planks',
    B: 'minecraft:chest',

  }
)

event.shaped(
  Item.of('functionalstorage:oak_4', 4), // arg 1: output
  [
    'BAB',
    'AAA', // arg 2: the shape (array of strings)
    'BAB'
  ],
  {
    A: '#minecraft:planks',
    B: 'minecraft:chest',

  }
)

event.shapeless(
  Item.of('minecraft:string'), // arg 1: output
  [
    '3x rusticdelight:cotton_boll'
  ]
)

// Summoning Altar
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
      "item": "netherexp:soul_candle"
    },
    "B": {
      "item": "netherexp:soul_slate"
    },
    "C": {
      "item": "minecraft:skeleton_skull"
    },
    "D": {
      "item": "hexerei:dried_sage"
    },
    "E": {
      "item": "mysticalagriculture:nature_agglomeratio"
    },
    "F": {
      "item": "thermal:electrum_plate"
    },
    "G": {
      "item": "tconstruct:necrotic_bone"
    },
    "H": {
      "item": "thermal_extra:amethyst_dust"
    },
    "I": {
      "item": "minecraft:enchanting_table"
    }
  },
  "result": {
    "item": "summoningrituals:altar"
  }
})

// Explorer's Compass
event.remove({ id: 'explorerscompass:explorers_compass' })
event.recipes.summoningrituals
    .altar(Ingredient.of('naturescompass:naturescompass'))
    .itemOutput('explorerscompass:explorerscompass')
    .input('2x mysticalagriculture:nature_agglomeratio')
    .input('2x minecraft:moss_block')
    .input('2x quark:soul_bead')
    .input('2x architects_palette:moonshale')
    .input('2x tinkers_thinking:spectre_ingot')
    .input('2x hexerei:dried_belladonna_flowers')
    .input('2x thermal_extra:amethyst_dust')
    .input('minecraft:map')
    .recipeTime(200)

// Moonshale
event.remove({ id: 'architects_palette:warping/moonshale_from_stone_warping' })
event.custom({
  "type": "architects_palette:warping",
  "dimension": "minecraft:the_nether",
  "ingredient": [
    {
      "item": "quark:shale"
    }
  ],
  "result": {
    "item": "architects_palette:moonshale"
  }
})

// Ethereal Glass
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": 'minecraft:glass'
    },
    "block_in": {
        "blocks": ["netherexp:ectoplasm"],
        "state": {
            "level": 0
        }
    },
    "post": [
        {
            "type": "drop_item",
            "item": 'glassential:glass_ethereal'
        },
                {
            "type": "place",
            "block": "*"
        }
    ]
})
})

// Obituary
ItemEvents.dropped('gravestone:obituary', e => e.item.count--)

