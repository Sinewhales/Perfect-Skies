ServerEvents.recipes(event => {
//[1] Nature Agglomeratio
event.custom({
  "type": "integrateddynamics:drying_basin",
  "fluid": {
    "fluid": "kubejs:nature_extract",
    "amount": 250
  },
  "duration": 100,
  "result": {
    "item": 'mysticalagriculture:nature_agglomeratio'
  }
})

// Soulium
event.remove({ id: 'mysticalagriculture:soulium_ingot' })
event.recipes.summoningrituals
    .altar(Ingredient.of('eidolon:pewter_ingot'))
    .itemOutput(Item.of('mysticalagriculture:soulium_ingot'))
    .input('mysticalagriculture:soulium_dust')
    .input('eidolon:soul_shard')
    .recipeTime(100)

    
})
