ServerEvents.recipes(event => {
// Scanner
event.remove({ id: "scannable:scanner" })
event.shaped(
  Item.of("scannable:scanner", 1), // arg 1: output
  [
    "A A",
    "BCB",
    "DED"
  ],
  {
    A: "thermal_extra:copper_rod",
    B: 'extendedcrafting:black_iron_slate',
    C: 'projectred_exploration:electrotine_block',
    D: "kubejs:scanner_battery",
    E: "minecraft:diamond"
    //arg 3: the mapping object
  }
)
})

