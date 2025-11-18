ServerEvents.recipes(event => {
// Recipe conflict with supplementaries Shelf
event.remove({ id: "supplementaries:item_shelf" })
event.shaped(
  Item.of('supplementaries:item_shelf', 2), // arg 1: output
  [
    '   ',
    '   ', // arg 2: the shape (array of strings)
    'AA '
  ],
  {
    A: '#minecraft:slabs'

  }
)
})

