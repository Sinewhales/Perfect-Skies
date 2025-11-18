
ServerEvents.recipes(event => {
event.shaped(
  Item.of('cagerium:terrarium', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'CDC'
  ],
  {
    A: 'tinkers_thinking:tempered_glass',
    B: 'kubejs:heart_of_emerald',
    C: 'tconstruct:nahuatl',
    D: 'farmersdelight:straw_bale'
  }
)
})

