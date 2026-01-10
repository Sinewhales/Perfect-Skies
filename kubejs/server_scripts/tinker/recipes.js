ServerEvents.recipes(event => {
  event.remove({ id: "tconstruct:smeltery/seared/melter" })
  // Pattern
    event.remove({ id: "tconstruct:tables/pattern" })
    event.shapeless(
      Item.of('tconstruct:pattern', 1), // arg 1: output
      [
        '4x minecraft:paper'
      ]
    )

// Tinker Stuff should be cheaper
event.remove({ id: "tconstruct:tables/tinker_station" })
    event.shapeless(
      Item.of('tconstruct:tinker_station'), // arg 1: output
      [
        'minecraft:crafting_table',
        'tconstruct:pattern'
      ]
    )

event.remove({ id: "tconstruct:tables/part_builder" })
    event.shapeless(
      Item.of('tconstruct:part_builder'), // arg 1: output
      [
        '#minecraft:logs',
        'tconstruct:pattern'
      ]
    )

// Crafting Station Conflict
event.remove({ id: "tconstruct:tables/crafting_station_from_logs" })
event.remove({ id: "tconstruct:tables/crafting_station" })
event.shapeless(
  Item.of('tconstruct:crafting_station'), // arg 1: output
    [
      'minecraft:crafting_table'
    ]
  )

// Seared Bricks via Vat
event.custom({
       "type": "oreberriesreplanted:vat",
        "ingredient": {
          "item": "tconstruct:grout"
        },
        "fluid": "tconstruct:seared_stone",
        "amount": 100,
        "result": {
          "item": 'tconstruct:seared_brick'
        },
        "evaporationtime": 9000
      })

// Blazing Blood Rework
event.remove({ id: 'tconstruct:smeltery/entity_melting/heads/blaze' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/ball' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/block' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_cluster' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_large' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_medium' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/bud_small' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/congealed' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/crystal' })
event.remove({ id: 'tconstruct:smeltery/melting/slime/ichor/crystal_block' })
event.custom({
  "type": "tconstruct:melting",
  "byproducts": [
    {
      "amount": 10,
      "fluid": "tconstruct:blazing_blood"
    }
  ],
  "ingredient": {
    "tag": "forge:slimeball/ichor"
  },
  "result": {
    "amount": 200,
    "fluid": "tconstruct:ichor"
  },
  "temperature": 1500,
  "time": 80
})

event.custom({
  "type": "tconstruct:melting",
  "byproducts": [
    {
      "amount": 45,
      "fluid": "tconstruct:molten_lead"
    }
  ],
  "ingredient": {
    "item": 'alexscaves:galena'
  },
  "result": {
    "amount": 250,
    "fluid": "kubejs:molten_galena_stone"
  },
  "temperature": 1200,
  "time": 80
})


event.custom({
  "type": "tconstruct:melting",
  "byproducts": [
    {
      "amount": 90,
      "fluid": "tconstruct:blazing_blood"
    }
  ],
  "ingredient": {
    "item": "tconstruct:ichor_slime"
  },
  "result": {
    "amount": 1800,
    "fluid": "tconstruct:ichor"
  },
  "temperature": 1500,
  "time": 241
})

// Smelting + Kiln
event.smelting('2x tconstruct:scorched_brick', 'tconstruct:nether_grout')
})

