const { SoundLibrary } = require('@toio/device-core-cube')
const { NearestScanner } = require('@toio/scanner')

//const DURATION = 10000 // ms
const SPEED = {
  forward: [20, 20],
  backward: [-20, -20],
  left: [0, 50],
  right: [50, 0],
}
;(async () => {
  // start scanner
  const cube = await new NearestScanner().start()

  // connect to a core cube
  cube.connect().then(cube =>
    // set LED color
    cube.turnLedOn({
      durationMs: 0,
      red: 255,
      green: 0,
      blue: 255,
    })
  )

  // set listener
  //  cube
  //    .on('notify:id:position-id', data => console.log('[POS ID]', data))
  //    .on('notify:id:standard-id', data => console.log('[STD ID]', data))
  //.on('notify:id:standard-id', data => console.log(data['standardId']))
  let cardId = 0

  cube.on('notify:id:standard-id', data => {
    cardId = data.standardId

    if (cardId == '3670064') {
      cube.playSound([{ durationMs: 7, noteName: 48 }], 50)
    }
    if (cardId == '3670026') {
      cube.playSound([{ durationMs: 7, noteName: 50 }], 50)
    }
    if (cardId == '3670062') {
      cube.playSound([{ durationMs: 7, noteName: 52 }], 50)
    }
    if (cardId == '3670028') {
      cube.playSound([{ durationMs: 7, noteName: 53 }], 50)
    }
    if (cardId == '3670016') {
      cube.playSound([{ durationMs: 7, noteName: 55 }], 50)
    }
    if (cardId == '3670060') {
      cube.playSound([{ durationMs: 7, noteName: 57 }], 50)
    }
    if (cardId == '3670018') {
      cube.playSound([{ durationMs: 7, noteName: 59 }], 50)
    }
    if (cardId == '3670054') {
      cube.playSound([{ durationMs: 7, noteName: 60 }], 50)
    }

    if (cardId == '3670066') {
      cube.move(39, 60, 100)
      cube.move(50, 50, 1000)
    }

    if (cardId == '3670030') {
      cube.move(50, 20, 50)
      cube.move(60, 60, 800)
    }

    if (cardId == '3670068') {
      cube.move(39, 90, 200)
      cube.move(60, 60, 1000)
    }

    if (cardId == '3670070') {
      cube.move(40, 10, 400)
    }

    if (cardId == '3670032') {
      cube.move(90, 38, 400)
      cube.move(60, 60, 800)
    }

    if (cardId == '3670034') {
      cube.stop()
    }

    //  if(cardId == '3670066'){
    //      cube.move(40, 50, 100)
    //      cube.move(50, 50, 800)
    //  }

    //  if(cardId == '3670068'){
    //    cube.move(90, 35, 200)
    //    cube.move(60, 60, 1000)
    //  }

    //  if(cardId == '3670070'){
    //      cube.move(40, 10, 400)
    //  }

    //  if(cardId == '3670034'){
    //    cube.stop()
    //  }
  })
})()
