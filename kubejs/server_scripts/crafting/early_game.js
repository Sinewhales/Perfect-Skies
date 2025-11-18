ServerEvents.recipes(event => {
event.remove({ id: "cb_microblock:stone_rod" })
event.remove({ id: 'farmersdelight:cutting/stone' })

// Stones give random nuggets when smelted
event.smelting('minecraft:iron_nugget', 'minecraft:andesite')
event.smelting('thermal:copper_nugget', 'minecraft:granite')
event.smelting('thermal:silver_nugget', 'minecraft:diorite')
event.smelting('thermal:tin_nugget', 'quark:shale')
event.smelting('thermal:nickel_nugget', 'quark:limestone')
event.smelting('minecraft:gold_nugget', 'quark:jasper')

// Wood Pulp and Sawdust are not the same thing
event.remove({ id: "thermal:storage/sawdust_block" })
    event.shapeless(
      Item.of('thermal:sawdust_block'), // arg 1: output
      [
        '9x thermal:sawdust'
      ]
    )

// Amethyst Dust
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": 'minecraft:amethyst_shard'
    }
  ],
  "output": {
    "item": 'thermal_extra:amethyst_dust',
    "count": 1
  },
  "grindingTime": 100
})

// Spectre Ingot
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": 'tconstruct:cobalt_ingot'
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
            "item": 'tinkers_thinking:spectre_ingot'
        },
                {
            "type": "place",
            "block": "*"
        }
    ]
})

// Emerald Dust
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": 'minecraft:emerald'
    }
  ],
  "output": {
    "item": 'thermal:emerald_dust',
    "count": 1
  },
  "grindingTime": 100
})



// Soul Dust
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": 'mysticalagriculture:soulstone'
    }
  ],
  "output": {
    "item": 'mysticalagriculture:soul_dust',
    "count": 1
  },
  "grindingTime": 100
})

event.remove({ id: "mysticalagriculture:soul_dust_smelted" })

// Fire Agglomeratio
event.remove({ id: "mysticalagriculture:fire_agglomeratio" })
event.custom({
    "type": "lychee:item_burning",
    "item_in": {
        "item": 'mysticalagriculture:nature_agglomeratio'
    },
    "post": {
        "type": "drop_item",
        "item": 'mysticalagriculture:fire_agglomeratio'
    }
})

// Fieryberries
event.custom({
  "type": "architects_palette:warping",
  "dimension": "minecraft:the_nether",
  "ingredient": [
    {
      "item": 'minecraft:glow_berries'
    }
  ],
  "result": {
    "item": 'kubejs:fiery_berries'
  }
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'kubejs:fiery_berries'
    }
  ],
  "output": {
    "item": 'kubejs:dried_fiery_berries'
  },
  "dryingTimeInTicks": 100
})

// Basalt Dust
event.custom({
  "type": "integrateddynamics:squeezer",
  "item": 'minecraft:basalt',
  "result": {
    "items": [
      {
        "item": {
          "item": 'kubejs:basalt_dust',
          "count": 1
        }
      },
      {
        "item": 'kubejs:basalt_dust',
        "chance": 0.5
      }
    ]
  }
})

// Sulfur Dust
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": 'thermal:sulfur'
    }
  ],
  "output": {
    "item": 'thermal:sulfur_dust',
    "count": 1
  },
  "grindingTime": 100
})

// Enriched Blaze Powder
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
        { "item": 'mysticalagriculture:fire_agglomeratio' },
        { "item": 'kubejs:dried_fiery_berries' },
        { "item": 'eidolon:crimson_essence' }
      ]
    },
    {
      "items": [
        { "item": 'minecraft:blaze_powder' },
        { "item": 'tconstruct:ichor_slime_crystal' }
      ]
    },
        {
      "items": [
        { "item": 'kubejs:basalt_dust' },
        { "item": 'netherexp:fossil_fuel'}
      ]
    }
  ],
  "result": {
    "item": 'kubejs:enriched_blaze_powder',
    "count": 1
  }
})

// Mortar Bone Meal
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": 'minecraft:bone'
    }
  ],
  "output": {
    "item": 'minecraft:bone_meal',
    "count": 5
  },
  "grindingTime": 100
})

// Mortar Flint
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": 'minecraft:gravel'
    }
  ],
  "output": {
    "item": 'minecraft:flint',
    "count": 1
  },
  "grindingTime": 100
})

// Mortar Book
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": 'minecraft:book'
    }
  ],
  "output": {
    "item": 'minecraft:paper',
    "count": 2
  },
  "grindingTime": 100
})

// Fertilizer
event.remove({ id: "forestry:fertilizer_ash" })
event.remove({ id: "forestry:fertilizer_apatite" })
event.shapeless(
      Item.of('forestry:fertilizer_compound', 2), // arg 1: output
      [
        'supplementaries:ash',
        'thermal:compost',
        'thermal:apatite',
        'thermal:niter'
      ]
    )

event.shapeless(
      Item.of('minecraft:bone_meal'), // arg 1: output
      [

        'thermal:compost'
      ]
    )

// Graphite Removal to bring shift click back
event.remove({ id: "bigreactors:smelting/graphite_from_charcoal" })
event.remove({ id: "bigreactors:smelting/graphite_from_dust" })
event.remove({ id: "bigreactors:smelting/graphite_from_coal" })
event.remove({ id: "bigreactors:blasting/graphite_from_coal" })
event.remove({ id: "bigreactors:blasting/graphite_from_charcoal" })
event.remove({ id: "bigreactors:blasting/graphite_from_dust" })

// Watering Can requires Fertilizer
event.replaceInput(
  { id: 'mysticalagriculture:watering_can' }, // Arg 1: the filter
  'minecraft:bone_meal',            // Arg 2: the item to replace
  'forestry:fertilizer_compound'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

// Cheaper Blast Furnace
event.remove({ id: "tconstruct:common/basalt_blast_furnace" })
event.remove({ id: "quark:building/crafting/furnaces/blackstone_blast_furnace" })
event.remove({ id: "minecraft:blast_furnace" })
event.remove({ id: "quark:building/crafting/furnaces/deepslate_blast_furnace" })
event.shaped(
  Item.of('minecraft:blast_furnace', 1), // arg 1: output
  [
    'AAA',
    'BCB', // arg 2: the shape (array of strings)
    'DED'
  ],
  {
    A: 'minecraft:smooth_stone',
    B: 'minecraft:iron_ingot',
    C: 'minecraft:furnace',
    D: 'minecraft:terracotta',
    E: 'minecraft:campfire'

  }
)

// Scorched Alloyer
event.shaped(
  Item.of('tconstruct:scorched_alloyer', 1), // arg 1: output
  [
    '   ',
    'ABA', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'tconstruct:scorched_brick',
    B: 'tconstruct:scorched_ingot_gauge',
    C: 'kubejs:black_steel_ingot'

  }
)

// Antique Ink can be turned into black dye
event.shapeless(
      Item.of('minecraft:black_dye', 2), // arg 1: output
      [
        'supplementaries:antique_ink'
      ]
    )

// Crafter uses copper instead
event.replaceInput(
  { id: 'crafter_port:crafter' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'minecraft:copper_ingot'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

// Dank 2
event.remove({ id: "dankstorage:dank_2" })
event.shaped(
  Item.of('dankstorage:dank_2', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tinkers_thinking:ardite_ingot',
    B: 'minecraft:nether_wart_block',
    C: 'dankstorage:dank_1'
  }
)

event.remove({ id: "dankstorage:1_to_2" })
event.shaped(
  Item.of('dankstorage:1_to_2', 1), // arg 1: output
  [
    'ABA',
    'B B', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'tinkers_thinking:ardite_ingot',
    B: 'minecraft:nether_wart_block'
  }
)

// Emerald Lasso
event.remove({ id: "moblassos:emerald_lasso" })
event.shapeless(
  Item.of('agricraft:emerald_shard', 9), // arg 1: output
  [
    'minecraft:emerald'
  ]
)

event.shaped(
  Item.of("moblassos:emerald_lasso", 1), // arg 1: output
  [
    'A A',
    ' B ', // arg 2: the shape (array of strings)
    'A A'
  ],
  {
    A: 'agricraft:emerald_shard',
    B: 'minecraft:lead'
  }
)

// Rotten Leather
event.remove({ id: "forbidden_arcanus:rotten_leather" })
event.remove({ id: "forbidden_arcanus:leather" })
event.remove({ id: "integrateddynamics:drying_basin/convenience/minecraft_leather" })
event.remove({ id: "integrateddynamics:mechanical_drying_basin/convenience/minecraft_leather" })
event.custom({
  "type": "eidolon:crucible",
  "steps": [
    {
      "items": [
      	{ "item": 'minecraft:rotten_flesh' },
      ]
    },
    {
      "items": [
      	{ "item": 'mysticalagriculture:nature_agglomeratio' }
      ],
      "stirs": 1
    }
  ],
  "result": {
    "item": 'forbidden_arcanus:rotten_leather',
    "count": 1
  }
})


  event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'forbidden_arcanus:rotten_leather'
    }
  ],
  "output": {
    "item": 'minecraft:leather'
  },
  "dryingTimeInTicks": 200

  
})
  // Bound Leather

event.shaped(
  Item.of('kubejs:bound_leather', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:string',
    B: 'kubejs:cotton_cloth',
    C: 'minecraft:leather'

  }
)

// Withered Block require fossil fuel
event.remove({ id: "netherexp:wither_bone_block" })
event.shaped(
  Item.of('netherexp:wither_bone_block', 1), // arg 1: output
  [
    'AAA',
    'BAB', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'tconstruct:necrotic_bone',
    B: 'netherexp:fossil_fuel'
  }
)

// Impregnated Wood in Artisan
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "kubejs:impregnated_wood")
.requireItemTag('#minecraft:planks', 1).requireFluid(Fluid.of("thermal:resin", 100))
})
