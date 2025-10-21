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

event.remove({ id: 'forestry:scoop' })
event.shaped(
  Item.of('forestry:scoop', 1), // arg 1: output
  [
    ' BC',
    ' AB', // arg 2: the shape (array of strings)
    'A  '
  ],
  {
    A: 'forestry:impregnated_stick',
    B: 'kubejs:cotton_cloth',
    C: 'farmersdelight:rope'  //arg 3: the mapping object
  }
)

// Bee House
event.remove({ id: 'forestry:bee_house' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:impregnated_wood"
    },
    "B": {
      "tag": 'forestry:combs'
    }
  },
  "result": {
    "item": "forestry:bee_house"
  }
})
})






