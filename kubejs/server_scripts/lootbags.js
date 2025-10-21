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
})