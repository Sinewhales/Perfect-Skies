const emeraldDelay = 4500
EntityJSEvents.modifyEntity((event) => {
    event.modify('minecraft:villager', (builder) => {
        builder.tick((entity) => {
            let emeraldTime = entity.persistentData.getInt('EmeraldTime')
            if (emeraldTime === 0) {
                emeraldTime = emeraldDelay + Utils.random.nextInt(emeraldDelay)
            } else {
                emeraldTime--
                if (emeraldTime <= 0) {
                    entity.block.popItemFromFace(Item.of('minecraft:emerald'), 'up')
                    emeraldTime = emeraldDelay + Utils.random.nextInt(emeraldDelay)
                }
            }
            entity.persistentData.putInt('EmeraldTime', emeraldTime)
        })
    })
})