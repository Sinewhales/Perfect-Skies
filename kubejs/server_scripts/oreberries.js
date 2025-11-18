ServerEvents.recipes(event => {
// Vat
event.remove({ id: "oreberriesreplanted:oak_vat" })
event.shaped(
  Item.of('oreberriesreplanted:oak_vat', 1), // arg 1: output
  [
    '   ',
    'A A', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: '#perfectskies:nonvanilla_planks',
    B: '#perfectskies:nonvanilla_slabs'

  }
)

event.shaped(
  Item.of('oreberriesreplanted:oak_vat', 1), // arg 1: output
  [
    '   ',
    'A A', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:oak_planks',
    B: 'minecraft:oak_slab'

  }
)
})

