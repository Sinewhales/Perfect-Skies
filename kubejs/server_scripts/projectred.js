ServerEvents.recipes(event => {
event.remove({ id: 'projectred_integration:timer_gate' })
event.remove({ id: 'projectred_core:platformed_plate' })
event.smithing(
  'projectred_core:platformed_plate',  
   'minecraft:redstone',                   // arg 1: output
  'projectred_core:plate',                          // arg 3: the item to be upgraded
  'minecraft:redstone_torch'                           // arg 4: the upgrade item
)

// Stone Rod
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'minecraft:cobblestone' }
  ],
  tool: { tag: 'cb_microblock:tools/saw' },
  result: [
    { item: 'cb_microblock:stone_rod', count: 1 }
  ]
})

event.shaped(
  Item.of('cb_microblock:stone_rod', 1), // arg 1: output
  [
    '   ',
    ' A ', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'kubejs:rock',

  }
)

})




ServerEvents.recipes(event => {
        let p_circuit = (id) => event.stonecutting(Item.of("projectred_integration:" + id + "_gate", 1), "projectred_core:platformed_plate")

        event.remove({ mod:"projectred_integration" })

        p_circuit("or")
        p_circuit("nor")
        p_circuit("not")
        p_circuit("and")
        p_circuit("nand")
        p_circuit("xor")
        p_circuit("xnor")
        p_circuit("buffer")
        p_circuit("multiplexer")
        p_circuit("pulse")
        p_circuit("repeater")
        p_circuit("randomizer")
        p_circuit("sr_latch")
        p_circuit("toggle_latch")
        p_circuit("transparent_latch")
        p_circuit("light_sensor")
        p_circuit("rain_sensor")
        p_circuit("timer")
        p_circuit("sequencer")
        p_circuit("counter")
        p_circuit("state_cell")
        p_circuit("synchronizer")
        p_circuit("bus_transceiver")
        p_circuit("null_cell")
        p_circuit("invert_cell")
        p_circuit("buffer_cell")
        p_circuit("comparator")
        p_circuit("and_cell")
        p_circuit("bus_randomizer")
        p_circuit("bus_converter")
        p_circuit("bus_input_panel")
        p_circuit("segment_display")
        p_circuit("dec_randomizer")
    })
