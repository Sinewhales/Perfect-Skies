ServerEvents.recipes(event => {
// Mortar and Pestle
event.remove({ id: "hexerei:pestle_and_mortar_from_mixing_cauldron" })
event.shaped(
  Item.of('hexerei:pestle_and_mortar', 1), // arg 1: output
  [
    '  C',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:cobblestone_slab',
    B: 'minecraft:flint',
    C: 'cb_microblock:stone_rod',  //arg 3: the mapping object
  }
)

// Woodcutter
event.remove({ id: "hexerei:mahogany_woodcutter" })
event.shaped(
  Item.of('hexerei:mahogany_woodcutter', 1), // arg 1: output
  [
    "   ",
    " A ",
    "BCB"
  ],
  {
    A: 'thermal:saw_blade',
    B: 'extendedcrafting:black_iron_ingot', 
    C: "minecraft:stonecutter" //arg 3: the mapping object
  }
)

// Hexerei Drying Rack replaces Tinker's Thinking
event.remove({ id: "tinkers_thinking:common/utilities/drying_rack" })
event.remove({ id: "hexerei:herb_drying_rack" })
event.shaped(
  Item.of('hexerei:herb_drying_rack', 1), // arg 1: output
  [
    '   ',
    'AAA', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: '#minecraft:slabs'

  }
)

// Hexerei Drying Recipes (Deprecating Tinker drying rack)
event.remove({ id: "hexerei:leather_from_drying_rack" })

event.campfireCooking('minecraft:charcoal', '#minecraft:logs', 0.35, 400)

// Drying Canvas into String
event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'farmersdelight:canvas'
    }
  ],
  "output": {
    "item": 'minecraft:string'
  },
  "dryingTimeInTicks": 60
})



event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'alexscaves:ferrouslime_ball'
    }
  ],
  "output": {
    "item": 'kubejs:gelatinous_ferrousslime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'kubejs:synthethic_leather'
    }
  ],
  "output": {
    "item": 'minecraft:leather'
  },
  "dryingTimeInTicks": 150
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'minecraft:slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:earth_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'tconstruct:sky_slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:sky_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'tconstruct:ichor_slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:ichor_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'minecraft:magma_cream' 
    }
  ],
  "output": {
    "item": 'tinkers_thinking:magma_slime_drop'
  },
  "dryingTimeInTicks": 400
})

event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'tconstruct:ender_slime_ball'
    }
  ],
  "output": {
    "item": 'tinkers_thinking:ender_slime_drop'
  },
  "dryingTimeInTicks": 400
})
})

