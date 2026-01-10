ServerEvents.recipes(event => {
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
      "item": "kubejs:compressed_furnace"
    },
    "B": {
      "item": "kubejs:double_compressed_cobblestone"
    },
    "C": {
      "item": "tconstruct:scorched_bricks"
    },
    "D": {
      "item": 'chisel:lavastone/cracked'
    },
    "E": {
      "item": "kubejs:black_steel_plate"
    },
    "F": {
      "item": "netherexp:fossil_fuel"
    },
    "G": {
      "item": "tconstruct:ichor_congealed_slime"
    },
    "H": {
      "item": "kubejs:blaze_shard"
    },
    "I": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": 'mbd2:primitive_smelter'
  }
})


// Super Extractor
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
      "item": "thermal:device_tree_extractor"
    },
    "B": {
      "item": "architects_palette:algal_bricks"
    },
    "C": {
      "type": "forge:nbt",
      "item": "tconstruct:large_plate",
      "count": 1,
      "nbt": "{Material:\"tconstruct:nahuatl\"}"
    },
    "D": {
      "item": "kubejs:black_iron_gear"
    },
    "E": {
      "item": "kubejs:black_steel_plate"
    },
    "F": {
      "item": "mysticalagriculture:nature_agglomeratio"
    },
    "G": {
      "item": "tinkers_thinking:ardite_ingot"
    },
    "H": {
      "item": "kubejs:empowered_rubber"
    },
    "I": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": 'mbd2:super_extractor'
  }
})

// Bus and Hatches

// Output Hatch
event.shaped(
  Item.of('mbd2:new_machine', 1), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'quark:sturdy_stone',
    B: 'fluidtank:tank_wood',  //arg 3: the mapping object
  }
)

// Input Bus
event.shaped(
  Item.of('mbd2:stone_input_bus', 1), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'quark:sturdy_stone',
    B: 'minecraft:chest',  //arg 3: the mapping object
  }
)

// Output Bus
event.shaped(
  Item.of('mbd2:stone_output_bus', 1), // arg 1: output
  [
    '   ',
    ' A ', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'quark:sturdy_stone',
    B: 'minecraft:chest',  //arg 3: the mapping object
  }
)

// Fuel Bus
event.shaped(
  Item.of('mbd2:stone_fuel_hatch', 1), // arg 1: output
  [
    ' B ',
    ' A ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'quark:sturdy_stone',
    B: 'minecraft:furnace',  //arg 3: the mapping object
  }
)
})

