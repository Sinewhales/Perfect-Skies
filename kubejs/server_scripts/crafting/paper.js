ServerEvents.recipes(event => {
    event.remove({ id: "farmersdelight:paper_from_tree_bark" })
// Tree Bark
  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItemTag('#minecraft:logs', 1, "input1")
.requireItemTag('#minecraft:logs', 1, "input2")
   .requireItemTag('#minecraft:logs', 1, "input3")
   .requireItemTag('#minecraft:logs', 1, "input4")
   .requireItemTag('#minecraft:logs', 1, "input6")
   .requireItemTag('#minecraft:logs', 1, "input7")
   .requireItemTag('#minecraft:logs', 1, "input8")
   .requireItemTag('#minecraft:logs', 1, "input9")

// Warphopper
event.remove({ id: "netherexp:warphopper_fur_paper" }) // Re-Add if added during an update

// Sugar Cane
event.remove({ id: "quark:tweaks/crafting/utility/bent/paper" }) 
event.remove({ id: "minecraft:paper" }) 

  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "3x kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItem('minecraft:sugar_cane', "input1")
.requireItem('minecraft:sugar_cane', "input2")
   .requireItem('minecraft:sugar_cane', "input3")
   .requireItem('minecraft:sugar_cane', "input4")
   .requireItem('minecraft:sugar_cane', "input6")
   .requireItem('minecraft:sugar_cane', "input7")
   .requireItem('minecraft:sugar_cane', "input8")
   .requireItem('minecraft:sugar_cane', "input9")

// Canvas
  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItem('farmersdelight:canvas', "input1")
.requireItem('farmersdelight:canvas', "input2")
   .requireItem('farmersdelight:canvas', "input3")
   .requireItem('farmersdelight:canvas', "input4")
   .requireItem('farmersdelight:canvas', "input6")
   .requireItem('farmersdelight:canvas', "input7")
   .requireItem('farmersdelight:canvas', "input8")
   .requireItem('farmersdelight:canvas', "input9")

// Rice
event.remove({ id: "actuallyadditions:rice_paper" }) 

  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "3x kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItem('farmersdelight:rice', "input1")
.requireItem('farmersdelight:rice', "input2")
   .requireItem('farmersdelight:rice', "input3")
   .requireItem('farmersdelight:rice', "input4")
   .requireItem('farmersdelight:rice', "input6")
   .requireItem('farmersdelight:rice', "input7")
   .requireItem('farmersdelight:rice', "input8")
   .requireItem('farmersdelight:rice', "input9")

// Cotton
  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "3x kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItem('rusticdelight:cotton_boll', "input1")
.requireItem('rusticdelight:cotton_boll', "input2")
   .requireItem('rusticdelight:cotton_boll', "input3")
   .requireItem('rusticdelight:cotton_boll', "input4")
   .requireItem('rusticdelight:cotton_boll', "input6")
   .requireItem('rusticdelight:cotton_boll', "input7")
   .requireItem('rusticdelight:cotton_boll', "input8")
   .requireItem('rusticdelight:cotton_boll', "input9")

     event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItem('forestry:wood_pulp', "input1")
.requireItem('forestry:wood_pulp', "input2")
   .requireItem('forestry:wood_pulp', "input3")
   .requireItem('forestry:wood_pulp', "input4")
   .requireItem('forestry:wood_pulp', "input6")
   .requireItem('forestry:wood_pulp', "input7")
   .requireItem('forestry:wood_pulp', "input8")
   .requireItem('forestry:wood_pulp', "input9")

// Disable Sticky Resin Recipe / Find a way to reimplement it later
event.remove({ id: "thermal_extra:sticky_ball_to_paper" }) 

// Death Tome in Smeltery produces pulp
// Ritual for summoning death tome (Book + Animation Rune)


// Liquid Pulp 
event.custom({
  "type": "tconstruct:entity_melting",
  "damage": 1,
  "entity": {
    "type": "twilightforest:death_tome"
  },
  "result": {
    "amount": 50,
    "fluid": "tinkers_thinking:pulp"
  }
})

event.custom({
       "type": "oreberriesreplanted:vat",
        "ingredient": {
          "item": "kubejs:pulp"
        },
        "fluid": "tinkers_thinking:pulp",
        "amount": 100,
        "result": {
          "item": "minecraft:paper"
        },
        "evaporationtime": 100
      })

// Wood Pulp
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "tag": "minecraft:logs"
    }
  ],
  "output": {
    "item": 'forestry:wood_pulp',
    "count": 2
  },
  "grindingTime": 60
})

// Black Dye only in Pestle 
event.remove({ id: "quark:tweaks/crafting/utility/misc/charcoal_to_black_dye" }) 
event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": "minecraft:charcoal"
    }
  ],
  "output": {
    "item": 'minecraft:black_dye',
    "count": 1
  },
  "grindingTime": 100
})

event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": "minecraft:charcoal"
    },
        {
      "item": "minecraft:charcoal"
    }
  ],
  "output": {
    "item": 'minecraft:black_dye',
    "count": 2
  },
  "grindingTime": 150
})

event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": "minecraft:charcoal"
    },
        {
      "item": "minecraft:charcoal"
    },
            {
      "item": "minecraft:charcoal"
    }
  ],
  "output": {
    "item": 'minecraft:black_dye',
    "count": 3
  },
  "grindingTime": 200
})

event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": "minecraft:charcoal"
    },
        {
      "item": "minecraft:charcoal"
    },
            {
      "item": "minecraft:charcoal"
    },
                {
      "item": "minecraft:charcoal"
    }
  ],
  "output": {
    "item": 'minecraft:black_dye',
    "count": 4
  },
  "grindingTime": 300
})

event.custom({
  "type": "hexerei:pestle_and_mortar",
  "ingredients": [
    {
      "item": "minecraft:charcoal"
    },
        {
      "item": "minecraft:charcoal"
    },
            {
      "item": "minecraft:charcoal"
    },
                {
      "item": "minecraft:charcoal"
    },
                    {
      "item": "minecraft:charcoal"
    }
  ],
  "output": {
    "item": 'minecraft:black_dye',
    "count": 5
  },
  "grindingTime": 350
})



// Paper from Cattail
  event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItem('projectvibrantjourneys:cattail', "input1")
.requireItem('projectvibrantjourneys:cattail', "input2")
   .requireItem('projectvibrantjourneys:cattail', "input3")
   .requireItem('projectvibrantjourneys:cattail', "input4")
   .requireItem('projectvibrantjourneys:cattail', "input6")
   .requireItem('projectvibrantjourneys:cattail', "input7")
   .requireItem('projectvibrantjourneys:cattail', "input8")
   .requireItem('projectvibrantjourneys:cattail', "input9")

     event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x kubejs:pulp")
  .requireFluid(Fluid.of("minecraft:water", 500))
  .requireItem('environmental:cattail', "input1")
.requireItem('environmental:cattail', "input2")
   .requireItem('environmental:cattail', "input3")
   .requireItem('environmental:cattail', "input4")
   .requireItem('environmental:cattail', "input6")
   .requireItem('environmental:cattail', "input7")
   .requireItem('environmental:cattail', "input8")
   .requireItem('environmental:cattail', "input9")

// Paper with ID
event.custom({
  "type": "integrateddynamics:squeezer",
  "item": {
    "item": 'kubejs:pulp_block'
  },
 "result": {
    "items": [
      {
        "item": {
          "item": "minecraft:paper",
          "count": 3
        }
      },
      {
        "item": "minecraft:paper",
        "chance": 0.5
      },
      {
        "item": "minecraft:paper",
        "chance": 0.5
      }
    ]
  }
  })

})
