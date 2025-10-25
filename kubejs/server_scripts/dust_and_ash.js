ServerEvents.recipes(event => {
event.remove({ id: 'dustandash:crafting/cooled_magma_block' })
// Cooled Magma Block

event.custom({
  "type": "integrateddynamics:drying_basin",
  "fluid": {
    "fluid": "tconstruct:magma",
    "amount": 1000
  },
  "duration": 100,
  "result": {
    "item": "dustandash:cooled_magma_block"
  }
})
})

