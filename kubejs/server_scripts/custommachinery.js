ServerEvents.recipes(event => {
  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "thermal_extra:sticky_ball")
  .requireFluid(Fluid.of("thermal:resin", 250)).damageItem("kubejs:plate_hammer", 1, "tool")
})

