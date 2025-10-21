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
  'extendedcrafting:black_iron_ingot'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { id: 'minecraft:bucket' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'thermal:iron_plate'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { output: 'minecraft:blast_furnace' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'extendedcrafting:black_iron_ingot'        // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { id: 'minecraft:hopper' }, // Arg 1: the filter
  'minecraft:iron_ingot',            // Arg 2: the item to replace
  'thermal:iron_plate'       // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.shapeless(
  Item.of('scannable:scanner', '{energy:5000}'), // arg 1: output
  [
    Item.of('scannable:scanner', '{energy:0}').strongNBT(),
    'kubejs:scanner_battery'
  ]
)

//[0] Water Bucket from Cactus Juice
event.shaped(
  Item.of('minecraft:water_bucket', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'kubejs:cactus_juice',
    B: 'minecraft:bucket',

  }
)

event.shapeless(
  Item.of('minecraft:water_bucket'), // arg 1: output
  [
    '8x kubejs:cactus_juice',
    'minecraft:bucket'
  ]
)

// Chest Bulk
event.shaped(
  Item.of('minecraft:chest', 4), // arg 1: output
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

event.remove({ output: '#quark:revertable_chests' })
event.remove({ id: 'quark:building/crafting/chests/chest_revert' })
event.stonecutting('#quark:revertable_chests', 'minecraft:chest')
event.stonecutting('minecraft:chest', '#quark:revertable_chests')

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
})