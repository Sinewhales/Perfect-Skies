ServerEvents.recipes(event => {
event.remove({ id: 'treetap:tap' })
event.remove({ id: 'quark:automation/crafting/chute' })
event.remove({ id: 'flopper:recipes/flopper' })
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
      "item": "extendedcrafting:black_iron_slate"
    },
    "B": {
      "item": "kubejs:electrotine_plate"
    },
    "C": {
      "item": "architects_palette:algal_brick"
    },
    "D": {
      "item": "integratedterminals:menril_glass"
    },
    "E": {
      "item": "thermal:cured_rubber"
    },
    "F": {
      "item": "minecraft:water_bucket"
    },
    "G": {
      "item": "kubejs:black_iron_gear"
    },
    "H": {
      "item": "buildcraftfactory:tank"
    },
    "I": {
      "item": "actuallyadditions:wood_casing"
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
      "item": "buildcraftcore:gear_wood"
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
    B: 'buildcraftfactory:tank',
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

event.stonecutting('flopper:flopper', 'minecraft:hopper')
event.stonecutting('quark:chute', 'minecraft:hopper')

event.stonecutting('minecraft:hopper', 'flopper:flopper')
event.stonecutting('quark:chute', 'flopper:flopper')

event.stonecutting('minecraft:hopper', 'quark:chute')
event.stonecutting('flopper:flopper', 'quark:chute')

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

})

// Obituary
ItemEvents.dropped('gravestone:obituary', e => e.item.count--)

