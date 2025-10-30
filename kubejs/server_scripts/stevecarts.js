ServerEvents.recipes(event => {
event.remove({ id: 'stevescarts:component/component_simple_pcb_1' })
event.remove({ id: 'stevescarts:component/component_simple_pcb_2' })
// Simple PCB
event.custom({
  "type": "forestry:carpenter",
  "box": [],
  "recipe": {
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "A": {
        "item": 'kubejs:empowered_rubber'
      },
      "B": {
        "item": 'forestry:circuit_board_intricate'
      },
      "C": {
        "item": 'kubejs:red_alloy_plate'
      },
       "D": {
        "item": 'kubejs:duralumin'
      },

    },
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "result": {
      "item": 'stevescarts:component_simple_pcb'
    },
    "show_notification": true
  },
  "result": {
    "Count": 1,
    "id": 'stevescarts:component_simple_pcb',
    "tag": {
      "T": 3
    }
  },
  "time": 80
})


})
