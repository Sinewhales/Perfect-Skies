ServerEvents.recipes(event => {
  // Plate Hammer
event.shaped(
  Item.of('kubejs:plate_hammer', 1), // arg 1: output
  [
    'BBB',
    'BBB', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:stick',
    B: 'minecraft:iron_ingot',  //arg 3: the mapping object
  }
)

// Scanner Battery
event.shaped(
  Item.of("kubejs:scanner_battery", 1), // arg 1: output
  [
    " A ",
    "BCB",
    "BCB"
  ],
  {
    A: "projectred_core:red_ingot",
    B: 'thermal:iron_plate',
    C: 'projectred_core:electrotine_dust' //arg 3: the mapping object
  }
)

// Cactus Juice
event.shapeless(
  Item.of('kubejs:cactus_juice'), // arg 1: output
  [
    'minecraft:cactus'
  ]
)

// Ink
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": "minecraft:black_dye"
    },
    "block_in": {
        "blocks": ["water"],
        "state": {
            "level": 0
        }
    },
    "post": [
        {
            "type": "place",
            "block": "kubejs:black_dye"
        }
    ]
})

// Ancient Rune
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "tag": 'minecraft:decorated_pot_sherds'
    },
    "block_in": "kubejs:enchanted_water",
    "post": [
        {
            "type": "drop_item",
            "item": 'kubejs:ancient_rune'
        },
        {
            "type": "place",
            "block": "*"
        }
    ]
})

// Heart Transmutation
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": 'quark:diamond_heart'
    },
    "block_in": "kubejs:enchanted_water",
    "post": [
        {
            "type": "drop_item",
            "item": 'kubejs:heart_of_emerald'
        },
        {
            "type": "place",
            "block": "*"
        },
        {
    "type": "execute",
    "command": "particle minecraft:effect ~ ~1 ~ 1 1 1 0 20",
    "hide": true
}

    ]
})

event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item": 'kubejs:heart_of_emerald'
    },
    "block_in": "kubejs:enchanted_water",
    "post": [
        {
            "type": "drop_item",
            "item": 'quark:diamond_heart'
        },
        {
            "type": "place",
            "block": "*"
        },
        {
    "type": "execute",
    "command": "particle minecraft:effect ~ ~1 ~ 1 1 1 0 20",
    "hide": true
}

    ]
})

// [1] Sulfuric Rubber
event.shaped(
  Item.of('kubejs:rubber_sulfur', 8), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'thermal:rubber',
    B: 'thermal:sulfur'  //arg 3: the mapping object
  }
)
// [1] Tanned Leather

event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": "kubejs:bound_leather",
  "fluid": {
    "fluid": "thermal:resin",
    "amount": 500
  },
  "duration": 200,
  "result": {
    "item": 'kubejs:tanned_leather'
  }
})


// [1] Electrotine Crystal
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": 'projectred_exploration:electrotine_block'
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:electrotine_crystal"
  }
})

// [1] Glowstone Crystal
event.custom({
  "type": "pneumaticcraft:assembly_laser",
  "input": {
    "type": "pneumaticcraft:stacked_item",
    "count": 1,
    "item": 'extendedcrafting:luminessence_block'
  },
  "program": "laser",
  "result": {
    "count": 1,
    "item": "kubejs:glowstone_crystal"
  }
})

// [2] Ink (Thermal)
event.custom({
  "type": "thermal:brewer",
  "ingredients": [
    {
      "item": 'minecraft:black_dye'
    },
	{
      "fluid": "minecraft:water",
	  "amount": 1000
    }
  ],
  "result": [
    {
      "fluid": "kubejs:black_dye",
      "amount": 1000
    }
  ],
  "energy": 1000
})

// Cotton Cloth
event.shaped(
  Item.of('kubejs:cotton_cloth', 1), // arg 1: output
  [
    'ABA',
    'BAB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'rusticdelight:cotton_boll',
    B: 'minecraft:string',  //arg 3: the mapping object
  }
)


event.shaped(
  Item.of('kubejs:crushing_hammer', 1), // arg 1: output
  [
    ' A ',
    ' BA', // arg 2: the shape (array of strings)
    'B  '
  ],
  {
    A: 'minecraft:cobblestone',
    B: 'minecraft:stick',  //arg 3: the mapping object
  }
)

// Mud Bricks
event.smelting('kubejs:mud_brick', 'environmental:mud_ball')


// Small Mud Bricks
event.shaped(
  Item.of('kubejs:mud_bricks', 1), // arg 1: output
  [
    'AA ',
    'AA ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'kubejs:mud_brick'  //arg 3: the mapping object
  }
)

// Double Compressed Cobblestone
event.shaped(
  Item.of('kubejs:double_compressed_cobblestone', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'quark:sturdy_stone',

  }
)

// Compressed Furnace
event.shaped(
  Item.of('kubejs:compressed_furnace', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:furnace',

  }
)

// Gears
// Wooden
event.shaped(
  Item.of('kubejs:wooden_gear', 1), // arg 1: output
  [
    ' A ',
    'A A', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:stick',

  }
)

// Triple Compressed Cobblestone
event.shaped(
  Item.of('kubejs:triple_compressed_cobblestone', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'kubejs:double_compressed_cobblestone',

  }
)

// Glue
event.remove({ id: "tconstruct:smeltery/entity_melting/swiftness" })
event.custom({
  "type": "tconstruct:entity_melting",
  "damage": 1,
  "entity": {
    "type": "minecraft:horse"
  },
  "result": {
    "amount": 50,
    "fluid": "kubejs:liquid_glue"
  }
})



// Buildcraft Depreciation
// Empowered Rubber
event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": 'thermal:cured_rubber',
  "fluid": {
    "fluid": "integrateddynamics:menril_resin",
    "amount": 500
  },
  "duration": 100,
  "result": {
    "item": 'kubejs:empowered_rubber'
  }
})

// Paper Stack
event.shaped(
  Item.of('kubejs:paper_stack', 1), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:paper',
    B: 'minecraft:string',  //arg 3: the mapping object
  }
)

// Dried Glowberries
event.custom({
  "type": "hexerei:drying_rack",
  "ingredients": [
    {
      "item": 'minecraft:glow_berries'
    }
  ],
  "output": {
    "item": 'kubejs:dried_glowberries'
  },
  "dryingTimeInTicks": 100
})


event.shaped(
  Item.of('kubejs:village_locator', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'extendedcrafting:black_iron_ingot',
    B: 'agricraft:emerald_shard',
    C: 'minecraft:compass'  //arg 3: the mapping object
  }
)

// Synthethic Leather
event.shaped(
  Item.of('kubejs:synthethic_leather', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:string',
    B: 'kubejs:cotton_cloth',  
    C: 'thermal_extra:sticky_ball' //arg 3: the mapping object
  }
)

// Cardboard Chunk
event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": 'kubejs:paper_stack',
  "fluid": {
    "fluid": "tconstruct:honey",
    "amount": 250
  },
  "duration": 100,
  "result": {
    "item": 'kubejs:cardboard_chunk'
  }
})

event.custom({
  "type": "integrateddynamics:drying_basin",
  "item": 'kubejs:paper_stack',
  "fluid": {
    "fluid": "kubejs:liquid_glue",
    "amount": 250
  },
  "duration": 100,
  "result": {
    "item": 'kubejs:cardboard_chunk'
  }
})

// Stone Inlay
event.shaped(
  Item.of('kubejs:stone_inlay', 1), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'netherexp:soul_slate',
    B: Item.of('tconstruct:large_plate', '{Material:"tconstruct:rock"}').strongNBT()

  }
)

})






// Ink (Squid Milking)
function milk(event, currentTime) {
  event.getTarget().persistentData.put("lastMilked", currentTime)
  let pitch =  Math.random() + 0.8;
  Utils.server.runCommandSilent(`playsound minecraft:entity.cow.milk neutral @a ${event.getTarget().getX()} ${event.getTarget().getY()} ${event.getTarget().getZ()} 1 ${pitch}`)
  if (event.player.getMainHandItem().count == 1)
    event.server.scheduleInTicks(1, () => {
      event.player.setMainHandItem("kubejs:black_dye_bucket");
    });
  else{
    event.player.setMainHandItem(event.player.getMainHandItem().withCount(event.player.getMainHandItem().count - 1))
    event.player.give(Item.of("kubejs:black_dye_bucket").withCount(1))
  } 
  }
ItemEvents.entityInteracted("minecraft:bucket", (event) => {
    if (event.getTarget().getType() != "minecraft:squid") return
    let currentTime = event.getTarget().level.getTime();
    event.player.swing();
    if (!event.getTarget().persistentData.get("lastMilked")) {
        event.getTarget().persistentData.put("lastMilked", currentTime) // first time milking
        milk(event, currentTime)
        event.cancel();
    }else{
        let lastMilked = event.getTarget().persistentData.getLong("lastMilked");
        let timeSinceLastMilked = currentTime - lastMilked;
        if (timeSinceLastMilked < 400) {
            event.getLevel().runCommandSilent("/particle angry_villager " + event.getTarget().getX() + " " + event.getTarget().getY() + " " + event.getTarget().getZ() + " 0.3 0.7 0.3 1 4");
            event.getLevel().runCommandSilent(`/title ${event.player.displayName.getString()} actionbar "Can't milk now. Try again later"`);
            event.cancel();
        }else{
          milk(event, currentTime)
          event.cancel();
        }
    }
    
});
