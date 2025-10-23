ServerEvents.recipes(event => {
event.remove({ id: 'farmersdelight:cutting_board' })
// [1] Cutting Board
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'kubejs:plate_hammer'
    },
    "block_in": 'actuallyadditions:wood_casing',
    "post": [
        {
            "type": "place",
            "block": 'farmersdelight:cutting_board'
        },
        {
        "type": "prevent_default"
    }
    ]
}
)

// Compost
event.remove({ id: 'farmersdelight:organic_compost_from_rotten_flesh' })
event.remove({ id: 'farmersdelight:organic_compost_from_tree_bark' })

event.shapeless(
  Item.of('farmersdelight:organic_compost'), // arg 1: output
  [
'4x thermal:compost'
  ]
)
})

