ServerEvents.recipes(event => {
  event.remove({ id: "experienceobelisk:cognitium_bucket_filling" })
// Unification Liquid XP
event.custom({
  "type": "experienceobelisk:filling",
  "ingredient": {
    "item": "minecraft:bucket"
  },
  "result": {
    "item": 'mob_grinding_utils:fluid_xp_bucket',
    "count": 1
  },
  "cost_mB": 1000,
  "id": "experienceobelisk:cognitium_bucket_filling"
})




})
