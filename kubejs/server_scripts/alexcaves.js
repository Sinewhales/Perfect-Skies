ServerEvents.recipes(event => {
event.remove({ id: 'alexscaves:scarlet_neodymium_ingot' })
event.remove({ id: 'alexscaves:azure_neodymium_ingot' })
event.remove({ id: 'alexscaves:jei.cave_map_magnetic_caves' })

// [1] Magnetic Caves Map
event.recipes.summoningrituals
    .altar(Ingredient.of('kubejs:ancient_rune'))
    .itemOutput(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}'))
    .input('eidolon:enchanted_ash')
    .input('tconstruct:amethyst_bronze_ingot')
    .input('kubejs:blaze_shard')
    .input(Item.of('tconstruct:large_plate', '{Material:"tconstruct:iron"}').strongNBT())
    .input('minecraft:lodestone')
    .input('supplementaries:antique_ink')
    .recipeTime(200)


// To Rework
// [2] Scarlet Neodymium
event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": 'kubejs:pyrotheum'
        },

      ],
      "count": 1
    },
    {
      "item": 'alexscaves:raw_scarlet_neodymium',
      "count": 1
    }
  ],
  "result": [
    {
      "item": 'alexscaves:scarlet_neodymium_ingot',
      "count": 1
    }
  ],
  "energy": 16000
})

// [2] Azure Neodymium
event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": 'kubejs:pyrotheum'
        },

      ],
      "count": 1
    },
    {
      "item": 'alexscaves:raw_azure_neodymium',
      "count": 1
    }
  ],
  "result": [
    {
      "item": 'alexscaves:azure_neodymium_ingot',
      "count": 1
    }
  ],
  "energy": 16000
})




})

