ServerEvents.recipes(event => {
  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "thermal_extra:sticky_ball")
  .requireFluid(Fluid.of("thermal:resin", 250)).damageItem("kubejs:plate_hammer", 1, "tool")
  
// Artisan Worktable
  event.shapeless(
  Item.of('custommachinery:custom_machine_item', '{machine:"kubejs:artistan_worktable"}'), // arg 1: output
  [
    'minecraft:crafting_table',
    '#cb_microblock:tools/saw'
  ]
).damageIngredient('#cb_microblock:tools/saw', 1)
})

