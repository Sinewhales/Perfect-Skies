ServerEvents.recipes(event => {
event.remove({ id: 'stevescarts:component/component_simple_pcb_1' })
event.remove({ id: 'stevescarts:component/component_simple_pcb_2' })
// Simple PCB
event.custom({
  "type": "buildcraftsilicon:assembly",
  "output": {
    "item": 'stevescarts:component_simple_pcb'
  },
  "requiredMicroJoules": 1000000000,
  "requiredStacks": [
    {
      "count": 2,
      "ingredient": {
        "item": 'buildcraftsilicon:chipset_redstone'
      }
    },
        {
      "count": 3,
      "ingredient": {
        "item": 'forestry:electron_tube_gold'
      }
    },
   {
      "count": 1,
      "ingredient": {
        "item": 'kubejs:duralumin_plate'
      }
    },
  {
      "count": 1,
      "ingredient": {
        "item":'kubejs:empowered_rubber'
      }
    }
  ],
  "subType": "BASIC"
})


})
