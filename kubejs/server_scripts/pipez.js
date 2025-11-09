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
      "item": "thermal:cured_rubber"
    },
    "B": {
      "item": 'kubejs:lapis_plate'
    },
    "C": {
      "item": "flopper:flopper"
    },
    "D": {
      "item": "thermal:bronze_block"
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
      "item": "thermal:cured_rubber"
    },
    "B": {
      "item": "extendedcrafting:black_iron_slate"
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
      "item": "thermal:cured_rubber"
    },
    "B": {
      "item": "kubejs:red_alloy_plate"
    },
    "C": {
      "type": "forge:nbt",
      "item": "projectred_expansion:battery",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "D": {
      "item": "kubejs:conductive_alloy_block"
    }
  },
  "result": {
    "item": 'pipez:energy_pipe',
    "count": 6
  }
})
})

