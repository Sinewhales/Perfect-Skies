ServerEvents.tags('block', event => {
// Cactus Should Grow in Spring
   event.add('sereneseasons:spring_crops', 'minecraft:cactus')
   event.add('forge:ores/aluminum', 'kubejs:aluminium_ore')
event.add('forge:ores/aluminum', 'kubejs:deepslate_aluminium_ore')
event.add('forge:ores', 'kubejs:aluminium_ore')
event.add('forge:ores', 'kubejs:deepslate_aluminium_ore')

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


// Alu Ore
event.add('forge:ores/aluminum', 'kubejs:aluminium_ore')
event.add('forge:ores/aluminum', 'kubejs:deepslate_aluminium_ore')
event.add('forge:ores', 'kubejs:aluminium_ore')
event.add('forge:ores', 'kubejs:deepslate_aluminium_ore')

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

// Rope
event.removeAll('forge:rope')
event.add('forge:rope', 'farmersdelight:rope')

event.removeAll('supplementaries:ropes')
event.add('supplementaries:ropes', 'farmersdelight:rope')

// Steel
event.removeAll('forge:ingots/steel')
event.add('forge:ingots/steel', 'ad_astra:steel_ingot')

// Aluminum
event.removeAll('forge:ingots/aluminum')
event.add('forge:ingots/aluminum', 'kubejs:aluminum_ingot')
event.removeAllTagsFrom('nuclearcraft:aluminum_ingot')

// Nuggets
event.removeAllTagsFrom('nuclearcraft:aluminum_nugget')
event.add('forge:nuggets/aluminum', 'kubejs:aluminum_nugget')
event.add('agricraft:nuggets/aluminium', 'kubejs:aluminum_nugget')
event.add('forge:nuggets', 'kubejs:aluminum_nugget')
event.removeAllTagsFrom('chemlib:aluminum_nugget')

// Dust
event.removeAllTagsFrom('nuclearcraft:aluminum_dust')
event.add('forge:dusts/aluminium', 'kubejs:aluminum_dust')
event.add('forge:dusts/aluminum', 'kubejs:aluminum_dust')
event.add('forge:dusts', 'kubejs:aluminum_dust')
event.removeAllTagsFrom('chemlib:aluminum_dust')

// Block
event.removeAllTagsFrom('nuclearcraft:aluminum_block')
event.removeAllTagsFrom('chemlib:aluminum_metal_block')
event.add('forge:storage_blocks/aluminum', 'kubejs:aluminum_block')
event.add('forge:storage_blocks', 'kubejs:aluminum_block')

// Plate
event.removeAllTagsFrom('chemlib:aluminum_plate')
event.add('forge:plates/aluminum', 'kubejs:aluminum_plate')
event.add('forge:plates', 'kubejs:aluminum_plate')
// Paper Source
event.add('perfectskies:paper_source', 'farmersdelight:rice')
event.add('perfectskies:paper_source', 'rusticdelight:cotton_boll')
event.add('perfectskies:paper_source', 'minecraft:sugar_cane')

// Hammer
event.add('perfectskies:hammer', 'kubejs:plate_hammer')
event.add('perfectskies:hammer', 'kubejs:crushing_hammer')

// Vat
event.add('oreberriesreplanted:vat', ['oreberriesreplanted:oak_vat', 'oreberriesreplanted:spruce_vat', 'oreberriesreplanted:birch_vat', 'oreberriesreplanted:jungle_vat', 'oreberriesreplanted:acacia_vat', 'oreberriesreplanted:dark_oak_vat', 'oreberriesreplanted:mangrove_vat', 'oreberriesreplanted:cherry_vat', 'oreberriesreplanted:warped_vat', 'oreberriesreplanted:crimson_vat'])

// Hexerei Mahogany
event.add('hexerei:mahogany_logs', ['hexerei:mahogany_log', 'hexerei:mahogany_wood', 'hexerei:stripped_mahogany_log', 'hexerei:stripped_mahogany_wood'])

// Hexerei Willow
event.add('hexerei:willow_logs', ['hexerei:willow_log', 'hexerei:willow_wood', 'hexerei:stripped_willow_log', 'hexerei:stripped_willow_wood'])

// Hexerei Witch Hazel
event.add('hexerei:witch_hazel_logs', ['hexerei:witch_hazel_log', 'hexerei:witch_hazel_wood', 'hexerei:stripped_witch_hazel_log', 'hexerei:stripped_witch_hazel_wood'])

// Oreberries
event.add('oreberriesreplanted:oreberries_bush', ['oreberriesreplanted:iron_oreberry_bush', 'oreberriesreplanted:gold_oreberry_bush', 'oreberriesreplanted:copper_oreberry_bush', 'oreberriesreplanted:tin_oreberry_bush', 'oreberriesreplanted:aluminum_oreberry_bush', 'oreberriesreplanted:nickel_oreberry_bush', 'oreberriesreplanted:silver_oreberry_bush', 'oreberriesreplanted:essence_berry_bush'])

// Stone that can be smelted
event.add('perfectskies:ore_stones', ['minecraft:andesite', 'minecraft:granite', 'minecraft:diorite', 'quark:shale', 'quark:limestone', 'quark:jasper'])

// Cobalt Dust
event.removeAll('forge:dusts/cobalt')
event.add('forge:dusts/cobalt', 'kubejs:cobalt_dust')
event.add('forge:dusts', 'kubejs:cobalt_dust')
event.removeAllTagsFrom('nuclearcraft:cobalt_dust')
event.removeAllTagsFrom('chemlib:cobalt_dust')

// Cobalt
event.removeAllTagsFrom('chemlib:cobalt_ingot')
event.removeAllTagsFrom('nuclearcraft:cobalt_ingot')

// Cobalt Nuggets
event.removeAllTagsFrom('chemlib:cobalt_nugget')
event.removeAllTagsFrom('nuclearcraft:cobalt_nugget')

// Cobalt Block
event.removeAllTagsFrom('nuclearcraft:cobalt_block')
event.removeAllTagsFrom('chemlib:cobalt_metal_block')

// Rotten Leather
event.remove('forge:leather', 'forbidden_arcanus:rotten_leather')
event.remove('agricraft:leather', 'forbidden_arcanus:rotten_leather')
// Vat Wood Fix

event.removeAll('perfectskies:nonvanilla_planks')

const blacklist = ['minecraft']
const planks = event.get('minecraft:planks').getObjectIds();

const moddedplanks = planks.filter((plank) => {
    const name = Item.of(plank).getId()
    for (const mod of blacklist) {
      if (name.includes(mod)) return false;
    }
    return true;
  })

moddedplanks.forEach(plank => {
    event.add('perfectskies:nonvanilla_planks', plank)
    })

event.removeAll('perfectskies:nonvanilla_slabs')

const slabs = event.get('minecraft:slabs').getObjectIds();

const moddedslabs = slabs.filter((slab) => {
    const nameslab = Item.of(slab).getId()
    for (const mod of blacklist) {
      if (nameslab.includes(mod)) return false;
    }
    return true;
  })

moddedslabs.forEach(slab => {
    event.add('perfectskies:nonvanilla_slabs', slab)
    })
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