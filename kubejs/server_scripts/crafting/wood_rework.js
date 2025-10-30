ServerEvents.recipes(event => {
// 2 = Artisan Worktable
// 4 = Woodcutter
// 6 = Sawmill

// Oak
event.remove({ id: "quark:tweaks/crafting/slab_to_block" })
event.remove({ id: "projectvibrantjourneys:oak_planks_from_oak_hollow_log" })
event.remove({ id: "minecraft:oak_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:oak_planks")
.requireItemTag('#minecraft:oak_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Spruce
event.remove({ id: "projectvibrantjourneys:spruce_planks_from_spruce_hollow_log" })
event.remove({ id: "minecraft:spruce_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:spruce_planks")
.requireItemTag('#minecraft:spruce_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Birch
event.remove({ id: "minecraft:birch_planks" })
event.remove({ id: "projectvibrantjourneys:birch_planks_from_birch_hollow_log" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:birch_planks")
.requireItemTag('#minecraft:birch_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Jungle
event.remove({ id: "projectvibrantjourneys:jungle_planks_from_jungle_hollow_log" })
event.remove({ id: "minecraft:jungle_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:jungle_planks")
.requireItemTag('#minecraft:jungle_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Acacia
event.remove({ id: "projectvibrantjourneys:acacia_planks_from_acacia_hollow_log" })
event.remove({ id: "minecraft:acacia_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:acacia_planks")
.requireItemTag('#minecraft:acacia_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Dark Oak
event.remove({ id: "minecraft:dark_oak_planks" })
event.remove({ id: "projectvibrantjourneys:dark_oak_planks_from_dark_oak_hollow_log" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:dark_oak_planks")
.requireItemTag('#minecraft:dark_oak_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Mangrove
event.remove({ id: "minecraft:mangrove_planks" })
event.remove({ id: "projectvibrantjourneys:mangrove_planks_from_mangrove_hollow_log" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:mangrove_planks")
.requireItemTag('#minecraft:mangrove_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Cherry
event.remove({ id: "projectvibrantjourneys:cherry_planks_from_cherry_hollow_log" })
event.remove({ id: "minecraft:cherry_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:cherry_planks")
.requireItemTag('#minecraft:cherry_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Crimson
event.remove({ id: "minecraft:crimson_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:crimson_planks")
.requireItemTag('#minecraft:crimson_stems', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Warped
event.remove({ id: "minecraft:warped_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:warped_planks")
.requireItemTag('#minecraft:warped_stems', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Bamboo
event.remove({ id: "minecraft:bamboo_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "minecraft:bamboo_planks")
.requireItemTag('#minecraft:bamboo_blocks', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Ad Astra
// Aeronos
event.remove({ id: "ad_astra:aeronos_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x ad_astra:aeronos_planks')
.requireItemTag('#ad_astra:aeronos_caps', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Strophar
event.remove({ id: "ad_astra:strophar_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x ad_astra:strophar_planks')
.requireItemTag('#ad_astra:strophar_caps', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Glacian
event.remove({ id: "ad_astra:glacian_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x ad_astra:glacian_planks')
.requireItemTag('#ad_astra:glacian_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Alex Caves
// Pewen
event.remove({ id: "alexscaves:pewen_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x alexscaves:pewen_planks')
.requireItemTag('#alexscaves:pewen_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Thornwood
event.remove({ id: "alexscaves:thornwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x alexscaves:thornwood_planks')
.requireItemTag('#alexscaves:thornwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Blue Skies
// Bluebright
event.remove({ id: "blue_skies:bluebright_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:bluebright_planks')
.requireItemTag('#blue_skies:logs/bluebright', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Starlit
event.remove({ id: "blue_skies:starlit_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:starlit_planks')
.requireItemTag('#blue_skies:logs/starlit', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Frostbright
event.remove({ id: "blue_skies:frostbright_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:frostbright_planks')
.requireItemTag('#blue_skies:logs/frostbright', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Comet
event.remove({ id: "blue_skies:comet_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:comet_planks')
.requireItemTag('#blue_skies:logs/comet', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Lunar
event.remove({ id: "blue_skies:lunar_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:lunar_planks')
.requireItemTag('#blue_skies:logs/lunar', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Maple
event.remove({ id: "blue_skies:maple_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:maple_planks')
.requireItemTag('#blue_skies:logs/maple', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")


// Crystallized
event.remove({ id: "blue_skies:crystallized_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:crystallized_planks')
.requireItemTag('#blue_skies:logs/crystallized', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Deep Aether
// Roseroot
event.remove({ id: "deep_aether:roseroot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:roseroot_planks')
.requireItemTag('#deep_aether:roseroot_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Yagroot
event.remove({ id: "deep_aether:yagroot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:yagroot_planks')
.requireItemTag('#deep_aether:yagroot_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Cruderoot
event.remove({ id: "deep_aether:cruderoot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:cruderoot_planks')
.requireItemTag('#deep_aether:cruderoot_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Conberry
event.remove({ id: "deep_aether:conberry_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:conberry_planks')
.requireItemTag('#deep_aether:conberry_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Sunroot
event.remove({ id: "deep_aether:sunroot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:sunroot_planks')
.requireItemTag('#deep_aether:sunroot_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Evilcraft
// Undead
event.remove({ id: "evilcraft:crafting/undead_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x evilcraft:undead_planks')
.requireItemTag('#evilcraft:undead_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Forestry
// Larch
event.remove({ id: "forestry:larch_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:larch_planks')
.requireItemTag('#forestry:larch_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Larch Fireproof
event.remove({ id: "forestry:larch_fireproof_planks" })

// Teak
event.remove({ id: "forestry:teak_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:teak_planks')
.requireItemTag('#forestry:teak_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Teak Fireproof
event.remove({ id: "forestry:teak_fireproof_planks" })

// Desert Acacia
event.remove({ id: "forestry:acacia_desert_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:acacia_desert_planks')
.requireItemTag('#forestry:acacia_desert_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Desert Acacia Fireproof
event.remove({ id: "forestry:acacia_desert_fireproof_planks" })

// Lime 
event.remove({ id: "forestry:lime_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:lime_planks')
.requireItemTag('#forestry:lime_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")
// Lime Fireproof
event.remove({ id: "forestry:lime_fireproof_planks" })

// Chestnut
event.remove({ id: "forestry:chestnut_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:chestnut_planks')
.requireItemTag('#forestry:chestnut_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Chestnut Fireproof
event.remove({ id: "forestry:chestnut_fireproof_planks" })

// Wenge
event.remove({ id: "forestry:wenge_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:wenge_planks')
.requireItemTag('#forestry:wenge_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Wenge Fireproof
event.remove({ id: "forestry:wenge_fireproof_planks" })

// Baobab
event.remove({ id: "forestry:baobab_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:baobab_planks')
.requireItemTag('#forestry:baobab_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Baobab Fireproof
event.remove({ id: "forestry:baobab_fireproof_planks" })

// Sequoia
event.remove({ id: "forestry:sequoia_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:sequoia_planks')
.requireItemTag('#forestry:sequoia_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Sequoia Fireproof
event.remove({ id: "forestry:sequoia_fireproof_planks" })

// Kapok
event.remove({ id: "forestry:kapok_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:kapok_planks')
.requireItemTag('#forestry:kapok_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Kapok Fireproof
event.remove({ id: "forestry:kapok_fireproof_planks" })

// Ebony
event.remove({ id: "forestry:ebony_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:ebony_planks')
.requireItemTag('#forestry:ebony_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Ebony Fireproof
event.remove({ id: "forestry:ebony_fireproof_planks" })

// Mahogany
event.remove({ id: "forestry:mahogany_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:mahogany_planks')
.requireItemTag('#forestry:mahogany_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Mahogany Fireproof
event.remove({ id: "forestry:mahogany_fireproof_planks" })

// Balsa
event.remove({ id: "forestry:balsa_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:balsa_planks')
.requireItemTag('#forestry:balsa_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Balsa Fireproof
event.remove({ id: "forestry:balsa_fireproof_planks" })

// Willow
event.remove({ id: "forestry:willow_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:willow_planks')
.requireItemTag('#forestry:willow_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Willow Fireproof
event.remove({ id: "forestry:willow_fireproof_planks" })

// Walnut 
event.remove({ id: "forestry:walnut_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:walnut_planks')
.requireItemTag('#forestry:walnut_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Walnut Fireproof
event.remove({ id: "forestry:walnut_fireproof_planks" })

// Greenheart
event.remove({ id: "forestry:greenheart_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:greenheart_planks')
.requireItemTag('#forestry:greenheart_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Greenheart Fireproof
event.remove({ id: "forestry:greenheart_fireproof_planks" })

// Hill Cherry
event.remove({ id: "forestry:hill_cherry_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:hill_cherry_planks')
.requireItemTag('#forestry:hill_cherry_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Hill Cherry
event.remove({ id: "forestry:hill_cherry_fireproof_planks" })

// Mahoe
event.remove({ id: "forestry:mahoe_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:mahoe_planks')
.requireItemTag('#forestry:mahoe_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Mahoe Fireproof
event.remove({ id: "forestry:mahoe_fireproof_planks" })

// Poplar
event.remove({ id: "forestry:poplar_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:poplar_planks')
.requireItemTag('#forestry:poplar_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Poplar Fireproof
event.remove({ id: "forestry:poplar_fireproof_planks" })

// Palm
event.remove({ id: "forestry:palm_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:palm_planks')
.requireItemTag('#forestry:palm_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Palm Fireproof
event.remove({ id: "forestry:palm_fireproof_planks" })

// Papaya
event.remove({ id: "forestry:papaya_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:papaya_planks')
.requireItemTag('#forestry:papaya_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Papaya Fireproof
event.remove({ id: "forestry:papaya_fireproof_planks" })

// Pine
event.remove({ id: "forestry:pine_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:pine_planks')
.requireItemTag('#forestry:pine_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Pine Fireproof
event.remove({ id: "forestry:pine_fireproof_planks" })

// Plum
event.remove({ id: "forestry:plum_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:plum_planks')
.requireItemTag('#forestry:plum_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Plum Fireproof
event.remove({ id: "forestry:plum_fireproof_planks" })

// Maple
event.remove({ id: "forestry:maple_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:maple_planks')
.requireItemTag('#forestry:maple_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Maple Fireproof
event.remove({ id: "forestry:maple_fireproof_planks" })

// Citrus
event.remove({ id: "forestry:citrus_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:citrus_planks')
.requireItemTag('#forestry:citrus_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Citrus Fireproof
event.remove({ id: "forestry:citrus_fireproof_planks" })

// Giant Sequoia
event.remove({ id: "forestry:giganteum_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:giganteum_planks')
.requireItemTag('#forestry:giganteum_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Giant Sequoia Fireproof
event.remove({ id: "forestry:giganteum_fireproof_planks" })

// IPE
event.remove({ id: "forestry:ipe_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:ipe_planks')
.requireItemTag('#forestry:ipe_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// IPE Fireproof
event.remove({ id: "forestry:ipe_fireproof_planks" })

// Padauk
event.remove({ id: "forestry:padauk_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:padauk_planks')
.requireItemTag('#forestry:padauk_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Padauk Fireproof
event.remove({ id: "forestry:padauk_fireproof_planks" })

// Cocobolo
event.remove({ id: "forestry:cocobolo_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:cocobolo_planks')
.requireItemTag('#forestry:cocobolo_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Cocobolo Fireproof
event.remove({ id: "forestry:cocobolo_fireproof_planks" })

// Zebrawood
event.remove({ id: "forestry:zebrawood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x forestry:zebrawood_planks')
.requireItemTag('#forestry:zebrawood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Zebrawood Fireproof
event.remove({ id: "forestry:zebrawood_fireproof_planks" })

// Vanilla Fireproof
event.remove({ id: "forestry:oak_fireproof_planks" })
event.remove({ id: "forestry:spruce_fireproof_planks" })
event.remove({ id: "forestry:birch_fireproof_planks" })
event.remove({ id: "forestry:jungle_fireproof_planks" })
event.remove({ id: "forestry:acacia_fireproof_planks" })
event.remove({ id: "forestry:dark_oak_fireproof_planks" })
event.remove({ id: "forestry:cherry_fireproof_planks" })

// Integrated Dynamics
// Menril
event.remove({ id: "integrateddynamics:crafting/menril_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x integrateddynamics:menril_planks')
.requireItemTag('#integrateddynamics:menril_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Solar Craft
// Runic
event.remove({ id: "solarcraft:runic_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x solarcraft:runic_planks')
.requireItem('solarcraft:runic_log').damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Radiant
event.remove({ id: "solarcraft:radiant_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x solarcraft:radiant_planks')
.requireItem('solarcraft:radiant_log').damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Aether
// Skyroot
event.remove({ id: "aether:skyroot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x aether:skyroot_planks')
.requireItemTag('#aether:crafts_skyroot_planks', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Undergarden
// Smogstem
event.remove({ id: "undergarden:smogstem_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x undergarden:smogstem_planks')
.requireItemTag('#undergarden:smogstem_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Wigglewood
event.remove({ id: "undergarden:wigglewood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x undergarden:wigglewood_planks')
.requireItemTag('#undergarden:wigglewood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Wigglewood
event.remove({ id: "undergarden:grongle_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x undergarden:grongle_planks')
.requireItemTag('#undergarden:grongle_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Thermal
// Rubberwood 
event.remove({ id: "thermal:rubberwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x thermal:rubberwood_planks')
.requireItemTag('#forge:rubberwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Botania
// Livingwood
event.remove({ id: "botania:livingwood_planks" })
event.remove({ id: "botania:slab_recombine/livingwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x botania:livingwood_planks')
.requireItemTag('#botania:livingwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Dreamwood
event.remove({ id: "botania:dreamwood_planks" })
event.remove({ id: "botania:slab_recombine/dreamwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x botania:dreamwood_planks')
.requireItemTag('#botania:dreamwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Quark
// Ashen
event.remove({ id: "quark:world/crafting/woodsets/ancient/planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x quark:ancient_planks')
.requireItemTag('#quark:ancient_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Azalea
event.remove({ id: "quark:world/crafting/woodsets/azalea/planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x quark:azalea_planks')
.requireItemTag('#quark:azalea_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Trumpet
event.remove({ id: "quark:world/crafting/woodsets/blossom/planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x quark:blossom_planks')
.requireItemTag('#quark:blossom_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Architect Palette
// Twisted
event.remove({ id: "architects_palette:twisted_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x architects_palette:twisted_planks')
.requireItemTag('#architects_palette:twisted_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Twilight Forest
// Twilight Oak
event.remove({ id: "twilightforest:wood/twilight_oak_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:twilight_oak_planks')
.requireItemTag('#twilightforest:twilight_oak_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Canopy
event.remove({ id: "twilightforest:wood/canopy_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:canopy_planks')
.requireItemTag('#twilightforest:canopy_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Mangrove
event.remove({ id: "twilightforest:wood/mangrove_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:mangrove_planks')
.requireItemTag('#twilightforest:mangrove_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Darkwood
event.remove({ id: "twilightforest:wood/dark_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:dark_planks')
.requireItemTag('#twilightforest:darkwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Timewood
event.remove({ id: "twilightforest:wood/time_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:time_planks')
.requireItemTag('#twilightforest:timewood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Transwood
event.remove({ id: "twilightforest:wood/transformation_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:transformation_planks')
.requireItemTag('#twilightforest:transwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Minewood
event.remove({ id: "twilightforest:wood/mining_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:mining_planks')
.requireItemTag('#twilightforest:mining_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Sortingwood
event.remove({ id: "twilightforest:wood/sorting_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x twilightforest:sorting_planks')
.requireItemTag('#twilightforest:sortwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Pale
event.remove({ id: "palegardenbackport:pale_oak_planks_from_log" })
event.remove({ id: "palegardenbackport:pale_oak_planks_from_stripped_wood" })
event.remove({ id: "palegardenbackport:pale_oak_planks_from_stripped_log" })
event.remove({ id: "palegardenbackport:pale_oak_planks_from_wood" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x palegardenbackport:pale_oak_planks')
.requireItemTag('#palegardenbackport:pale_oak_log_blocks', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Traverse
// Fir
event.remove({ id: "traverse:fir_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x traverse:fir_planks')
.requireItemTag('#traverse:fir_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Jaden
// Claret
event.remove({ id: "netherexp:claret_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "netherexp:claret_planks")
.requireItemTag('#netherexp:claret_stems', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Tropicraft
// Mahogany
event.remove({ id: "tropicraft:mahogany_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x tropicraft:mahogany_planks")
.requireItem('tropicraft:mahogany_log').damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Palm
event.remove({ id: "tropicraft:palm_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x tropicraft:palm_planks")
.requireItem('tropicraft:palm_log').damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Mangrove
event.remove({ id: "tropicraft:mangrove_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x tropicraft:mangrove_planks")
.requireItemTag('#tropicraft:mangrove_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Terrestria
// Cypress
event.remove({ id: "terrestria:cypress_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:cypress_planks")
.requireItemTag('#terrestria:cypress_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Hemlock
event.remove({ id: "terrestria:hemlock_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:hemlock_planks")
.requireItemTag('#terrestria:hemlock_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Japanese Maple
event.remove({ id: "terrestria:japanese_maple_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:japanese_maple_planks")
.requireItemTag('#terrestria:japanese_maple_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")


// Rainbow Eucalyptus
event.remove({ id: "terrestria:rainbow_eucalyptus_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:rainbow_eucalyptus_planks")
.requireItemTag('#terrestria:rainbow_eucalyptus_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Redwood
event.remove({ id: "terrestria:redwood_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:redwood_planks")
.requireItemTag('#terrestria:redwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Rubber Wood
event.remove({ id: "terrestria:rubber_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:rubber_planks")
.requireItemTag('#terrestria:rubber_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Sakura
event.remove({ id: "terrestria:sakura_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:sakura_planks")
.requireItemTag('#terrestria:sakura_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Willow
event.remove({ id: "terrestria:willow_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:willow_planks")
.requireItemTag('#terrestria:willow_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Yucca
event.remove({ id: "terrestria:yucca_palm_planks" })
event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x terrestria:yucca_palm_planks")
.requireItemTag('#terrestria:yucca_palm_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Hexerei
// Mahogany
event.remove({ id: "hexerei:mahogany_planks_from_stripped_wood" })
event.remove({ id: "hexerei:mahogany_planks_from_stripped_log" })
event.remove({ id: "hexerei:mahogany_planks" })
event.remove({ id: "hexerei:mahogany_planks_from_wood" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x hexerei:mahogany_planks")
.requireItemTag('#hexerei:mahogany_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Willow
event.remove({ id: "hexerei:willow_planks_from_wood" })
event.remove({ id: "hexerei:willow_planks_from_stripped_log" })
event.remove({ id: "hexerei:willow_planks" })
event.remove({ id: "hexerei:willow_planks_from_stripped_wood" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x hexerei:willow_planks")
.requireItemTag('#hexerei:willow_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Witch Hazel
event.remove({ id: "hexerei:witch_hazel_planks_from_stripped_wood" })
event.remove({ id: "hexerei:witch_hazel_planks_from_wood" })
event.remove({ id: "hexerei:witch_hazel_planks" })
event.remove({ id: "hexerei:witch_hazel_planks_from_stripped_log" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x hexerei:witch_hazel_planks")
.requireItemTag('#hexerei:witch_hazel_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Tinker
// Greenheart
event.remove({ id: "tconstruct:world/wood/greenheart/planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x tconstruct:greenheart_planks")
.requireItemTag('#tconstruct:greenheart_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Skyroot
event.remove({ id: "tconstruct:world/wood/skyroot/planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x tconstruct:skyroot_planks")
.requireItemTag('#tconstruct:skyroot_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Bloodshroom
event.remove({ id: "tconstruct:world/wood/bloodshroom/planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x tconstruct:bloodshroom_planks")
.requireItemTag('#tconstruct:bloodshroom_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Enderbark
event.remove({ id: "tconstruct:world/wood/enderbark/planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x tconstruct:enderbark_planks")
.requireItemTag('#tconstruct:enderbark_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Ars
event.remove({ id: "ars_nouveau:archwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x ars_nouveau:archwood_planks")
.requireItemTag('#forge:logs/archwood', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Forbidden
event.remove({ id: "forbidden_arcanus:fungyss_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x forbidden_arcanus:fungyss_planks")
.requireItemTag('#forbidden_arcanus:fungyss_stems', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Aurum
event.remove({ id: "forbidden_arcanus:aurum_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x forbidden_arcanus:aurum_planks")
.requireItemTag('#forbidden_arcanus:mysterywood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Edelwood
event.remove({ id: "forbidden_arcanus:edelwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x forbidden_arcanus:edelwood_planks")
.requireItemTag('#forbidden_arcanus:edelwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Malum
// Soulwood
event.remove({ id: "malum:soulwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x malum:soulwood_planks")
.requireItemTag('#malum:soulwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Runewood
event.remove({ id: "malum:runewood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x malum:runewood_planks")
.requireItemTag('#malum:runewood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Environmental
// Willow
event.remove({ id: "environmental:willow_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x environmental:willow_planks")
.requireItemTag('#environmental:willow_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Pine
event.remove({ id: "environmental:pine_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x environmental:pine_planks")
.requireItemTag('#environmental:pine_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Plum
event.remove({ id: "environmental:plum_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x environmental:plum_planks")
.requireItemTag('#environmental:plum_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Wisteria
event.remove({ id: "environmental:wisteria_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x environmental:wisteria_planks")
.requireItemTag('#environmental:wisteria_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// End Phantasm
event.remove({ id: "phantasm:pream_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x phantasm:pream_planks")
.requireItemTag('#phantasm:pream_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Illwood
event.remove({ id: "eidolon:illwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x eidolon:illwood_planks")
.requireItemTag('#eidolon:illwood_logs', 1).damageItemTag('#cb_microblock:tools/saw', 1, "tool")

})


