ServerEvents.recipes(event => {
event.remove({ id: 'forestry:carpenter/impregnated_stick' })
event.remove({ id: 'forestry:fabricator' })

// [1] Impregnated Stick
event.shaped(
  Item.of('forestry:impregnated_stick', 8), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:stick',
    B: 'thermal:resin_bucket'
  }
)

// [1] Thermionic Fabricator
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "GFHFG",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "thermal:lead_plate"
    },
    "B": {
      "item": "thermal:gold_gear"
    },
    "C": {
      "item": "extendedcrafting:advanced_table"
    },
    "D": {
      "item": "integratedterminals:menril_glass"
    },
    "E": {
      "item": "thermal:cured_rubber"
    },
    "F": {
      "item": "kubejs:electrotine_gear"
    },
    "G": {
      "item": "buildcraftsilicon:redstone_crystal"
    },
    "H": {
      "item": "extendedcrafting:frame"
    }
  },
  "result": {
    "item": "forestry:fabricator"
  }
})
})






