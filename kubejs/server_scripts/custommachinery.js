ServerEvents.recipes(event => {

// Artisan Worktable
  event.shapeless(
  Item.of('custommachinery:custom_machine_item', '{machine:"kubejs:artistan_worktable"}'), // arg 1: output
  [
    'minecraft:crafting_table',
    '#cb_microblock:tools/saw'
  ]
).damageIngredient('#cb_microblock:tools/saw', 1)
})

