PlayerEvents.loggedIn(event => {
    let player = event.player

    event.server.scheduleInTicks(20, (callback) => {
        if (player.persistentData.getInt('firstJoin') != 1) {
            player.inventory.clear()
            player.give(Item.of('ftbquests:book'))
            player.give(Item.of('sophisticatedbackpacks:backpack'))
            player.give(Item.of('waystones:waystone'))
            player.give(Item.of('waystones:warp_stone'))
            player.persistentData.putInt('firstJoin', 1)
        }
    })
})