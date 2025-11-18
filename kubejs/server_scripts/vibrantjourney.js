ServerEvents.recipes(event => {
// Right Clicked Rocks = Small Rocks
    event.shapeless(
      Item.of('kubejs:rock'), // arg 1: output
      [
        'projectvibrantjourneys:rocks'
      ]
    )
event.remove({ id: "projectvibrantjourneys:mossy_cobblestone_from_mossy_rocks" })
        event.shapeless(
      Item.of('kubejs:rock'), // arg 1: output
      [
        'projectvibrantjourneys:mossy_rocks'
      ]
    )

})

