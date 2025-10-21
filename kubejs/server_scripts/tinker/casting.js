ServerEvents.recipes(event => {
event.custom({
  "type": "tconstruct:casting_table",
  "cooling_time": 111,
  "fluid": {
    "amount": 90,
    "fluid": "kubejs:amber_paste"
  },
  "result": 'kubejs:amber_paste_chunk'
})

event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'actuallyadditions:wood_casing'
  },
  "cast_consumed": true,
  "cooling_time": 113,
  "fluid": {
    "amount": 1000,
    "fluid": "tconstruct:seared_stone"
  },
  "result": "kubejs:seared_casing"
})

// Invar Gear
event.remove({ id: "thermal:parts/invar_gear" })
event.remove({ id: "tconstruct:smeltery/casting/metal/invar/gear_gold_cast" })
event.remove({ id: "tconstruct:smeltery/casting/metal/invar/gear_sand_cast" })
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'buildcraftcore:gear_stone'
  },
    "cast_consumed": true,
  "cooling_time": 120,
  "fluid": {
    "amount": 360,
    "fluid": "tconstruct:molten_invar"
  },
  "result": 'thermal:invar_gear'
})

// Red Alloy
event.remove({ id: "projectred_core:red_ingot" })
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'minecraft:copper_ingot'
  },
    "cast_consumed": true,
  "cooling_time": 60,
  "fluid": {
    "amount": 800,
    "fluid": "thermal:redstone"
  },
  "result": 'projectred_core:red_ingot'
})

// Clay
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'minecraft:sand'
  },
  "cast_consumed": true,
  "cooling_time": 60,
  "fluid": {
    "amount": 1000,
    "fluid": "minecraft:water"
  },
  "result": "minecraft:clay"
})

// Iron Gear
event.remove({ id: "tconstruct:smeltery/casting/metal/iron/gear_gold_cast" })
event.remove({ id: "tconstruct:smeltery/casting/metal/iron/gear_sand_cast" })
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'buildcraftcore:gear_stone'
  },
    "cast_consumed": true,
  "cooling_time": 120,
  "fluid": {
    "amount": 360,
    "fluid": "tconstruct:molten_iron"
  },
  "result": 'thermal:iron_gear'
})

// Impregnated Stick
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'minecraft:stick'
  },
    "cast_consumed": true,
  "cooling_time": 20,
  "fluid": {
    "amount": 125,
    "fluid": "thermal:resin"
  },
  "result": 'forestry:impregnated_stick'
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'kubejs:cotton_cloth'
  },
    "cast_consumed": true,
  "cooling_time": 100,
  "fluid": {
    "amount": 100,
    "fluid": "kubejs:royal_honey"
  },
  "result": 'kubejs:synthethic_leather'
})

event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": 'thermal:cured_rubber'
  },
    "cast_consumed": true,
  "cooling_time": 60,
  "fluid": {
    "amount": 100,
    "fluid": "integrateddynamics:menril_resin"
  },
  "result": 'kubejs:empowered_rubber'
})
})

