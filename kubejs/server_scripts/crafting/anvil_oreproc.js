ServerEvents.recipes(event => {
// Iron
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'minecraft:raw_iron'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'thermal:iron_dust',
            "count": 1
        },
        {
            "type": "drop_item",
            "item": 'thermal:iron_dust',
            "count": 1,
            "contextual": {
            "type": "chance",
            "chance": 0.5
            }
        }
    ]
})

// Copper

event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'minecraft:raw_copper'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'thermal:copper_dust',
            "count": 1
        },
        {
            "type": "drop_item",
            "item": 'thermal:copper_dust',
            "count": 1,
            "contextual": {
            "type": "chance",
            "chance": 0.5
            }
        }
    ]
})

// Gold
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'minecraft:raw_gold'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'thermal:gold_dust',
            "count": 1
        },
        {
            "type": "drop_item",
            "item": 'thermal:gold_dust',
            "count": 1,
            "contextual": {
            "type": "chance",
            "chance": 0.5
            }
        }
    ]
})

// Tin
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'thermal:raw_tin'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'thermal:tin_dust',
            "count": 1
        },
        {
            "type": "drop_item",
            "item": 'thermal:tin_dust',
            "count": 1,
            "contextual": {
            "type": "chance",
            "chance": 0.5
            }
        }
    ]
})

// Silver
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'thermal:raw_silver'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'thermal:silver_dust',
            "count": 1
        },
        {
            "type": "drop_item",
            "item": 'thermal:silver_dust',
            "count": 1,
            "contextual": {
            "type": "chance",
            "chance": 0.5
            }
        }
    ]
})

// Nickel
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'thermal:raw_nickel'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'thermal:nickel_dust',
            "count": 1
        },
        {
            "type": "drop_item",
            "item": 'thermal:nickel_dust',
            "count": 1,
            "contextual": {
            "type": "chance",
            "chance": 0.5
            }
        }
    ]
})

// Aluminum
event.custom({
    "type": "lychee:block_crushing",
    "item_in": [
        {
            "item": 'kubejs:raw_aluminum_ore'
        }
    ],
    "post": [
        {
            "type": "drop_item",
            "item": 'kubejs:aluminum_dust',
            "count": 1
        },
        {
            "type": "drop_item",
            "item": 'kubejs:aluminum_dust',
            "count": 1,
            "contextual": {
            "type": "chance",
            "chance": 0.5
            }
        }
    ]
})

})
