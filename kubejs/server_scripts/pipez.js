ServerEvents.recipes(event => {
event.remove({ mod: 'pipez' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:copper_plate"
    },
    "B": {
      "item": "thermal_extra:sticky_ball"
    },
    "C": {
      "item": "buildcraftfactory:tank"
    },
    "D": {
      "item": "integrateddynamics:crystalized_menril_block"
    }
  },
  "result": {
    "item": 'pipez:fluid_pipe',
    "count": 8
  }
})

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
      "item": "thermal:cured_rubber"
    },
    "C": {
      "item": "minecraft:hopper"
    },
    "D": {
      "item": "extendedcrafting:luminessence_block"
    }
  },
  "result": {
        "item": 'pipez:item_pipe',
        "count": 8
  }
})

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
      "item": "projectred_core:electrotine_dust"
    },
    "C": {
      "item": 'projectred_core:red_ingot'
    },
    "D": {
      "item": "alexscaves:scarlet_neodymium_node"
    }
  },
  "result": {
     "item": 'pipez:energy_pipe',
     "count": 8
  }
})
})

