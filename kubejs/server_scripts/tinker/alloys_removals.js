ServerEvents.recipes(event => {
event.remove({ type: "tconstruct:alloy" })
event.remove({ type: "tconstruct:melting", output: '@nuclearcraft' })
event.remove({ id: 'tconstruct:smeltery/casting/seared/smeltery_controller' })
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'extendedcrafting:basic_catalyst'
    },
    "block_in": 'kubejs:seared_casing',
    "post": [
        {
            "type": "place",
            "block": 'tconstruct:smeltery_controller'
        }
    ]
}
)
event.remove({ type: "tconstruct:casting_table", input: 'tconstruct:plate_cast'})
event.remove({ type: "tconstruct:casting_table", input: 'tconstruct:plate_red_sand_cast'})
event.remove({ type: "tconstruct:casting_table", input: 'tconstruct:plate_sand_cast'})
event.remove({ type: "tconstruct:casting_table", input: 'tconstruct:gear_cast'})
event.remove({ type: "tconstruct:casting_table", input: 'tconstruct:gear_red_sand_cast'})
event.remove({ type: "tconstruct:casting_table", input: 'tconstruct:gear_sand_cast'})

event.remove({ id: 'tconstruct:smeltery/melting/soul/sand'})
event.remove({ id: 'tconstruct:smeltery/melting/scorched/glass_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/scorched/pane_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/seared/glass_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/seared/pane_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/soul/glass'})
event.remove({ id: 'tconstruct:smeltery/melting/soul/pane'})
event.remove({ id: 'tconstruct:smeltery/casting/soul/glass'})
})

