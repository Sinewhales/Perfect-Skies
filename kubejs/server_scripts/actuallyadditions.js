ServerEvents.recipes(event => {
  // [1] Wood Casing 
event.remove({ id: 'actuallyadditions:wood_casing' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "BDEDB",
    "CEFEC",
    "BDEDB",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "thermal:rubberwood_planks"
    },
    "C": {
      "item": "buildcraftcore:gear_wood"
    },
    "D": {
      "item": "thermal_extra:sticky_ball"
    },
    "E": {
      "item": "kubejs:wood_sheet"
    },
    "F": {
      "item": "minecraft:barrel"
    }
  },
  "result": {
    "item":  'actuallyadditions:wood_casing'
  }
})

})

