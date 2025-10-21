// priority: 1

ServerEvents.recipes(event => {
event.custom({
  "type": "amendments:cauldron_crafting",
  "input_items": [
    {
      "item": 'minecraft:iron_ingot'
    }
  ],
  "input_fluid": {
    "id": "kubejs:black_dye"
  },
  "output_item": {
    "id": "extendedcrafting:black_iron_ingot",
    "Count": 1
  },
  "fluid_amount_difference": -1
})

event.custom({
  "type": "amendments:cauldron_crafting",
  "input_items": [
    {
      "item": 'thermal:iron_gear'
    }
  ],
  "input_fluid": {
    "id": "kubejs:black_dye"
  },
  "output_item": {
    "id": "kubejs:black_iron_gear",
    "Count": 1
  },
  "fluid_amount_difference": -1
})

event.custom({
  "type": "amendments:cauldron_crafting",
  "input_items": [
    {
      "item": 'kubejs:inactive_luminessence'
    }
  ],
  "input_fluid": {
    "id": "mob_grinding_utils:fluid_xp"
  },
  "output_item": {
    "id": 'extendedcrafting:luminessence',
    "Count": 1
  },
  "fluid_amount_difference": -1
})

event.custom({
  "type": "amendments:cauldron_crafting",
  "input_items": [
    {
      "item": 'minecraft:wheat_seeds'
    }
  ],
  "input_fluid": {
    "id": "mob_grinding_utils:fluid_xp"
  },
  "output_item": {
    "id": 'giacomos_exp:expseed',
    "Count": 1
  },
  "fluid_amount_difference": -1
})
})

