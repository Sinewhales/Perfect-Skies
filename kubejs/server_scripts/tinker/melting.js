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

})

