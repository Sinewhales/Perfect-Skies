ServerEvents.recipes(event => {
  // Pattern
    event.remove({ id: "tconstruct:tables/pattern" })
    event.shapeless(
      Item.of('tconstruct:pattern'), // arg 1: output
      [
        '4x minecraft:paper'
      ]
    )

// Tree Bark to Planks
    event.shapeless(
      Item.of('minecraft:oak_planks'), // arg 1: output
      [
        '4x farmersdelight:tree_bark'
      ]
    )


// Cobblestone
 event.remove({ id: "projectvibrantjourneys:cobblestone_from_rocks" })
     event.shapeless(
      Item.of('minecraft:cobblestone'), // arg 1: output
      [
        '4x kubejs:rock'
      ]
    )

// Ceramic Plate
event.remove({ id: "ceramics:unfired_clay_plate" })
event.shaped(
  Item.of('ceramics:unfired_clay_plate', 1), // arg 1: output
  [
    'A  ',
    'B  ', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: '#perfectskies:hammer',
    B: 'minecraft:clay_ball',  //arg 3: the mapping object
  }
).damageIngredient('#perfectskies:hammer', 1)

// Clay Bucket
event.remove({ id: "ceramics:unfired_clay_bucket" })
event.shaped(
  Item.of('ceramics:unfired_clay_bucket', 1), // arg 1: output
  [
    '   ',
    'A A', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'ceramics:unfired_clay_plate',

  }
)

event.remove({ id: "cb_microblock:stone_rod" })
event.remove({ id: 'farmersdelight:cutting/stone' })




})
