ServerEvents.recipes(event => {
event.remove({ id: 'alexscaves:scarlet_neodymium_ingot' })
event.remove({ id: 'alexscaves:azure_neodymium_ingot' })
event.remove({ id: 'alexscaves:jei.cave_map_magnetic_caves' })

// [1] Magnetic Caves Map
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
      "item": "minecraft:calcite"
    },
    "B": {
      "item": "kubejs:electrotine_plate"
    },
    "C": {
      "item": "minecraft:amethyst_shard"
    },
    "D": {
      "item": "integrateddynamics:crystalized_menril_chunk"
    },
    "E": {
      "item": "mysticalagriculture:nature_agglomeratio"
    },
    "F": {
      "item": "quark:diamond_heart"
    },
    "G": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "H": {
      "item": 'architects_palette:moonshale',
    },
    "I": {
      "item": "minecraft:map"
    }
  },
  "result": {
      "type": "forge:nbt",
      "item": "alexscaves:cave_tablet",
      "count": 1,
      "nbt": "{CaveBiome:\"alexscaves:magnetic_caves\"}"
  }
})

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




})

