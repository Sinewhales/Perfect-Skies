ServerEvents.recipes(event => {
event.remove({ id: 'extendedcrafting:black_iron_ingot' })
event.remove({ id: 'extendedcrafting:luminessence' })
event.remove({ id: 'extendedcrafting:basic_component' })

// [0] Basic Component
event.shapeless(
  Item.of('extendedcrafting:basic_component'), // arg 1: output
  [
    'extendedcrafting:black_iron_slate',
    'thermal:iron_plate'
  ]
)


// [0] Advanced Component
event.remove({ id: 'extendedcrafting:advanced_component' })
event.shapeless(
  Item.of('extendedcrafting:advanced_component'), // arg 1: output
  [
    'extendedcrafting:black_iron_slate',
    'thermal:gold_plate'
  ]
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
    "GHIHG",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "kubejs:obsidian_plate"
    },
    "B": {
      "item": "actuallyadditions:black_quartz"
    },
    "C": {
      "item": "tinkers_thinking:spectre_ingot"
    },
    "D": {
      "item": "tconstruct:hepatizon_ingot"
    },
    "E": {
      "item": "fluxnetworks:flux_dust"
    },
    "F": {
      "item": "kubejs:stone_gear"
    },
    "G": {
      "item": "netherexp:soul_glass"
    },
    "H": {
      "item": "kubejs:ardite_rod"
    },
    "I": {
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

