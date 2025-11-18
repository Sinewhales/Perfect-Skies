ServerEvents.recipes(event => {
// [2] Dark Iron Gear (Thermal)
event.custom({
  "type": "thermal:bottler",
  "ingredients": [
    {
      "item": 'thermal:iron_gear'
    },
    {
      "fluid": "kubejs:black_dye",
      "amount": 250
    }
  ],
  "result": [
    {
      "item": 'kubejs:black_iron_gear'
    }
  ],
  "experience": 0.1
})
})

