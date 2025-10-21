StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('plate_hammer').displayName("Plate Hammer").unstackable().maxDamage(50)
    event.create('obsidian_plate').displayName("Obsidian Plate")
event.create('redstone_plate').displayName("Redstone Plate")
event.create('black_iron_gear').displayName("Black Iron Gear")
event.create('red_alloy_plate').displayName("Red Alloy Plate")
event.create('wood_sheet').displayName("Wood Sheet")
event.create('rubber_sulfur').displayName("Sulfuric Rubber")
event.create('electrotine_plate').displayName("Electrotine Plate")
event.create('electrotine_gear').displayName("Electrotine Gear")
event.create('heat_coil').displayName("Heating Coil")
event.create('glowstone_crystal').displayName("Glowstone Crystal")
event.create('electrotine_crystal').displayName("Electrotine Crystal")
event.create('pyrotheum').displayName("Pyrotheum Dust")
event.create('purple_neodymium').displayName("Purple Neodymium Ingot")
event.create('purple_neodymium_plate').displayName("Purple Neodymium Plate")
event.create('purple_neodymium_gear').displayName("Purple Neodymium Gear")
event.create('tanned_leather').displayName("Tanned Leather")
event.create('scanner_battery').displayName("Scanner Battery")
event.create('diamond_plate').displayName("Diamond Plate")
event.create('cactus_juice').displayName("Cactus Juice")
event.create('inactive_luminessence').displayName("Inert Luminessence")
event.create('wax_chunk').displayName("Wax Chunk")
event.create('raw_aluminum_ore').displayName("Raw Aluminum")
event.create('ink_egg').displayName("Ink Egg")
event.create('seed_bag').displayName("Bundle of Seeds")
event.create('heart_of_emerald').displayName("Heart of Emerald")
event.create('cotton_cloth').displayName("Cotton Cloth")
event.create('synthethic_leather').displayName("Synthethic Leather")
// Raw Ore Block
// Aluminum Dust

})

StartupEvents.registry('fluid', event => {

                 
  // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
  event.create('black_dye')
    .thinTexture(0x232323)
    .bucketColor(0x232323)
    .displayName('Ink')

    event.create('blazing_pyrotheum')
    .thickTexture(0xeea720)
    .bucketColor(0xeea720)
    .displayName('Blazing Pyrotheum')

        event.create('nature_extract')
    .thinTexture(0xbfff00)
    .bucketColor(0xbfff00)
    .displayName('Nature Extract')

    event.create('wax')
    .thinTexture(0xf3e3c2)
    .bucketColor(0xf3e3c2)
    .displayName('Wax')



    

})

StartupEvents.registry('block', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('nether_sulfur_ore').displayName("Nether Sulfur Ore").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('nether_ore')
  event.create('nether_black_quartz').displayName("Nether Black Quartz Ore").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('nether_ore')
  event.create('raw_aluminum_block').displayName("Raw Aluminum Block").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('stone')
  event.create('seared_casing').displayName("Seared Casing")

})


