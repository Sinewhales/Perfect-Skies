ServerEvents.recipes(event => {
// 2 = Artisan Worktable
// 4 = Woodcutter
// 6 = Sawmill

// Oak
event.remove({ id: "quark:tweaks/crafting/slab_to_block" })
event.remove({ id: "projectvibrantjourneys:oak_planks_from_oak_hollow_log" })
event.remove({ id: "minecraft:oak_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:oak_planks")
.requireItemTag('#minecraft:oak_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Spruce
event.remove({ id: "projectvibrantjourneys:spruce_planks_from_spruce_hollow_log" })
event.remove({ id: "minecraft:spruce_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:spruce_planks")
.requireItemTag('#minecraft:spruce_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Birch
event.remove({ id: "minecraft:birch_planks" })
event.remove({ id: "projectvibrantjourneys:birch_planks_from_birch_hollow_log" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:birch_planks")
.requireItemTag('#minecraft:birch_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Jungle
event.remove({ id: "projectvibrantjourneys:jungle_planks_from_jungle_hollow_log" })
event.remove({ id: "minecraft:jungle_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:jungle_planks")
.requireItemTag('#minecraft:jungle_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Acacia
event.remove({ id: "projectvibrantjourneys:acacia_planks_from_acacia_hollow_log" })
event.remove({ id: "minecraft:acacia_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:acacia_planks")
.requireItemTag('#minecraft:acacia_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Dark Oak
event.remove({ id: "minecraft:dark_oak_planks" })
event.remove({ id: "projectvibrantjourneys:dark_oak_planks_from_dark_oak_hollow_log" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:dark_oak_planks")
.requireItemTag('#minecraft:dark_oak_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Mangrove
event.remove({ id: "minecraft:mangrove_planks" })
event.remove({ id: "projectvibrantjourneys:mangrove_planks_from_mangrove_hollow_log" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:mangrove_planks")
.requireItemTag('#minecraft:mangrove_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Cherry
event.remove({ id: "projectvibrantjourneys:cherry_planks_from_cherry_hollow_log" })
event.remove({ id: "minecraft:cherry_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:cherry_planks")
.requireItemTag('#minecraft:cherry_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Crimson
event.remove({ id: "minecraft:crimson_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:crimson_planks")
.requireItemTag('#minecraft:crimson_stems', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Warped
event.remove({ id: "minecraft:warped_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "2x minecraft:warped_planks")
.requireItemTag('#minecraft:warped_stems', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Bamboo
event.remove({ id: "minecraft:bamboo_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", "minecraft:bamboo_planks")
.requireItemTag('#minecraft:bamboo_blocks', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Ad Astra
// Aeronos
event.remove({ id: "ad_astra:aeronos_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x ad_astra:aeronos_planks')
.requireItemTag('#ad_astra:aeronos_caps', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Strophar
event.remove({ id: "ad_astra:strophar_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x ad_astra:strophar_planks')
.requireItemTag('#ad_astra:strophar_caps', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Glacian
event.remove({ id: "ad_astra:glacian_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x ad_astra:glacian_planks')
.requireItemTag('#ad_astra:glacian_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Alex Caves
// Pewen
event.remove({ id: "alexscaves:pewen_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x alexscaves:pewen_planks')
.requireItemTag('#alexscaves:pewen_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Thornwood
event.remove({ id: "alexscaves:thornwood_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x alexscaves:thornwood_planks')
.requireItemTag('#alexscaves:thornwood_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Blue Skies
// Bluebright
event.remove({ id: "blue_skies:bluebright_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:bluebright_planks')
.requireItemTag('#blue_skies:logs/bluebright', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Starlit
event.remove({ id: "blue_skies:starlit_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:starlit_planks')
.requireItemTag('#blue_skies:logs/starlit', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Frostbright
event.remove({ id: "blue_skies:frostbright_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:frostbright_planks')
.requireItemTag('#blue_skies:logs/frostbright', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Comet
event.remove({ id: "blue_skies:comet_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:comet_planks')
.requireItemTag('#blue_skies:logs/comet', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Lunar
event.remove({ id: "blue_skies:lunar_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:lunar_planks')
.requireItemTag('#blue_skies:logs/lunar', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Maple
event.remove({ id: "blue_skies:maple_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:maple_planks')
.requireItemTag('#blue_skies:logs/maple', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")


// Crystallized
event.remove({ id: "blue_skies:crystallized_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x blue_skies:crystallized_planks')
.requireItemTag('#blue_skies:logs/crystallized', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Deep Aether
// Roseroot
event.remove({ id: "deep_aether:roseroot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:roseroot_planks')
.requireItemTag('#deep_aether:roseroot_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Yagroot
event.remove({ id: "deep_aether:yagroot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:yagroot_planks')
.requireItemTag('#deep_aether:yagroot_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Cruderoot
event.remove({ id: "deep_aether:cruderoot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:cruderoot_planks')
.requireItemTag('#deep_aether:cruderoot_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Conberry
event.remove({ id: "deep_aether:conberry_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:conberry_planks')
.requireItemTag('#deep_aether:conberry_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Sunroot
event.remove({ id: "deep_aether:sunroot_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x deep_aether:sunroot_planks')
.requireItemTag('#deep_aether:sunroot_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

// Evilcraft
// Undead
event.remove({ id: "evilcraft:crafting/undead_planks" })

event.recipes.custommachinery.custom_craft("kubejs:artistan_worktable", '2x evilcraft:undead_planks')
.requireItemTag('#evilcraft:undead_logs', 1, "input5").damageItemTag('#cb_microblock:tools/saw', 1, "tool")

})
