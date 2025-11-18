ServerEvents.recipes(event => {
  // [1] Wood Casing 
event.remove({ id: 'actuallyadditions:wood_casing' })
event.shaped(
  Item.of('actuallyadditions:wood_casing', 1), // arg 1: output
  [
    'ABA',
    'C C', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'kubejs:wood_sheet',
    B: 'extendedcrafting:black_iron_slate',
    C: 'kubejs:aluminum_plate'
  }
)


// Rice Slimeball
event.remove({ id: 'actuallyadditions:rice_slime_potion' })
event.remove({ id: 'actuallyadditions:rice_slime' })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "actuallyadditions:rice_slimeball")
  .requireFluid(Fluid.of("minecraft:water", 250)).damageItem("kubejs:plate_hammer", 1, "tool")
  .requireItem('actuallyadditions:rice_dough')

// Rice Dough
event.remove({ id: 'actuallyadditions:rice_dough' })
event.custom({
  "type": "farmersdelight:cooking",
  "cookingtime": 100,
  "experience": 1.0,
  "ingredients": [
    {
      "item": "farmersdelight:rice"
    },
    {
      "item": "farmersdelight:rice"
    },
    {
      "item": "farmersdelight:rice"
    },
        {
      "item": "salt:salt"
    },
        {
        "type": "forge:partial_nbt",
        "item": "minecraft:potion",
        "nbt": "{Potion:\"minecraft:water\"}"
    }
  ],
  "recipe_book_tab": "misc",
  "result": {
    "count": 1,
    "item": 'actuallyadditions:rice_dough'
  }
})
})


