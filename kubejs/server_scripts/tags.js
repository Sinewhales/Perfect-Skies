ServerEvents.tags('block', event => {
// Cactus Should Grow in Spring
   event.add('sereneseasons:spring_crops', 'minecraft:cactus')

})
ServerEvents.tags('item', event => {
// Iron Plate
event.removeAll('forge:plates/iron')
event.add('forge:plates/iron', 'thermal:iron_plate')
event.removeAll('ad_astra:iron_plates')
event.add('ad_astra:iron_plates', 'ad_astra:iron_plate')

// Iron Dust
event.removeAll('forge:dusts/iron')
event.add('forge:dusts/iron', 'thermal:iron_dust')

// Gold Dust
event.removeAll('forge:dusts/gold')
event.add('forge:dusts/gold', 'thermal:gold_dust')

// Iron Gear
event.removeAll('forge:gears/iron')
event.add('forge:gears/iron', 'thermal:iron_gear')

// Gold Plate
event.removeAll('forge:plates/gold')
event.add('forge:plates/gold', 'thermal:gold_plate')

// Copper Plate
event.removeAll('forge:plates/copper')
event.add('forge:plates/copper', 'thermal:copper_plate')

// Copper Dust
event.removeAll('forge:dusts/copper')
event.add('forge:dusts/copper', 'thermal:copper_dust')

// Gold Gear
event.removeAll('forge:gears/gold')
event.add('forge:gears/gold', 'thermal:gold_gear')

// Copper Gear
event.removeAll('forge:gears/copper')
event.add('forge:gears/copper', 'thermal:copper_gear')

// Copper Nuggets
event.removeAll('forge:nuggets/copper')
event.add('forge:nuggets/copper', 'thermal:copper_nugget')

// Raw Alu
event.removeAll('forge:raw_materials/aluminum')
event.add('forge:raw_materials/aluminum', 'kubejs:raw_aluminum_ore')

// Cluster Removal
event.remove('forge:raw_materials/copper', 'geolosys:copper_cluster')
event.remove('forge:raw_materials/gold', 'geolosys:gold_cluster')

event.remove('forge:raw_materials/lead', 'geolosys:lead_cluster')
event.remove('forge:raw_materials/iron', 'geolosys:iron_cluster')
event.remove('forge:raw_materials/zinc', 'geolosys:zinc_cluster')
event.remove('forge:raw_materials/uranium', 'geolosys:uranium_cluster')
event.remove('ad_extendra:raw_uranium', 'geolosys:uranium_cluster')
event.remove('forge:raw_materials/tin', 'geolosys:tin_cluster')
event.remove('forge:raw_materials/silver', 'geolosys:silver_cluster')
event.remove('forge:raw_materials/platinum', 'geolosys:platinum_cluster')
event.remove('forge:raw_materials/osmium', 'geolosys:osmium_cluster')
event.remove('forge:raw_materials/nickel', 'geolosys:nickel_cluster')

// Rice
event.removeAll('forge:crops/rice')
event.add('forge:crops/rice', 'farmersdelight:rice')
event.removeAll('forge:seeds/rice')
event.add('forge:seeds/rice', 'farmersdelight:rice')

// Tomato
event.removeAll('forge:crops/tomato')
event.add('forge:crops/tomato', 'farmersdelight:tomato')
event.removeAll('forge:seeds/tomato')
event.add('forge:seeds/rice', 'farmersdelight:tomato_seeds')

// Onion
event.removeAllTagsFrom('thermal:onion_seeds')
event.removeAllTagsFrom('thermal:onion')
event.removeAllTagsFrom('thermal:onion_block')

// Flax
event.removeAll('forge:crops/flax')
event.add('forge:crops/flax', 'supplementaries:flax')
event.removeAll('forge:seeds/flax')
event.add('forge:seeds/flax', 'supplementaries:flax_seeds')
})



ServerEvents.tags('fluid', event => {
// Liquid EXP unification
 event.removeAll('forge:experience')
  event.add('forge:experience', 'mob_grinding_utils:fluid_xp')

 event.removeAll('minecraft:water')
  event.add('minecraft:water', 'minecraft:water')

 event.removeAll('systeams:water')
  event.add('systeams:water', 'minecraft:water')


})