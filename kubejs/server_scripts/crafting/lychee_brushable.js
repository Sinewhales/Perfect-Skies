ItemEvents.rightClicked("kubejs:village_locator", event=>{
    let player = event.player
    event.server.runCommandSilent(`ftbranks add ${player.profile.name} locate`)
    event.player.runCommand("locate structure minecraft:village_plains")
    event.server.runCommandSilent(`ftbranks remove ${player.profile.name} locate`)
})