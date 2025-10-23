
ServerEvents.recipes(event => {
event.remove({ id: 'farmingforblockheads:market' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AABAA",
    "C   C",
    "CDDDC",
    "EFGFE",
    "HFBFH"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "kubejs:heart_of_emerald"
    },
    "C": {
      "item": "forestry:impregnated_stick"
    },
    "D": {
      "item": "minecraft:red_wool"
    },
    "E": {
      "item": "minecraft:emerald"
    },
    "F": {
      "item": "quark:blossom_log"
    },
    "G": {
      "type": "forge:nbt",
      "item": "lootbags:loot_bag",
      "count": 1,
      "nbt": "{Color:13882323,Loot:\"lootbags:kjs/a93e9hs1ns87kfthowfa40cqh\",Name:\"Seed Bag\",Type:\"COMMON\"}"
    },
    "H": {
      "item": "kubejs:impregnated_wood"
    }
  },
  "result": {
    "item": 'farmingforblockheads:market'
  }
})
})

