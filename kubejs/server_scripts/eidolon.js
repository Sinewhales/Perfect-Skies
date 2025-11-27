ServerEvents.recipes(event => {
// Crucible

event.remove({ id: 'eidolon:crucible' })
event.shaped(
  Item.of('eidolon:crucible', 1), // arg 1: output
  [
    'A A',
    'A A', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'mysticalagriculture:soulium_ingot'
  }
)


// Enchanted Dust
event.remove({ id: 'eidolon:blast_enchanted_ash' })
event.remove({ id: 'eidolon:enchanted_ash_from_block' })
event.remove({ id: 'eidolon:enchanted_ash' })
// Arcane Workbench
event.remove({ id: 'eidolon:worktable' })
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'eidolon:enchanted_ash' 
    },
    "block_in": 'extendedcrafting:basic_table',
    "post": [
        {
            "type": "place",
            "block": 'eidolon:worktable'
        }
    ]
}
)

// Pewter is only tinker for now
event.remove({ id: 'eidolon:smelt_pewter_blend' })
event.remove({ id: 'eidolon:blast_pewter_blend' })

// Brazier
event.remove({ id: 'eidolon:brazier' })
event.shaped(
  Item.of('eidolon:brazier', 1), // arg 1: output
  [
    'AAA',
    'BCB', // arg 2: the shape (array of strings)
    'D D'
  ],
  {
    A: 'kubejs:black_steel_ingot',
    B: 'eidolon:pewter_inlay',
    C: 'netherexp:wither_bone_block',
    D: 'mynethersdelight:powder_cannon' //arg 3: the mapping object
  }
)

// Stone Hand
event.remove({ id: 'eidolon:stone_hand' })
event.shaped(
  Item.of('eidolon:stone_hand', 1), // arg 1: output
  [
    ' A ',
    'ABA', // arg 2: the shape (array of strings)
    ' B '
  ],
  {
    A: 'netherexp:soul_slate_slab',
    B: 'tconstruct:scorched_stone'
  }
)

// Enchanted Ash
event.smelting('eidolon:enchanted_ash', 'tconstruct:necrotic_bone')

})

