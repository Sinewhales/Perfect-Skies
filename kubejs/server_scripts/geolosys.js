LootJS.modifiers((event) => {
    event.addBlockLootModifier('geolosys:cassiterite_ore_sample').removeLoot('geolosys:tin_cluster').addLoot('thermal:tin_dust');
    event.addBlockLootModifier('geolosys:malachite_ore_sample').removeLoot('geolosys:copper_cluster').addLoot('thermal:copper_dust');
    event.addBlockLootModifier('geolosys:limonite_ore_sample').removeLoot('geolosys:nickel_cluster').addLoot('thermal:iron_dust');
    event.addBlockLootModifier('geolosys:limonite_ore_sample').removeLoot('geolosys:iron_cluster')
    event.addBlockLootModifier('geolosys:gold_ore_sample').removeLoot('geolosys:gold_cluster').addLoot('thermal:gold_dust');

  // Bauxite to Alu
      event.addBlockLootModifier('geolosys:bauxite_ore').removeLoot('geolosys:aluminum_cluster').addLoot('kubejs:raw_aluminum_ore');
    event.addBlockLootModifier('geolosys:deepslate_bauxite_ore').removeLoot('geolosys:aluminum_cluster').addLoot('kubejs:raw_aluminum_ore');
});

ServerEvents.tags('block', event => {

  event.remove('minecraft:needs_iron_tool', 'geolosys:anthracite_coal_ore')
   event.add('minecraft:needs_stone_tool', 'geolosys:anthracite_coal_ore')
   event.remove('forge:stone', 'quark:shale')

})