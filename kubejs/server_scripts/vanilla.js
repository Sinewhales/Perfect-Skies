ServerEvents.recipes(event => {
event.remove({ id: 'minecraft:cauldron' })
event.shaped(
  Item.of('minecraft:cauldron', 1), // arg 1: output
  [
    'A A',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'thermal:iron_plate'  //arg 3: the mapping object
  }
)

event.replaceInput(
  { id: 'minecraft:flint_and_steel' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'tconstruct:hepatizon_ingot'        // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { id: 'minecraft:bucket' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'thermal:iron_plate'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)


event.shapeless(
  Item.of('scannable:scanner', '{energy:5000}'), // arg 1: output
  [
    Item.of('scannable:scanner', '{energy:0}'),
    'kubejs:scanner_battery'
  ]
)

//[0] Water Bucket from Cactus Juice
event.shapeless(
  Item.of('minecraft:water_bucket'), // arg 1: output
  [
    '4x kubejs:cactus_juice',
    'minecraft:bucket'
  ]
)

event.shapeless(
  Item.of('woodenbucket:wooden_bucket', '{Damage:0,Fluid:{Amount:1000,FluidName:"minecraft:water"}}'), // arg 1: output
  [
    '4x kubejs:cactus_juice',
    'woodenbucket:wooden_bucket'
  ]
)

// Chest Bulk
event.shaped(
  Item.of('minecraft:chest', 2), // arg 1: output
  [
    'AAA',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: '#minecraft:logs'  //arg 3: the mapping object
  }
)

event.shaped(
  Item.of('minecraft:chest', 1), // arg 1: output
  [
    'AAA',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: '#minecraft:planks'  //arg 3: the mapping object
  }
)
// test
event.remove({ output: '#quark:revertable_chests' })
event.remove({ id: 'quark:building/crafting/chests/chest_revert' })
event.stonecutting('#quark:revertable_chests', 'minecraft:chest')
event.stonecutting('minecraft:chest', '#quark:revertable_chests')

// Sugar Cane Block
event.stonecutting('thermal:sugar_cane_block', 'quark:sugar_cane_block')
event.stonecutting('quark:sugar_cane_block', 'thermal:sugar_cane_block')

// Gravel
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'minecraft:cobblestone' }
  ],
  tool: { item: 'kubejs:plate_hammer' },
  result: [
    { item: 'minecraft:gravel', count: 1 }
  ]
})

event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'minecraft:gravel' }
  ],
  tool: { item: 'kubejs:plate_hammer' },
  result: [
    { item: 'minecraft:sand', count: 1 }
  ]
})

// Gravel
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'minecraft:cobblestone' }
  ],
  tool: { item: 'kubejs:crushing_hammer' },
  result: [
    { item: 'minecraft:gravel', count: 1 }
  ]
})

event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'minecraft:gravel' }
  ],
  tool: { item: 'kubejs:crushing_hammer' },
  result: [
    { item: 'minecraft:sand', count: 1 }
  ]
})



// Leather

// Lodestone Alt
event.shaped(
  Item.of('minecraft:lodestone', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'architects_palette:chiseled_moonshale',
    B: 'kubejs:black_steel_ingot'  //arg 3: the mapping object
  }
)

// Summon Blaze
event.recipes.summoningrituals
    .altar(Ingredient.of('minecraft:fire_charge'))
    .mobOutput('minecraft:blaze')
    .input('mynethersdelight:powder_cannon')
    .input('9x netherexp:fossil_fuel')
    .input('minecraft:blaze_rod')
    .input('thermal:sulfur_block')
    .input('minecraft:lava_bucket')
    .recipeTime(100)
    .itemOutput('minecraft:bucket')

// Copper Anvil
event.shaped(
  Item.of('minecraft:anvil', 1), // arg 1: output
  [
    'AAA',
    ' B ', // arg 2: the shape (array of strings)
    'BBB'
  ],
  {
    A: 'minecraft:copper_block',
    B: 'minecraft:copper_ingot'  //arg 3: the mapping object
  }
)

// Cheap Hopper Removal
event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_hopper' })

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

// Unbreakable Brush
event.custom({
    "type": "lychee:anvil_crafting",
    "item_in": [
        {
            "item": "minecraft:brush"
        },
        {
            "item": 'quark:diamond_heart'
        }
    ],
    "item_out": {
      "item": "minecraft:brush",
      "count": 1,
      "nbt": "{Damage:0,Unbreakable:1}"
    },
    "level_cost": 1,
    "material_cost": 1,
    "post": {
        "type": "prevent_default"
    }
})

// Brush
event.remove({ id: 'minecraft:brush' })
event.shaped(
  Item.of('minecraft:brush', 1), // arg 1: output
  [
    ' C ',
    ' B ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'forestry:impregnated_stick',
    B: 'tconstruct:hepatizon_ingot',
    C: 'farmersdelight:canvas' //arg 3: the mapping object
  }
)

// Enchanting Table
event.remove({ id: 'blue_skies:enchanting_table_compat' })
event.replaceInput(
  { id: 'minecraft:enchanting_table' }, // Arg 1: the filter
  'minecraft:obsidian',            // Arg 2: the item to replace
  'kubejs:reinforced_obsidian_block'        // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)
})