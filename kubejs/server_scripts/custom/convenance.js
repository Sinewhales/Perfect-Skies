ServerEvents.recipes(event => {
// Red Alloy Block
event.shaped(
  Item.of('kubejs:red_alloy_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'projectred_core:red_ingot'
  }
)
// Ardite Dust
event.smelting('tinkers_thinking:ardite_ingot', 'kubejs:ardite_dust')
event.blasting('tinkers_thinking:ardite_ingot', 'kubejs:ardite_dust')

event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item":  'kubejs:ardite_dust'
  },
  "result": {
    "amount": 90,
    "fluid": "tinkers_thinking:molten_ardite"
  },
  "temperature": 1296,
  "time": 20
})
})

