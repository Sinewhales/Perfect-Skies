ServerEvents.recipes(event => {
event.remove({ id: 'alexscaves:scarlet_neodymium_ingot' })
event.remove({ id: 'alexscaves:azure_neodymium_ingot' })
event.remove({ id: 'alexscaves:jei.cave_map_magnetic_caves' })

// [1] Magnetic Caves Map
event.recipes.summoningrituals
    .altar(Ingredient.of('kubejs:ancient_rune'))
    .itemOutput(Item.of('alexscaves:cave_tablet', '{CaveBiome:"alexscaves:magnetic_caves"}'))
    .input('2x mysticalagriculture:nature_agglomeratio')
    .input('2x kubejs:black_steel_ingot')
    .input('2x tconstruct:ichor_slime_crystal')
    .input('2x kubejs:dried_glowberries')
    .input('2x mysticalagriculture:soul_dust')
    .input('2x supplementaries:antique_ink')
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
      "item": "minecraft:dripstone_block"
    },
    "B": {
      "item": "architects_palette:algal_bricks"
    },
    "C": {
      "item": "kubejs:impregnated_wood"
    },
    "D": {
      "item": "netherexp:fossil_fuel"
    },
    "E": {
      "item": "kubejs:black_steel_ingot"
    },
    "F": {
      "item": "kubejs:ancient_rune"
    },
    "G": {
      "item": "thermal_extra:amethyst_dust"
    },
    "H": {
      "item": "tconstruct:necrotic_bone"
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

