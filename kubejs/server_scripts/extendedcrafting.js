ServerEvents.recipes(event => {
event.remove({ id: 'extendedcrafting:black_iron_ingot' })
event.remove({ id: 'extendedcrafting:luminessence' })
event.remove({ id: 'extendedcrafting:basic_component' })

// [0] Basic Component
event.shaped(
  Item.of('extendedcrafting:basic_component', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'thermal:iron_plate',
    B: 'extendedcrafting:luminessence',
    C: 'extendedcrafting:black_iron_slate' //arg 3: the mapping object
  }
)

// [0] Advanced Component
event.remove({ id: 'extendedcrafting:advanced_component' })
event.shaped(
  Item.of('extendedcrafting:advanced_component', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'thermal:gold_plate',
    B: 'extendedcrafting:luminessence',
    C: 'extendedcrafting:black_iron_slate' //arg 3: the mapping object
  }
)

// [0] Black Iron Slate
event.remove({ id: 'extendedcrafting:black_iron_slate' })
event.shaped(
  Item.of('extendedcrafting:black_iron_slate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'kubejs:plate_hammer',
    B: 'extendedcrafting:black_iron_ingot',  //arg 3: the mapping object
  }
).damageIngredient("kubejs:plate_hammer", 1)

// [0] Basic Table
event.remove({ id: 'extendedcrafting:basic_table' })
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'extendedcrafting:basic_catalyst'
    },
    "block_in": 'avaritia:compressed_crafting_table',
    "post": [
        {
            "type": "place",
            "block": 'extendedcrafting:basic_table'
        }
    ]
}
)

// [0] Advanced Table
event.remove({ id: 'extendedcrafting:advanced_table' })
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'extendedcrafting:advanced_catalyst'
    },
    "block_in": 'extendedcrafting:basic_table',
    "post": [
        {
            "type": "place",
            "block": 'extendedcrafting:advanced_table'
        }
    ]
}
)

// [1] Black Iron Frame
event.remove({ id: 'extendedcrafting:frame' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "CFGFC",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "tconstruct:hepatizon_ingot"
    },
    "B": {
      "item": "thermal:invar_gear"
    },
    "C": {
      "item": "tinkers_thinking:tempered_glass"
    },
    "D": {
      "item": "tconstruct:obsidian_pane"
    },
    "E": {
      "item": 'tconstruct:seared_brick'
    },
    "F": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "G": {
      "item": "actuallyadditions:wood_casing"
    }
  },
  "result": {
    "item": "extendedcrafting:frame"
  }
})

// [2] Black Iron Ingot (Thermal)

event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": "minecraft:iron_ingot"
    },
    {
      "fluid": "kubejs:black_dye",
      "amount": 250
    }
  ],
  "result": [
    {
      "item": "extendedcrafting:black_iron_ingot"
    }
  ],
  "experience": 0.1
})

// [2] Luminessence (Thermal)
event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": 'kubejs:inactive_luminessence'
    },
    {
      "fluid": "mob_grinding_utils:fluid_xp",
      "amount": 250
    }
  ],
  "result": [
    {
      "item": 'extendedcrafting:luminessence'
    }
  ],
  "experience": 0.1
})

// [2] Black Iron Slate (Thermal)
event.custom({
  "type": "thermal:press",
  "ingredient": {
    "item": 'extendedcrafting:black_iron_ingot'
  },
  "result": [
    {
      "item": 'extendedcrafting:black_iron_slate'
    }
  ]
})









})

