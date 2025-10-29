

ItemEvents.modification(event => {
  let tools = [['minecraft:wooden_sword', 'minecraft:wooden_hoe', 'minecraft:wooden_axe','minecraft:wooden_pickaxe', 'minecraft:wooden_shovel', 'actuallyadditions:wooden_aiot', Item.of('minecraft:stone_sword', '{Damage:0}'), Item.of('minecraft:stone_shovel', '{Damage:0}'), Item.of('minecraft:stone_pickaxe', '{Damage:0}'), Item.of('minecraft:stone_axe', '{Damage:0}'), Item.of('minecraft:stone_hoe', '{Damage:0}'), Item.of('actuallyadditions:stone_aiot', '{Damage:0}'), Item.of('minecraft:iron_sword', '{Damage:0}'), Item.of('minecraft:iron_hoe', '{Damage:0}'), Item.of('minecraft:iron_axe', '{Damage:0}'), Item.of('actuallyadditions:iron_aiot', '{Damage:0}'), Item.of('minecraft:iron_shovel', '{Damage:0}'), Item.of('minecraft:iron_pickaxe', '{Damage:0}'), Item.of('minecraft:golden_sword', '{Damage:0}'), Item.of('minecraft:golden_pickaxe', '{Damage:0}'), Item.of('minecraft:golden_shovel', '{Damage:0}'), Item.of('minecraft:golden_axe', '{Damage:0}'), Item.of('minecraft:golden_hoe', '{Damage:0}'), Item.of('actuallyadditions:gold_aiot', '{Damage:0}'), Item.of('minecraft:diamond_sword', '{Damage:0}'), Item.of('minecraft:diamond_pickaxe', '{Damage:0}'), Item.of('minecraft:diamond_axe', '{Damage:0}'), Item.of('minecraft:diamond_shovel', '{Damage:0}'), Item.of('minecraft:diamond_hoe', '{Damage:0}'), Item.of('minecraft:netherite_sword', '{Damage:0}'), Item.of('minecraft:netherite_axe', '{Damage:0}'), Item.of('minecraft:netherite_hoe', '{Damage:0}'), Item.of('minecraft:netherite_pickaxe', '{Damage:0}'), Item.of('minecraft:netherite_shovel', '{Damage:0}'), Item.of('actuallyadditions:netherite_aiot', '{Damage:0}'), Item.of('actuallyadditions:diamond_aiot', '{Damage:0}')]]
  for (let i = 0; i < tools.length; i++) { event.modify(tools , item => {
    item.maxDamage = 1
  })
      }
})

