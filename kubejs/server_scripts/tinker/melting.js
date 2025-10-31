ServerEvents.recipes(event => {
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": 'thermal_extra:sticky_ball'
  },
  "result": {
    "amount": 90,
    "fluid": "thermal:resin"
  },
  "temperature": 450,
  "time": 24
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "tag": 'forestry:combs'
  },
  "result": {
    "amount": 90,
    "fluid": "kubejs:royal_honey"
  },
  "temperature": 450,
  "time": 24
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": 'minecraft:redstone'
  },
  "result": {
    "amount": 100,
    "fluid": "thermal:redstone"
  },
  "temperature": 450,
  "time": 24
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": 'integrateddynamics:menril_berries'
  },
  "result": {
    "amount": 30,
    "fluid": "integrateddynamics:menril_resin"
  },
  "temperature": 450,
  "time": 24
})

// Black Iron
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": 'extendedcrafting:black_iron_ingot'
  },
  "result": {
    "amount": 90,
    "fluid": "kubejs:molten_black_iron"
  },
  "temperature": 600,
  "time": 60
})

// Soul Sand
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": 'minecraft:soul_sand'
  },
  "result": {
    "amount": 500,
    "fluid": "kubejs:molten_soul_sand"
  },
  "temperature": 400,
  "time": 100
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": 'netherexp:phasmo_shard'
  },
  "result": {
    "amount": 250,
    "fluid": "netherexp:ectoplasm"
  },
  "temperature": 400,
  "time": 60
})

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": 'netherexp:banshee_rod'
  },
  "result": {
    "amount": 1000,
    "fluid": "netherexp:ectoplasm"
  },
  "temperature": 400,
  "time": 60
})


})

