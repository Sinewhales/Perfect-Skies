BlockEvents.modification(event => {

// Stone Torch should be an instant break
  event.modify('tinkers_thinking:stone_torch', block => {
    block.destroySpeed = 0.1
  })
})