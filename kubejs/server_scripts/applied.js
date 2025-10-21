ServerEvents.recipes(event => {
event.remove({ id: 'ae2:network/blocks/crank' })
event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAA",
    "  A",
    "  A"
  ],
  "key": {
    "A": {
      "item": "forestry:impregnated_stick"
    }
  },
  "result": {
    "item": "ae2:crank"
  }
})



})

