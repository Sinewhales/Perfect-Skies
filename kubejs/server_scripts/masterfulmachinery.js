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
      "item": "quark:sturdy_stone"
    },
    "C": {
      "item": "tconstruct:seared_bricks"
    },
    "D": {
      "item": "ceramics:lava_bricks"
    },
    "E": {
      "item": "tconstruct:ichor_slime_crystal"
    },
    "F": {
      "item": "netherexp:fossil_fuel"
    },
    "G": {
      "item": "kubejs:double_compressed_cobblestone"
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
      "item": "tconstruct:nahuatl"
    },
    "B": {
      "item": "architects_palette:twisted_planks"
    },
    "C": {
      "item": "architects_palette:algal_bricks"
    },
    "D": {
      "item": "thermal:nickel_plate"
    },
    "E": {
      "item": "thermal:device_tree_extractor"
    },
    "F": {
      "item": "architects_palette:monazite_rod"
    },
    "G": {
      "item": "extendedcrafting:black_iron_ingot"
    },
    "H": {
      "item": "thermal:bronze_gear"
    },
    "I": {
      "item": "projectred_expansion:frame"
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
  Item.of('mbd2:stone_fuel_bus', 1), // arg 1: output
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

