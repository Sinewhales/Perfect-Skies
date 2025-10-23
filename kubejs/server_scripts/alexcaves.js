ServerEvents.recipes(event => {
event.remove({ id: 'alexscaves:scarlet_neodymium_ingot' })
event.remove({ id: 'alexscaves:azure_neodymium_ingot' })
event.remove({ id: 'alexscaves:jei.cave_map_magnetic_caves' })

// [1] Magnetic Caves Map
event.recipes.summoningrituals
    .altar(Ingredient.of('kubejs:ancient_rune'))
    .itemOutput(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}'))
    .input('minecraft:lodestone')
    .input('2x mysticalagriculture:nature_agglomeratio')
    .input('kubejs:heart_of_emerald')
    .input('2x kubejs:red_alloy_plate')
    .input('thermal:electrum_gear')
    .input('minecraft:amethyst_block')
    .recipeTime(200)

// [2] Scarlet Neodymium
event.custom({
  "type": "thermal:smelter",
  "ingredients": [
    {
      "value": [
        {
          "item": 'extendedcrafting:black_iron_ingot'
        },

      ],
      "count": 3
    },
    {
      "item": 'alexscaves:raw_scarlet_neodymium',
      "count": 3
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
          "item": 'extendedcrafting:black_iron_ingot'
        },

      ],
      "count": 3
    },
    {
      "item": 'alexscaves:raw_azure_neodymium',
      "count": 3
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

// Spelunkery Table
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
      "item": "kubejs:ancient_rune"
    },
    "B": {
      "item": "minecraft:amethyst_shard"
    },
    "C": {
      "item": "minecraft:lapis_block"
    },
    "D": {
      "item": "minecraft:dripstone_block"
    },
    "E": {
      "item": "kubejs:impregnated_wood"
    },
    "F": {
      "item": "architects_palette:moonshale"
    },
    "G": {
      "item": "kubejs:mud_bricks"
    },
    "H": {
      "item": "farmersdelight:rope"
    },
    "I": {
      "item": "minecraft:cartography_table"
    }
  },
  "result": {
    "item": "alexscaves:spelunkery_table"
  }
})


})

