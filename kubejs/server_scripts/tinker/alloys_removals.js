ServerEvents.recipes(event => {
event.remove({ type: "tconstruct:alloy" })
event.remove({ type: "tconstruct:melting", output: '@nuclearcraft' })
event.remove({ id: 'tconstruct:smeltery/casting/seared/smeltery_controller' })
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'minecraft:furnace'
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


event.remove({ id: 'tconstruct:smeltery/melting/soul/sand'})
event.remove({ id: 'tconstruct:smeltery/melting/scorched/glass_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/scorched/pane_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/seared/glass_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/seared/pane_soul'})
event.remove({ id: 'tconstruct:smeltery/melting/soul/glass'})
event.remove({ id: 'tconstruct:smeltery/melting/soul/pane'})
event.remove({ id: 'tconstruct:smeltery/casting/soul/glass'})


event.remove({ id: 'tinkers_thinking:common/paper/pulp_bottle'})

event.remove({ id: 'tinkers_thinking:common/spectre/ingot_by_blasting'})
event.remove({ id: 'tinkers_thinking:common/spectre/compound'})

event.remove({ id: 'tconstruct:smeltery/scorched/alloyer'})

})

