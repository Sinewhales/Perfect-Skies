ServerEvents.recipes(event => {
  // Wood
event.remove({ id: 'fluidtank:tank_wood' })
event.shaped(
  Item.of('fluidtank:tank_wood', 1), // arg 1: output
  [
    'ABA',
    'B B', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: '#minecraft:planks',
    B: 'minecraft:glass',  //arg 3: the mapping object
  }
)

// Stone
event.remove({ id: 'fluidtank:tank_stone' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "fluidtank:tank_wood"
    },
    "B": {
      "item": "architects_palette:moonshale"
    },
    "C": {
      "item": "quark:sturdy_stone"
    }
  },
  "result": {
    "item": 'fluidtank:tank_stone' 
  }
})

// Copper Tank
event.remove({ id: 'fluidtank:tank_copper' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "BCB",
    "DBD"
  ],
  "key": {
    "A": {
      "item": "fluidtank:tank_wood"
    },
    "B": {
      "item": "thermal:bronze_plate"
    },
    "C": {
      "item": "kubejs:duralumin_block"
    },
    "D": {
      "item": "fluidtank:tank_stone"
    }
  },
  "result": {
    "item": "fluidtank:tank_copper"
  }
})

event.remove({ id: 'fluidtank:tank_tin' })
event.remove({ id: 'fluidtank:tank_iron' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "fluidtank:tank_stone"
    },
    "B": {
      "item": "fluidtank:tank_tin"
    },
    "C": {
      "item": "kubejs:black_steel_block"
    }
  },
  "result": {
    "item": 'fluidtank:tank_iron'
  }
})

event.remove({ id: 'fluidtank:tank_bronze' })

})
