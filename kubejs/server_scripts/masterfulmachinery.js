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
})

