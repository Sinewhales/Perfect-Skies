ServerEvents.recipes(event => {
event.remove({ id: 'rftoolsutility:text_module' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "forestry:electron_tube_lapis"
    },
    "C": {
      "item": "kubejs:conductive_chipset"
    },
    "D": {
      "item": "integrateddynamics:variable"
    }
  },
  "result": {
    "item": "rftoolsutility:text_module"
  }
})
event.remove({ id: 'rftoolsutility:inventory_module' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "B": {
      "item": "forestry:electron_tube_lapis"
    },
    "C": {
      "item": "kubejs:sturdy_chipset"
    },
    "D": {
      "item": "integrateddynamics:variable"
    }
  },
  "result": {
    "item": 'rftoolsutility:inventory_module'
  }
})
})