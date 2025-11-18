ServerEvents.recipes(event => {
// Raw Aluminum Block
event.shaped(
  Item.of('kubejs:raw_aluminum_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'kubejs:raw_aluminum_ore'  //arg 3: the mapping object
  }
)

// Aluminum
event.smelting('kubejs:aluminum_ingot', 'kubejs:raw_aluminum_ore')
event.blasting('kubejs:aluminum_ingot', 'kubejs:raw_aluminum_ore')

event.smelting('kubejs:aluminum_ingot', 'kubejs:aluminum_dust')
event.blasting('kubejs:aluminum_ingot', 'kubejs:aluminum_dust')


// Aluminum
event.shapeless(
  Item.of('kubejs:aluminum_ingot'), // arg 1: output
  [
    '9x kubejs:aluminum_nugget'
  ]
)


event.shapeless(
  Item.of('kubejs:aluminum_nugget', 9), // arg 1: output
  [
    'kubejs:aluminum_ingot'
  ]
)
// Alu Block
event.shapeless(
  Item.of('kubejs:aluminum_block'), // arg 1: output
  [
    '9x kubejs:aluminum_ingot'
  ]
)

event.shapeless(
  Item.of('kubejs:aluminum_ingot', 9), // arg 1: output
  [
    'kubejs:aluminum_block'
  ]
)

})

