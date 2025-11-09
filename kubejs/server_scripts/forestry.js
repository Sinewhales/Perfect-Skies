ServerEvents.recipes(event => {
event.remove({ id: 'forestry:carpenter/impregnated_stick' })
event.remove({ id: 'forestry:fabricator' })

// [1] Impregnated Stick
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'kubejs:impregnated_wood' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'forestry:impregnated_stick', count: 1 }
  ]
})

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
      "item": "kubejs:redstone_crystal"
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

// Carpenter
event.remove({ id: 'forestry:carpenter' })
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
      "item": "tconstruct:amethyst_bronze_ingot"
    },
    "B": {
      "item": "kubejs:black_steel_gear"
    },
    "C": {
      "item": "integratedterminals:menril_glass"
    },
    "D": {
      "item": "kubejs:impregnated_wood"
    },
    "E": {
      "item": "thermal:lead_plate"
    },
    "F": {
      "item": "kubejs:amber_paste_chunk"
    },
    "G": {
      "item": "fluidtank:tank_bronze"
    },
    "H": {
      "item": "extendedcrafting:basic_table"
    },
    "I": {
      "item": "forestry:sturdy_machine"
    }
  },
  "result": {
    "item": "forestry:carpenter"
  }
})

// Sturdy Casing
event.remove({ id: 'forestry:sturdy_machine' })
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
      "item": "tconstruct:amethyst_bronze_ingot"
    },
    "B": {
      "item": "kubejs:duralumin_plate"
    },
    "C": {
      "item": "tinkers_thinking:tempered_glass"
    },
    "D": {
      "item": "integratedscripting:mendesite"
    },
    "E": {
      "item": "thermal:lead_gear"
    },
    "F": {
      "item": "kubejs:gelatinous_ferrousslime_drop"
    },
    "G": {
      "item": "thermal:invar_plate"
    },
    "H": {
      "item": "kubejs:amber_paste_chunk"
    },
    "I": {
      "item": "actuallyadditions:wood_casing"
    }
  },
  "result": {
    "item": 'forestry:sturdy_machine'
  }
})
})






