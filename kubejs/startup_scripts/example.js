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
event.create('amber_paste_chunk').displayName("Amber Paste Chunk")
event.create('empowered_rubber').displayName("Empowered Rubber").glow(true)
event.create('mud_ball').displayName("Mud Ball")
event.create('mud_brick').displayName("Mud Brick")
event.create('lapis_plate').displayName("Lapis Plate")
event.create('brass_ingot').displayName("Brass Ingot")
event.create('brass_plate').displayName("Brass Plate")
event.create('crushing_hammer').displayName("Crushing Hammer").unstackable().maxDamage(200)
event.create('hyper_diamond').displayName("Hyper Diamond")
event.create('pulsating_chipset').displayName("Pulsating Chipset")
event.create('pulsating_iron').displayName("Pulsating Iron Ingot")
event.create('duralumin').displayName("Duralumin Ingot")
event.create('duralumin_plate').displayName("Duralumin Plate")
event.create('ancient_rune').displayName("Ancient Rune")
event.create('pulsating_iron_plate').displayName("Pulsating Iron Plate")
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

    event.create('amber_paste')
    .thinTexture(0xFFBF00)
    .bucketColor(0xFFBF00)
    .displayName('Amber Paste')

    event.create('royal_honey')
    .thinTexture(0xE79A3F)
    .bucketColor(0xE79A3F)
    .displayName('Royal Honey')

    event.create('lubricant')
    .thinTexture(0xD3D3D3)
    .bucketColor(0xD3D3D3)
    .displayName('Lubricant')

    event.create('citric_acid')
    .thinTexture(0xf6fbb1)
    .bucketColor(0xf6fbb1)
    .displayName('Citric Acid')

    event.create('molten_pulsating_iron')
    .thickTexture(0x6ee489)
    .bucketColor(0x6ee489)
    .displayName('Molten Pulsating Iron')

    event.create('molten_black_iron')
    .thickTexture(0x232323)
    .bucketColor(0x232323)
    .displayName('Molten Black Iron')

    event.create('molten_duralumin')
    .thickTexture(0xbbd7a9)
    .bucketColor(0xbbd7a9)
    .displayName('Molten Duralumin')



    

})

StartupEvents.registry('block', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('nether_sulfur_ore').displayName("Nether Sulfur Ore").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('nether_ore')
  event.create('nether_black_quartz').displayName("Nether Black Quartz Ore").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('nether_ore')
  event.create('raw_aluminum_block').displayName("Raw Aluminum Block").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('stone')
  event.create('seared_casing').displayName("Seared Casing")
  event.create('impregnated_wood').displayName("Impregnated Wood")
  event.create('red_alloy_block').displayName("Block of Red Alloy").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('metal')
  event.create('mud_bricks').displayName("Small Mud Bricks").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('nether_bricks')
  event.create('double_compressed_cobblestone').displayName("Double Compressed Cobblestone").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('stone')
  event.create('triple_compressed_cobblestone').displayName("Triple Compressed Cobblestone").requiresTool(true).tagBlock('minecraft:mineable/pickaxe').soundType('stone')


  

})


