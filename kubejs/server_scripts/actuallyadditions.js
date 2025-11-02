ServerEvents.recipes(event => {
  // [1] Wood Casing 
event.remove({ id: 'actuallyadditions:wood_casing' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCBA",
    "DEFED",
    "GHIHG",
    "DEFED",
    "ABCBA"
  ],
  "key": {
    "A": {
      "item": "kubejs:wood_sheet"
    },
    "B": {
      "item": "quark:blossom_log"
    },
    "C": {
      "item": "forestry:beeswax"
    },
    "D": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "E": {
      "item": "kubejs:wooden_gear"
    },
    "F": {
      "item": "thermal_extra:iron_rod"
    },
    "G": {
      "item": "thermal:emerald_dust"
    },
    "H": {
      "item": "kubejs:paper_stack"
    },
    "I": {
      "item": "minecraft:barrel"
    }
  },
  "result": {
    "item": "actuallyadditions:wood_casing"
  }
})

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


