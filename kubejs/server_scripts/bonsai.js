ServerEvents.recipes(event => {

event.remove({ type: "botanypots:crop"})
event.custom({
    "type": "botanypots:crop",
    "seed": {
      "item": "tconstruct:blood_slime_sapling"
    },
    "categories": [
      "blood_slime"
    ],
    "growthTicks": 2400,
    "display": {
      "block": "tconstruct:blood_slime_sapling"
    },
    "drops": [
      {
        "chance": 1.00,
        "output": {
          "item": "tconstruct:bloodshroom_log"
        },
        "minRolls": 2,
        "maxRolls": 4
      },
      {
        "chance": 0.25,
        "output": {
          "item": 'tconstruct:ichor_slime_ball'
        },
        "minRolls": 1,
        "maxRolls": 2
      },
      {
        "chance": 0.15,
        "output": {
          "item": 'tconstruct:blood_slime_sapling'
        }
      }
    ]
  })

})
