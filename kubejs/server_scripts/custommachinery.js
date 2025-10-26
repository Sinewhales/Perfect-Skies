ServerEvents.recipes(event => {
  event.custom({
    "type": "custommachinery:custom_craft",
    "machine": "kubejs:artistan_worktable",
    "output": "minecraft:diamond",
    "requirements": [
    {
        "type": "custommachinery:item",
        "mode": "input",
        "item": "minecraft:coal",
        "amount": 64
    }]
})

  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "thermal_extra:sticky_ball")
  .requireFluid(Fluid.of("thermal:resin", 250))
})

