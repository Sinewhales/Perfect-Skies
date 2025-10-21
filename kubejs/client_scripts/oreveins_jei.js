JEIAddedEvents.registerCategories((event) => {
    event.custom('kubejs:ore_gen', (category) => {
        const {
            jeiHelpers: { guiHelper },
        } = category;

        category
            .title('Ore Generation')
            .background(null)
            .setWidth(100)
            .setHeight(50)
            .icon(guiHelper.createDrawableItemStack('geolosys:limonite_ore_sample'))
            .handleLookup((layOut, recipe, focuses) => {
                layOut.addSlot('INPUT', 0, 0).addItemStack(recipe.data.input);
                layOut.addSlot('OUTPUT', 40, 20).addItemStack(recipe.data.output);
                layOut.addSlot('OUTPUT', 60, 20).addItemStack(recipe.data.outputs);
                layOut.addSlot('OUTPUT', 80, 20).addItemStack(recipe.data.also);
                layOut.addSlot('CATALYST', 0, 30).addItemStack(recipe.data.catalyst);
                layOut.addInvisibleIngredients('OUTPUT').addItemStack(recipe.data.output)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                guiGraphics.drawWordWrap(Client.font, Text.of(recipe.data.description), 40, 0, 100, 0);
    });
});
})

JEIAddedEvents.registerRecipes((event) => {
    event
        .custom('kubejs:ore_gen')
        .add({ input: 'geolosys:limonite_ore_sample', output: 'minecraft:raw_iron', outputs: 'thermal:raw_nickel', also: 'quark:shale', catalyst: 'ad_astra:earth_globe', description: "Iron Vein" })
        .add({ input: 'geolosys:quartz_ore_sample', output: 'minecraft:quartz', outputs: 'actuallyadditions:black_quartz', also: 'thermal:sulfur', catalyst: 'minecraft:netherrack', description: "Quartz Vein" })
        .add({ input: 'geolosys:cassiterite_ore_sample', output: 'thermal:raw_tin', outputs: 'minecraft:granite', also: 'minecraft:andesite', catalyst: 'ad_astra:earth_globe', description: "Tin Vein" })
        .add({ input: 'geolosys:coal_ore_sample', output: 'minecraft:coal', outputs: 'geolosys:anthracite_coal', also: 'geolosys:lignite_coal', catalyst: 'ad_astra:earth_globe', description: "Coal Vein" })
        .add({ input: 'geolosys:malachite_ore_sample', output: 'minecraft:raw_copper', outputs: 'minecraft:raw_iron', also: "quark:shale", catalyst: 'ad_astra:earth_globe', description: "Copper Vein" })
        .add({ input: 'geolosys:cinnabar_ore_sample', output: 'minecraft:redstone', outputs: 'projectred_core:electrotine_dust', also: 'thermal:cinnabar', catalyst: 'ad_astra:earth_globe', description: "Redstone Vein" })
        .add({ input: 'geolosys:kimberlite_ore_sample', output: 'minecraft:coal', outputs: 'geolosys:anthracite_coal', also: 'minecraft:diamond', catalyst: 'ad_astra:earth_globe', description: "Diamond Vein" })
        .add({ input: "geolosys:beryl_ore_sample", output: 'thermal:niter', outputs: 'thermal:apatite', also: 'minecraft:emerald', catalyst: 'ad_astra:earth_globe', description: "Emerald Vein" })
        .add({ input: 'geolosys:gold_ore_sample', output: 'minecraft:raw_gold', outputs: 'thermal:raw_silver', also: "minecraft:andesite", catalyst: 'ad_astra:earth_globe', description: "Gold Vein" })
        .add({ input: "geolosys:lapis_ore_sample", output: 'minecraft:lapis_lazuli', outputs: 'kubejs:raw_aluminum_ore', also: 'minecraft:calcite', catalyst: 'ad_astra:earth_globe', description: "Lapis Vein" })        
});