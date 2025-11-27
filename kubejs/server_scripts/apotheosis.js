ServerEvents.recipes(event => {
event.remove({ id: "apotheosis:hellshelf" })
event.remove({ id: "apotheosis:blazing_hellshelf" })
event.remove({ id: "apotheosis:glowing_hellshelf" })
event.shaped(
  Item.of('apotheosis:hellshelf', 1), // arg 1: output
  [
    'ABA',
    'DED', // arg 2: the shape (array of strings)
    'ACA'
  ],
  {
    A: 'tconstruct:nahuatl',
    B: 'tinkers_thinking:spectre_ingot',
    C: 'netherexp:wither_bone_block',
    D: 'netherexp:phasmo_shard',
    E: 'minecraft:bookshelf'
  }
)

// Blazing
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'apotheosis:infused_hellshelf'
  },
  "cast_consumed": true,
  "cooling_time": 113,
  "fluid": {
    "amount": 1000,
    "fluid": "tconstruct:blazing_blood"
  },
  "result": 'apotheosis:blazing_hellshelf'
})

// Glowing
event.custom({
  "type": "tconstruct:casting_basin",
  "cast": {
    "item": 'apotheosis:blazing_hellshelf'
  },
  "cast_consumed": true,
  "cooling_time": 113,
  "fluid": {
    "amount": 1000,
    "fluid": "thermal:glowstone"
  },
  "result": 'apotheosis:glowing_hellshelf'
})


})

