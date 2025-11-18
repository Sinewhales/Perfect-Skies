ServerEvents.recipes(event => {
// Redstone Crystal
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": 'minecraft:redstone_block'
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:redstone_crystal"
  }
})

// Conductive Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": "minecraft:redstone"
    }
  },
  "mode": "inscribe",
  "result": {
    "item": "kubejs:redstone_chipset"
  }
})
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:redstone_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:conductive_chipset"
  }
})


// Sturdy Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:iron_ingot"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:iron_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:iron_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:sturdy_chipset"
  }
})

// Refined Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:gold_ingot"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:golden_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:golden_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:refined_chipset"
  }
})

// Pristine Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:diamond"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:diamond_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:diamond_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:pristine_chipset"
  }
})

// Pulsating Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": "minecraft:ender_pearl"
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:ender_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:ender_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:pulsating_chipset"
  }
})

// Quartz Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": 'minecraft:quartz'
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:quartz_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:quartz_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:glinting_chipset"
  }
})

// Attuned
// Quartz Chipset
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "top": {
      "item": 'minecraft:emerald'
    },
    "middle": {
      "item": "kubejs:conductive_chipset"
    }
  },
  "mode": "press",
  "result": {
    "item": "kubejs:emerald_chipset"
  }
})

event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": "kubejs:emerald_chipset"
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:attuned_chipset"
  }
})

})

