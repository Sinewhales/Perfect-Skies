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
      "item": "kubejs:red_alloy_plate"
    },
    "B": {
      "item": "thermal:lapis_gear"
    },
    "C": {
      "item": "buildcrafttransport:pipe_fluids_iron_colorless"
    },
    "D": {
      "item": "integratedterminals:menril_glass"
    }
  },
  "result": {
    "item": "pipez:fluid_pipe",
    "count": 6
  }
}
)

event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:bronze_plate"
    },
    "B": {
      "item": "thermal:cured_rubber"
    },
    "C": {
      "item": "quark:pipe"
    },
    "D": {
      "item": "thermal:electrum_block"
    }
  },
  "result": {
    "item": 'pipez:item_pipe',
    "count": 6
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
      "item": "thermal:invar_plate"
    },
    "B": {
      "item": "kubejs:empowered_rubber"
    },
    "C": {
      "item": "buildcrafttransport:pipe_power_gold_colorless"
    },
    "D": {
      "item": "kubejs:red_alloy_block"
    }
  },
  "result": {
    "item": "pipez:energy_pipe",
    "count": 6
  }
})
})

