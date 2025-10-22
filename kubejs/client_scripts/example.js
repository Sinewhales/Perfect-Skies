ItemEvents.tooltip(event => {
  // Add tooltip to all of these items
event.add(['kubejs:black_dye_bucket'], '\u00A71Can also be obtained by milking a Squid')
event.add(['mysticalagriculture:inferium_essence'], '\u00A71Can only be obtained by killing mobs')
event.add(['kubejs:scanner_battery'], '\u00A74Remove Modules before charging using a Battery')
event.add(['kubejs:heart_of_emerald'], '\u00A71Dropped by Wandering Traders (100%) and Villagers (20%)')
event.add(['minecraft:emerald'], '\u00A71Can be randomly dropped by Villagers')
event.add(['kubejs:royal_honey_bucket'], '\u00A71Can only be made with Forestry combs')
event.add(['kubejs:crushing_hammer'], '\u00A71Cant do Plates but has way more durability than the Plate Hammer')
event.add(['farmingforblockheads:market'], '\u00A71Can also be traded from a Farmer Villager')
event.add(['kubejs:synthethic_leather'], '\u00A71Dry on a Drying Rack')
event.add(['kubejs:ancient_rune'], '\u00A71Found by doing archaeology on Suspicious Blocks')
})

JEIAddedEvents.registerCategories(event => {
	event.custom('kubejs:cauldron_crafting', c => {
        c.width = 110 //or whatever int
        c.height = 60
		c.title('Cauldron Crafting')
			.background(event.data.jeiHelpers.guiHelper.createBlankDrawable(100, 50))
			.icon(event.data.jeiHelpers.guiHelper.createDrawableItemStack(Item.of('minecraft:cauldron')))
			.isRecipeHandled(r => {
				return global['verifyRecipe'](event.data.jeiHelpers, r)
			})
			.handleLookup((builder, recipe, focuses) => {
				global['handleLookup'](event.data.jeiHelpers, builder, recipe, focuses)
			})
			.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
				global['render'](event.data.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY)
			})
	})
})

JEIAddedEvents.registerRecipes(event => {
	event.custom('kubejs:cauldron_crafting').add({ input: 'minecraft:iron_ingot', catalyst: 'kubejs:black_dye_bucket', output: 'extendedcrafting:black_iron_ingot' })
    event.custom('kubejs:cauldron_crafting').add({ input: 'thermal:iron_gear', catalyst: 'kubejs:black_dye_bucket', output: 'kubejs:black_iron_gear' })
    event.custom('kubejs:cauldron_crafting').add({ input: 'kubejs:inactive_luminessence', catalyst: 'mob_grinding_utils:fluid_xp_bucket', output: 'extendedcrafting:luminessence' })
    event.custom('kubejs:cauldron_crafting').add({ input: 'minecraft:wheat_seeds', catalyst: 'mob_grinding_utils:fluid_xp_bucket', output: 'giacomos_exp:expseed' })

})

global['verifyRecipe'] = (jeiHelpers, recipe) => {
	if(!recipe) return false;
	if(!recipe.data) return false;
	if(!recipe.data.input) return false;
	if(!recipe.data.catalyst) return false;
	if(!recipe.data.output) return false;

	return true;
}

global['handleLookup'] = (jeiHelpers, builder, recipe, focuses) => {
	builder.addSlot('INPUT', 20, 10).addItemStack(Item.of(recipe.data.input)).setSlotName('input')
	builder.addSlot('CATALYST', 20, 35).addItemStack(Item.of(recipe.data.catalyst)).setSlotName('catalyst')
	builder.addSlot('OUTPUT', 85, 30).addItemStack(Item.of(recipe.data.output)).setSlotName('output')
    builder.addInvisibleIngredients("OUTPUT").addItemStack(Item.of(recipe.data.name))

}


global['render'] = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    guiGraphics.blit("minecraft:textures/item/cauldron.png", 45, 30, 0, 0, 16, 16, 16, 16)
    guiGraphics.blit("kubejs:textures/gui/curved_arrow.png", 40, 13, 0, 0, 16, 16, 16, 16)
	guiGraphics.blit("kubejs:textures/gui/arrow_right.png", 65, 30, 0, 0, 16, 16, 16, 16)

}