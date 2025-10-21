ServerEvents.recipes(event => {
event.remove({ output: '#sophisticatedstorage:all_storage' })

// Upgrade Recipes
event.remove({ id: 'sophisticatedstorage:basic_tier_upgrade' })
event.smithing(
  'sophisticatedstorage:basic_tier_upgrade',  
   'sophisticatedstorage:upgrade_base',                   // arg 1: output
  'minecraft:stick',                          // arg 3: the item to be upgraded
  'minecraft:redstone_torch'                           // arg 4: the upgrade item
)

event.replaceInput(
  { id: 'sophisticatedstorage:basic_to_iron_tier_upgrade' }, // Arg 1: the filter
  'minecraft:redstone_torch',            // Arg 2: the item to replace
  'sophisticatedstorage:basic_tier_upgrade'        // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.replaceInput(
  { id: 'sophisticatedstorage:basic_to_copper_tier_upgrade' }, // Arg 1: the filter
  'minecraft:redstone_torch',            // Arg 2: the item to replace
  'sophisticatedstorage:basic_tier_upgrade'        // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)


})

