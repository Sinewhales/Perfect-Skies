ServerEvents.recipes(event => {
// Crucible

event.remove({ id: 'eidolon:crucible' })
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'eidolon:pewter_block'
    },
    "block_in": 'tconstruct:scorched_basin',
    "post": [
        {
            "type": "place",
            "block": 'eidolon:crucible'
        }
    ]
}
)
})

