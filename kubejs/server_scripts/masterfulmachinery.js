ServerEvents.recipes(event => {
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABABA",
    "BCDCB",
    "AEFEA",
    "BCDCB",
    "ABABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:compressed_furnace"
    },
    "B": {
      "item": "quark:sturdy_stone"
    },
    "C": {
      "item": "kubejs:blaze_shard"
    },
    "D": {
      "item": "tconstruct:ichor_slime_crystal"
    },
    "E": {
      "item": "kubejs:seared_casing"
    },
    "F": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": "mbd2:primitive_smelter"
  }
})
})

