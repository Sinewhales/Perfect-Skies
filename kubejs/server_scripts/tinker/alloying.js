ServerEvents.recipes(event => {
event.remove({ type: "tconstruct:alloy" })
event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 90,
      "fluid": "kubejs:royal_honey"
    },
    {
      "amount": 90,
      "fluid": "thermal:resin"
    }
  ],
  "result": {
    "amount": 90,
    "fluid": "kubejs:amber_paste"
  },
  "temperature": 450
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 180,
      "fluid": "tconstruct:molten_iron"
    },
    {
      "amount": 90,
      "fluid": "tconstruct:molten_nickel"
    }
  ],
  "result": {
    "amount": 270,
    "fluid": "tconstruct:molten_invar"
  },
  "temperature": 900
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 1000,
      "fluid": "tconstruct:molten_glass"
    },
    {
      "amount": 500,
      "fluid": "tconstruct:molten_aluminum"
    }
  ],
  "result": {
    "amount": 1000,
    "fluid": "tinkers_thinking:molten_tempered_glass"
  },
  "temperature": 950
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 270,
      "fluid": "tconstruct:molten_bronze"
    },
    {
      "amount": 90,
      "fluid": "tconstruct:molten_gold"
    },
    {
      "amount": 90,
      "fluid": "tconstruct:molten_silver"
    }
  ],
  "result": {
    "amount": 180,
    "tag": "forge:molten_hepatizon"
  },
  "temperature": 950
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 270,
      "tag": "forge:molten_copper"
    },
    {
      "amount": 90,
      "tag": "forge:molten_tin"
    }
  ],
  "result": {
    "amount": 360,
    "tag": "forge:molten_bronze"
  },
  "temperature": 700
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 250,
      "catalyst": true,
      "fluid": "minecraft:water"
    },
    {
      "amount": 100,
      "fluid": "minecraft:lava"
    }
  ],
  "result": {
    "amount": 100,
    "fluid": "tconstruct:molten_obsidian"
  },
  "temperature": 1000
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 90,
      "tag": "forge:molten_gold"
    },
    {
      "amount": 90,
      "tag": "forge:molten_silver"
    }
  ],
  "result": {
    "amount": 180,
    "tag": "forge:molten_electrum"
  },
  "temperature": 760
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 90,
      "fluid": "tconstruct:molten_copper"
    },
    {
      "amount": 90,
      "fluid": "tconstruct:molten_aluminum"
    }
  ],
  "result": {
    "amount": 180,
    "fluid": "kubejs:molten_duralumin"
  },
  "temperature": 605
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 90,
      "tag": "forge:molten_copper"
    },
    {
      "amount": 90,
      "tag": "forge:molten_gold"
    }
  ],
  "result": {
    "amount": 180,
    "tag": "forge:molten_rose_gold"
  },
  "temperature": 550
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 90,
      "tag": "forge:molten_iron"
    },
    {
      "amount": 250,
      "fluid": "tconstruct:molten_ender"
    }
  ],
  "result": {
    "amount": 90,
    "fluid": "kubejs:molten_pulsating_iron"
  },
  "temperature": 550
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 180,
      "tag": "forge:molten_tin"
    },
    {
      "amount": 90,
      "fluid": "tconstruct:molten_lead"
    }
  ],
  "result": {
    "amount": 270,
    "fluid": "tconstruct:molten_pewter"
  },
  "temperature": 700
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 90,
      "tag": "forge:molten_bronze"
    },
    {
      "amount": 100,
      "tag": "tconstruct:molten_amethyst"
    }
  ],
  "result": {
    "amount": 90,
    "tag": "forge:molten_amethyst_bronze"
  },
  "temperature": 820
})

event.custom({
  "type": "tconstruct:alloy",
  "inputs": [
    {
      "amount": 180,
      "fluid": "kubejs:molten_black_iron"
    },
    {
      "amount": 90,
      "fluid": "tconstruct:molten_steel"
    }
  ],
  "result": {
    "amount": 90,
    "fluid": "kubejs:molten_black_steel"
  },
  "temperature": 820
})
})

