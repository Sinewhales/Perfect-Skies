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
      "type": "forge:nbt",
      "item": "cb_microblock:iron_saw",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "B": {
      "item": "minecraft:oak_planks"
    },
    "C": {
      "item": "minecraft:stonecutter"
    }
  },
  "result": {
    "item": 'hexerei:mahogany_woodcutter'
  }
})

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
      "item": "projectred_exploration:electrotine_block"
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
  "dryingTimeInTicks": 600
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'minecraft:slimeball'
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
})
