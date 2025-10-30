JEIEvents.hideItems(event => {
  event.hide('actuallyadditions:crafter_on_a_stick')

  // Crafters
  event.hide('actuallyadditions:crafter_on_a_stick')
  event.hide('trials:crafter')
  event.hide('quark:crafter')

  // Chemlib Plates
    event.hide('chemlib:iron_plate')
    event.hide('chemlib:gold_plate')
    event.hide('chemlib:copper_plate')

  // Iron Dust
  event.hide('nuclearcraft:iron_dust')
  event.hide('occultism:iron_dust')
  event.hide('chemlib:iron_dust')

  // Gold Dust
  event.hide('nuclearcraft:gold_dust')
  event.hide('occultism:gold_dust')
  event.hide('chemlib:gold_dust')

  // Copper Dust
  event.hide('nuclearcraft:copper_dust')
  event.hide('occultism:copper_dust')
  event.hide('chemlib:copper_dust')

  // Iron Gears
    event.hide('industrialforegoing:iron_gear')
  event.hide('buildcraftcore:gear_iron' )
  event.hide('hammerlib:gears/iron' )

// Gold Gears
    event.hide('industrialforegoing:gold_gear')
  event.hide('buildcraftcore:gear_gold' )
  event.hide('hammerlib:gears/gold' )

// Copper Gears
    event.hide('hammerlib:gears/copper')
  event.hide('forestry:gear_copper')

// Copper Nuggets
    event.hide('geolysis:copper_nugget')
  event.hide('iceandfire:copper_nugget')

// Geolosys Clusters
  event.hide(['geolosys:aluminum_cluster', 'geolosys:copper_cluster', 'geolosys:gold_cluster', 'geolosys:iron_cluster', 'geolosys:lead_cluster', 'geolosys:nether_gold_cluster', 'geolosys:nickel_cluster', 'geolosys:osmium_cluster', 'geolosys:platinum_cluster', 'geolosys:zinc_cluster', 'geolosys:uranium_cluster', 'geolosys:tin_cluster', 'geolosys:silver_cluster'])

// Rice
    event.hide(['thermal:rice', 'thermal:rice_seeds', 'actuallyadditions:rice', 'actuallyadditions:rice_seeds', 'thermal:rice_block'])
      event.hide(['thermal:tomato_seeds', 'thermal:tomato', 'thermal:tomato_block'])

// Onion
event.hide(['thermal:onion_seeds', 'thermal:onion', 'thermal:onion_block'])

// Flax
event.hide(['thermal:flax_seeds', 'actuallyadditions:flax_seeds', 'thermal:flax', 'thermal:flax_block'])
event.hide(['sophisticatedstorage:xp_pump_upgrade', 'sophisticatedbackpacks:xp_pump_upgrade'])

// Rope
event.hide(['supplementaries:rope'])

// Tinker casts
event.hide(['tconstruct:gear_cast'])
event.hide(['tconstruct:gear_red_sand_cast'])
event.hide(['tconstruct:gear_sand_cast'])
event.hide(['tconstruct:plate_cast'])
event.hide(['tconstruct:plate_red_sand_cast'])
event.hide(['tconstruct:plate_sand_cast'])

// Steel Ingot
  event.hide('tconstruct:steel_ingot')

// Hide KJS Multi Parts
event.hide(['kubejs:stone_output_bus', 'kubejs:primitive_smelter', 'kubejs:stone_input_bus', 'kubejs:stone_fuel_bus'])
event.hide('kubejs:worktable')

// Aluminum
event.hide('dustandash:aluminum_ingot')
event.hide('nuclearcraft:aluminum_ingot')
event.hide('chemlib:aluminum_ingot')
event.hide('nuclearcraft:aluminum_nugget')
event.hide('chemlib:aluminum_nugget')
event.hide('chemlib:aluminum_metal_block')
event.hide('nuclearcraft:aluminum_dust')
event.hide('chemlib:aluminum_dust')

event.hide('nuclearcraft:aluminum_block')
event.hide('chemlib:aluminum_plate')
event.hide(['oreberriesreplanted:lead_oreberry_bush', 'oreberriesreplanted:uranium_oreberry_bush', 'oreberriesreplanted:osmium_oreberry_bush', 'oreberriesreplanted:zinc_oreberry_bush', 'oreberriesreplanted:lead_oreberry', 'oreberriesreplanted:uranium_oreberry', 'oreberriesreplanted:osmium_oreberry', 'oreberriesreplanted:zinc_oreberry'])

// Drying Rack
event.hide('tinkers_thinking:drying_rack')
})

JEIEvents.addItems(event => {
  event.add(['cb_microblock:stone_saw', 'cb_microblock:iron_saw', 'cb_microblock:diamond_saw', 'cb_microblock:stone_rod'])
  event.add('ceramics:unfired_clay_bucket')
  event.add(['tropicraft:light_mangrove_log', 'tropicraft:black_mangrove_log', 'tropicraft:red_mangrove_log'])

})

JEIEvents.hideFluids(event => {
  event.hide('sophisticatedcore:xp_still')
  event.hide('reliquary:experience')
  event.hide('cofh_core:experience')
  event.hide('experienceobelisk:cognitium')
  event.hide('oreberriesreplanted:osmium_oreberry_juice')
  event.hide('oreberriesreplanted:zinc_oreberry_juice')
  event.hide('oreberriesreplanted:lead_oreberry_juice')
  event.hide('oreberriesreplanted:uranium_oreberry_juice')
})