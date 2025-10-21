LootJS.modifiers((event) => {
  // Remove Default Custom Ores
    event.addBlockLootModifier("kubejs:nether_sulfur_ore").removeLoot("kubejs:nether_sulfur_ore")        
      event.addBlockLootModifier("kubejs:nether_black_quartz").removeLoot("kubejs:nether_black_quartz")   
      
  // Grass
  event.addBlockLootModifier("minecraft:grass").removeLoot(Ingredient.all).randomChance(0.4).addLoot(Item.of('lootbags:loot_bag', '{Color:13882323,Loot:"lootbags:kjs/a93e9hs1ns87kfthowfa40cqh",Name:"Seed Bag",Type:"COMMON"}'))
  event.addBlockLootModifier("minecraft:tall_grass").removeLoot(Ingredient.all).randomChance(0.4).addLoot(Item.of('lootbags:loot_bag', '{Color:13882323,Loot:"lootbags:kjs/a93e9hs1ns87kfthowfa40cqh",Name:"Seed Bag",Type:"COMMON"}'))
  event.addBlockLootModifier("minecraft:fern").removeLoot(Ingredient.all).randomChance(0.4).addLoot(Item.of('lootbags:loot_bag', '{Color:13882323,Loot:"lootbags:kjs/a93e9hs1ns87kfthowfa40cqh",Name:"Seed Bag",Type:"COMMON"}'))

  event.addBlockLootModifier("minecraft:grass").randomChance(0.7).matchMainHand(Item.of('#farmersdelight:tools/knives').ignoreNBT()).addLoot(Item.of('farmersdelight:straw'))
  event.addBlockLootModifier("minecraft:tall_grass").randomChance(0.7).matchMainHand(Item.of('#farmersdelight:tools/knives').ignoreNBT()).addLoot(Item.of('farmersdelight:straw'))
  event.addBlockLootModifier("minecraft:fern").randomChance(0.7).matchMainHand(Item.of('#farmersdelight:tools/knives').ignoreNBT()).addLoot(Item.of('farmersdelight:straw'))
// Copper Nugget Unification

    event
        .addEntityLootModifier("iceandfire:stymphalian_bird").replaceLoot('iceandfire:copper_nugget', 'thermal:copper_nugget')

// Heart of Emerald
	event.addEntityLootModifier("minecraft:wandering_trader").addLoot('kubejs:heart_of_emerald').limitCount([0, 1])
	event.addEntityLootModifier("minecraft:villager").randomChance(0.2).addLoot('kubejs:heart_of_emerald').limitCount([0, 1])


// Inferium in Dungeons
	event.addLootTableModifier("chests/abandoned_mineshaft").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/buried_treasure").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/desert_pyramid").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/igloo_chest").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/jungle_temple").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/shipwreck_treasure").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/shipwreck_supply").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/simple_dungeon").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/village/village_desert_house").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/village/village_plains_house").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/village/village_savanna_house").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/village/village_snowy_house").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/village/village_taiga_house").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/village/village_toolsmith").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])
	event.addLootTableModifier("chests/village/village_weaponsmith").randomChance(0.3).addLoot('mysticalagriculture:inferium_essence').limitCount([1, 7], [5, 9])

// Evilcraft Tweaks
event.addLootTableModifier("chests/village/village_cartographer").removeLoot("@rftoolsdim")
event.addLootTableModifier("chests/village/village_plains_house").removeLoot("@rftoolsdim")
event.addLootTableModifier("chests/village/village_toolsmith").removeLoot("@rftoolsdim")
event.addLootTableModifier("chests/desert_pyramid").removeLoot("@rftoolsdim")
event.addLootTableModifier("chests/ruined_portal").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/shipwreck_treasure").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/jungle_temple").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/simple_dungeon").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/abandoned_mineshaft").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/end_city_treasure").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/pillager_outpost").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/buried_treasure").removeLoot("@rftoolsdim")
event.addLootTableModifier("minecraft:chests/woodland_mansion").removeLoot("@rftoolsdim")

});

ServerEvents.chestLootTables(event => {
	event.addChest('kubejs:seeds', t => {
		t.addPool(p => {
			p.rolls = 1
			p.addItem("thermal:amaranth_seeds", 1).weight(1)
			p.addItem("thermal:barley_seeds", 1).weight(1)
			p.addItem("thermal:bell_pepper_seeds", 1).weight(1)
			p.addItem("thermal:corn_seeds", 1).weight(1)
			p.addItem("thermal:eggplant_seeds", 1).weight(1)
			p.addItem("thermal:green_bean_seeds", 1).weight(1)
			p.addItem("thermal:peanut_seeds", 1).weight(1)
			p.addItem("thermal:radish_seeds", 1).weight(1)
			p.addItem("thermal:sadiroot_seeds", 1).weight(1)
			p.addItem( "thermal:spinach_seeds", 1).weight(1)
			p.addItem( "thermal:strawberry_seeds", 1).weight(1)
			p.addItem('actuallyadditions:canola_seeds', 1).weight(2)
			p.addItem('minecraft:wheat_seeds', 1).weight(4)
			p.addItem('hexerei:sage_seed', 1).weight(2)
			p.addItem('actuallyadditions:coffee_beans', 1).weight(2)
			p.addItem('occultism:datura_seeds', 1).weight(3)
		})
	})
	})
