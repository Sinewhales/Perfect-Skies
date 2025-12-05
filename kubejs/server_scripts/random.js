ServerEvents.recipes(event => {
event.remove({ id: 'treetap:tap' })
event.remove({ id: 'watercollector:watercollector' })
event.remove({ id: 'projectred_expansion:frame' })
event.remove({ id: 'mysticalagriculture:nature_agglomeratio' })
event.remove({ id: 'naturescompass:natures_compass' })
event.remove({ id: 'functionalstorage:oak_drawer_alternate_x1' })
event.remove({ id: 'functionalstorage:oak_drawer_alternate_x2' })
event.remove({ id: 'functionalstorage:oak_drawer_alternate_x4' })
event.remove({ id: 'mob_grinding_utils:recipe_tank' })
event.remove({ id: 'mob_grinding_utils:recipe_tank_sink' })
event.remove({ id: 'giacomos_exp:expseed' })
event.remove({ id: 'rusticdelight:paper_from_cotton_boll' })
event.remove({ id: 'rusticdelight:string_from_cotton_boll' })
event.remove({ id: 'architects_palette:smelting/moonshale' })
event.remove({ id: 'glassential:glass_ethereal' })
event.remove({ id: 'cardboardboxes:cardboardbox' })
event.remove({ id: 'moblassos:contract' })
event.remove({ id: 'tiab:time_in_a_bottle' })
event.remove({ id: 'mysticalagriculture:soulium_gemstone' })


event.shaped(
  Item.of('treetap:tap', 1), // arg 1: output
  [
    " A ",
    "AAA",
    "AA "
  ],
  {
    A: 'thermal:copper_plate'

  }
)

// Algal Blend can be made from Seagrass
event.shapeless(
  Item.of('architects_palette:algal_blend', 2), // arg 1: output
  [
    'minecraft:clay_ball',
    'minecraft:seagrass'
  ]
)

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

event.shaped(
  Item.of('watercollector:watercollector', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tconstruct:hepatizon_ingot',
    B: 'architects_palette:algal_bricks',
    C: 'minecraft:lily_pad',
    D: 'actuallyadditions:wood_casing'  //arg 3: the mapping object
  }
)

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
    A: 'kubejs:black_steel_ingot',
    B: 'tconstruct:obsidian_pane',
    C: 'netherexp:soul_glass'  //arg 3: the mapping object
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

// Cardboard
event.shapeless(
  Item.of('cardboardboxes:cardboardbox'), // arg 1: output
  [
    '4x kubejs:cardboard_chunk'
  ]
)
// Summoning Altar
event.shaped(
  Item.of('summoningrituals:altar', 1), // arg 1: output
  [
    'ABA',
    'CDC', // arg 2: the shape (array of strings)
    'EFE'
  ],
  {
    A: 'netherexp:soul_candle',
    B: 'minecraft:wither_skeleton_skull',
    C: 'thermal:gold_plate',
    D: 'extendedcrafting:frame',
    E: 'tconstruct:nahuatl',
    F: 'minecraft:lectern'

  }
)

// Nature Compass
event.shaped(
  Item.of('naturescompass:naturescompass', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: '#minecraft:saplings',
    B: 'tinkers_thinking:spectre_nugget',
    C: 'minecraft:compass'

  }
)

event.shaped(
  Item.of('explorerscompass:explorerscompass', 1), // arg 1: output
  [
    'BAB',
    'DCD', // arg 2: the shape (array of strings)
    'BAB'
  ],
  {
    A: 'quark:soul_bead',
    B: 'tconstruct:amethyst_bronze_ingot',
    C: 'naturescompass:naturescompass',
    D: 'minecraft:cobweb'

  }
)

event.remove({ id: 'explorerscompass:explorers_compass' })




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

// Dank 1
event.remove({ id: 'dankstorage:dank_1' })
event.shaped(
  Item.of('dankstorage:dank_1', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'extendedcrafting:black_iron_slate',
    B: 'minecraft:copper_ingot',
    C: 'sophisticatedstorage:upgrade_base'

  }
)

// Flopper Alternate
event.shaped(
  Item.of('flopper:flopper', 1), // arg 1: output
  [
    '   ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'woodenbucket:wooden_bucket'
  }
)

// Soul Glass
event.remove({ id: 'netherexp:soul_glass' })
event.shapeless(
  Item.of('netherexp:soul_glass'), // arg 1: output
  [
    'tconstruct:soul_glass',
    'netherexp:phasmo_shard',
    'tinkers_thinking:spectre_ingot'
  ]
)

// Backpack Upgrade Base
event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
event.shaped(
  Item.of('sophisticatedbackpacks:upgrade_base', 1), // arg 1: output
  [
    "CBC",
    "BAB",
    "CBC"
  ],
  {
    A: "kubejs:tanned_leather",
    B: 'extendedcrafting:black_iron_ingot',
    C: 'minecraft:string'
  }
)






// Wisp Egg
event.recipes.summoningrituals
    .altar(Ingredient.of('netherexp:wisp_bottle'))
    .itemOutput(Item.of('netherexp:wisp_spawn_egg'))
    .input('eidolon:soul_shard')
    .input('tinkers_thinking:spectre_ingot')
    .input('netherexp:phasmo_shard')
    .input('mysticalagriculture:soul_dust')
    .recipeTime(200)

// Soulium Gemstone
event.recipes.summoningrituals
    .altar(Ingredient.of('minecraft:diamond'))
    .itemOutput(Item.of('mysticalagriculture:soulium_gemstone'))
    .input('mysticalagriculture:soulium_dust')
    .input('mysticalagriculture:soulium_dust')
    .input('mysticalagriculture:soulium_dust')
    .input('mysticalagriculture:soulium_dust')
    .recipeTime(60)


// Exp Seed
event.custom({
	"type": "apotheosis:enchanting",
	"conditions": [{
		"type": "apotheosis:module",
		"module": "enchantment"
	}],
	"input": {
		"item": 'oreberriesreplanted:essence_berry'
	},
	"requirements": {
		"eterna": 10,
		"quanta": 4,
		"arcana": 5
	},
	"max_requirements": {
		"eterna": -1,
		"quanta": -1,
		"arcana": -1
	},
	"result": {
		"item": 'giacomos_exp:expseed',
		"count": 1
	}
})

// Phasmo Shard Duplication
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "item": 'netherexp:phasmo_shard' }
      ]
    },
    {
      "items": [
        { "item": 'eidolon:enchanted_ash' },
        { "item": 'mysticalagriculture:soulium_dust' }
      ]
    }
  ],
  "result": {
    "item": 'netherexp:phasmo_shard',
    "count": 2
  }
})

// Time in a Bottle
event.recipes.summoningrituals
    .altar(Ingredient.of('quark:bottled_cloud'))
    .itemOutput(Item.of('tiab:time_in_a_bottle'))
    .input('3x tconstruct:rose_gold_ingot')
    .input('quark:diamond_heart')
    .input('kubejs:blaze_shard')
    .input('2x tinkers_thinking:spectre_ingot')
    .input('extendedcrafting:luminessence')
    .recipeTime(200)
})



// Compacting Upgrade
// Obituary
ItemEvents.dropped('gravestone:obituary', e => e.item.count--)

