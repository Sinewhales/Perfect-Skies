ServerEvents.recipes((event) => {
event.custom({
  "type": "lootbags:loot",
  "name": "Seed Bag",
  "rarity": "COMMON",
  "output": 
{
           table: "kubejs:chests/seeds"
        },
})

event.custom({
  "type": "lootbags:loot",
  "name": "Common Lootbag",
  "rarity": "UNCOMMON",
  "output": 
{
           table: "kubejs:chests/t1_lootbags"
        },
})
})