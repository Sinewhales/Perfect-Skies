ServerEvents.recipes(event => {
  // Pattern
    event.remove({ id: "tconstruct:tables/pattern" })
    event.shapeless(
      Item.of('tconstruct:pattern'), // arg 1: output
      [
        '4x minecraft:paper'
      ]
    )

// Tree Bark to Planks
    event.shapeless(
      Item.of('minecraft:oak_planks'), // arg 1: output
      [
        '4x farmersdelight:tree_bark'
      ]
    )


// Cobblestone
 event.remove({ id: "projectvibrantjourneys:cobblestone_from_rocks" })
     event.shapeless(
      Item.of('minecraft:cobblestone'), // arg 1: output
      [
        '4x kubejs:rock'
      ]
    )

// Ceramic Plate
event.remove({ id: "ceramics:unfired_clay_plate" })
event.shaped(
  Item.of('ceramics:unfired_clay_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: '#perfectskies:hammer',
    B: 'minecraft:clay_ball',  //arg 3: the mapping object
  }
).damageIngredient('#perfectskies:hammer', 1)

// Clay Bucket
event.remove({ id: "ceramics:unfired_clay_bucket" })
event.shaped(
  Item.of('ceramics:unfired_clay_bucket', 1), // arg 1: output
  [
    '   ',
    'A A', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'ceramics:unfired_clay_plate',

  }
)

event.remove({ id: "cb_microblock:stone_rod" })
event.remove({ id: 'farmersdelight:cutting/stone' })

// Stone Rod
event.shaped(
  Item.of('cb_microblock:stone_rod', 1), // arg 1: output
  [
    '   ',
    ' A ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'kubejs:rock',

  }
)

// Sticks

event.remove({ id: "quark:tweaks/crafting/utility/misc/easy_sticks_bamboo" })
event.remove({ id: 'minecraft:stick' })
event.remove({ id: "quark:tweaks/crafting/utility/misc/easy_sticks" })
event.remove({ id: "environmental:mud_ball_from_dirt" })
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { tag: 'minecraft:planks' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'minecraft:stick', count: 1 }
  ]
})

event.shaped(
  Item.of('minecraft:stick', 1), // arg 1: output
  [
    '   ',
    ' A ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:bamboo',

  }
)

// Clay Bucket
event.custom({
  "type": "tinkers_thinking:drying_rack",
  "ingredient": [
    {
      "item": 'ceramics:unfired_clay_bucket'
    }
  ],
  "output": {
    "item": 'ceramics:empty_clay_bucket'
  }
})

// Stones give random nuggets when smelted
event.smelting('minecraft:iron_nugget', 'minecraft:andesite')
event.smelting('thermal:copper_nugget', 'minecraft:granite')
event.smelting('thermal:silver_nugget', 'minecraft:diorite')
event.smelting('thermal:tin_nugget', 'quark:shale')
event.smelting('thermal:nickel_nugget', 'quark:limestone')
event.smelting('minecraft:gold_nugget', 'quark:jasper')

// Mortar and Pestle
event.remove({ id: "hexerei:pestle_and_mortar_from_mixing_cauldron" })
event.shaped(
  Item.of('hexerei:pestle_and_mortar', 1), // arg 1: output
  [
    '  B',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'cb_microblock:stone_rod',  //arg 3: the mapping object
  }
)

// Woodcutter
event.remove({ id: "hexerei:mahogany_woodcutter" })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "   ",
    " A ",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "cb_microblock:iron_saw"
    },
    "B": {
      "tag": "minecraft:planks"
    },
    "C": {
      "item": "minecraft:stonecutter"
    }
  },
  "result": {
    "item": 'hexerei:mahogany_woodcutter'
  }
})
// Silver Pickaxe
event.remove({ id: "iceandfire:silver_pickaxe" })
// Scanner
event.remove({ id: "scannable:scanner" })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "A A",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal_extra:copper_rod"
    },
    "B": {
      "item": "kubejs:aluminum_plate"
    },
    "C": {
      "item": 'projectred_exploration:electrotine_block'
    },
    "D": {
      "item": "kubejs:scanner_battery"
    },
    "E": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "scannable:scanner"
  }
})

// Hexerei Drying Rack replaces Tinker's Thinking
event.remove({ id: "tinkers_thinking:common/utilities/drying_rack" })
event.remove({ id: "hexerei:herb_drying_rack" })
event.shaped(
  Item.of('hexerei:herb_drying_rack', 1), // arg 1: output
  [
    '   ',
    'AAA', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: '#minecraft:slabs'

  }
)
// Recipe conflict with supplementaries Shelf
event.remove({ id: "supplementaries:item_shelf" })
event.shaped(
  Item.of('supplementaries:item_shelf', 2), // arg 1: output
  [
    '   ',
    '   ', // arg 2: the shape (array of strings)
    'AA '
  ],
  {
    A: '#minecraft:slabs'

  }
)

// Hexerei Drying Recipes (Deprecating Tinker drying rack)
event.remove({ id: "hexerei:leather_from_drying_rack" })
event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'ceramics:unfired_clay_bucket'
    }
  ],
  "output": {
    "item": 'ceramics:empty_clay_bucket'
  },
  "dryingTimeInTicks": 100
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'kubejs:paper_pulp'
    }
  ],
  "output": {
    "item": 'minecraft:paper'
  },
  "dryingTimeInTicks": 200
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'alexscaves:ferrouslime_ball'
    }
  ],
  "output": {
    "item": 'kubejs:gelatinous_ferrousslime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'kubejs:synthethic_leather'
    }
  ],
  "output": {
    "item": 'minecraft:leather'
  },
  "dryingTimeInTicks": 150
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'minecraft:slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:earth_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'tconstruct:sky_slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:sky_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'tconstruct:ichor_slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:ichor_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'minecraft:magma_cream' 
    }
  ],
  "output": {
    "item": 'tinkers_thinking:magma_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'tconstruct:ender_slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:ender_slime_drop'
  },
  "dryingTimeInTicks": 400
})

// Tinker Stuff should be cheaper
event.remove({ id: "tconstruct:tables/tinker_station" })
    event.shapeless(
      Item.of('tconstruct:tinker_station'), // arg 1: output
      [
        'minecraft:crafting_table',
        'tconstruct:pattern'
      ]
    )

event.remove({ id: "tconstruct:tables/part_builder" })
    event.shapeless(
      Item.of('tconstruct:part_builder'), // arg 1: output
      [
        '#minecraft:logs',
        'tconstruct:pattern'
      ]
    )

// Vat
event.remove({ id: "oreberriesreplanted:oak_vat" })
event.shaped(
  Item.of('oreberriesreplanted:oak_vat', 1), // arg 1: output
  [
    '   ',
    'A A', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: '#perfectskies:nonvanilla_planks',
    B: '#perfectskies:nonvanilla_slabs'

  }
)

event.shaped(
  Item.of('oreberriesreplanted:oak_vat', 1), // arg 1: output
  [
    '   ',
    'A A', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:oak_planks',
    B: 'minecraft:oak_slab'

  }
)

// Wood Pulp and Sawdust are not the same thing
event.remove({ id: "thermal:storage/sawdust_block" })
    event.shapeless(
      Item.of('thermal:sawdust_block'), // arg 1: output
      [
        '9x thermal:sawdust'
      ]
    )

// Crafting Station Conflict
event.remove({ id: "tconstruct:tables/crafting_station_from_logs" })
event.remove({ id: "tconstruct:tables/crafting_station" })
event.shapeless(
  Item.of('tconstruct:crafting_station'), // arg 1: output
    [
      'minecraft:crafting_table'
    ]
  )

// Right Clicked Rocks = Small Rocks
    event.shapeless(
      Item.of('kubejs:rock'), // arg 1: output
      [
        'projectvibrantjourneys:rocks'
      ]
    )
event.remove({ id: "projectvibrantjourneys:mossy_cobblestone_from_mossy_rocks" })
        event.shapeless(
      Item.of('kubejs:rock'), // arg 1: output
      [
        'projectvibrantjourneys:mossy_rocks'
      ]
    )

// Seared Bricks via Vat
event.custom({
       "type": "oreberriesreplanted:vat",
        "ingredient": {
          "item": "tconstruct:grout"
        },
        "fluid": "tconstruct:seared_stone",
        "amount": 100,
        "result": {
          "item": 'tconstruct:seared_brick'
        },
        "evaporationtime": 9000
      })

event.remove({ id: "tconstruct:smeltery/seared/melter" })

// Lava Bricks can only be made in Tinker
event.remove({ id: "ceramics:lava_bricks_lava" })

// Blazing Blood Rework
event.remove({ id: 'tconstruct:smeltery/entity_melting/heads/blaze' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/ball' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/block' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_cluster' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_large' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_medium' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_small' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/congealed' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/crystal' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/crystal_block' })
event.custom({
  "type": "tconstruct:melting",
  "byproducts": [
    {
      "amount": 10,
      "fluid": "tconstruct:blazing_blood"
    }
  ],
  "ingredient": {
    "tag": "forge:slimeball/ichor"
  },
  "result": {
    "amount": 200,
    "fluid": "tconstruct:ichor"
  },
  "temperature": 1500,
  "time": 80
})

event.custom({
  "type": "tconstruct:melting",
  "byproducts": [
    {
      "amount": 90,
      "fluid": "tconstruct:blazing_blood"
    }
  ],
  "ingredient": {
    "item": "tconstruct:ichor_slime"
  },
  "result": {
    "amount": 1800,
    "fluid": "tconstruct:ichor"
  },
  "temperature": 1500,
  "time": 241
})

// Bloody Nylum
    event.shapeless(
      Item.of('tconstruct:blood_vanilla_slime_grass'), // arg 1: output
      [
        'tconstruct:ichor_slime_dirt',
        'tconstruct:blood_slime_grass_seeds'
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

// Antique Ink Warping 
event.custom({
  "type": "architects_palette:warping",
  "dimension": "minecraft:the_nether",
  "ingredient": [
    {
      "item": 'minecraft:black_dye'
    }
  ],
  "result": {
    "item": 'supplementaries:antique_ink'
  }
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
  "type": "integrateddynamics:drying_basin",
  "item": 'minecraft:rotten_flesh',
  "fluid": {
    "fluid": "kubejs:nature_extract",
    "amount": 100
  },
  "duration": 100,
  "result": {
    "item": 'forbidden_arcanus:rotten_leather'
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


// Impregnated Wood in Artisan
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "kubejs:impregnated_wood")
.requireItemTag('#minecraft:planks', 1).requireFluid(Fluid.of("thermal:resin", 100))
})
