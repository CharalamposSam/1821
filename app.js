const canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d'),
  main = document.querySelector('.main')

let painting = false,
  firstLine = true

var rect = main.getBoundingClientRect()

function startPosition(e) {
  painting = true
  draw(e)
}

function finishedPosition() {
  painting = false
}

function draw(e) {
  if (!painting) return
  ctx.lineWidth = 2
  ctx.lineCap = 'round'
  ctx.strokeStyle = 'red'

  if (firstLine) {
    ctx.beginPath()
    ctx.moveTo(rect.left, rect.top)
    ctx.lineTo(e.clientX, e.clientY)
    firstLine = false
  } else {
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(e.clientX, e.clientY)
  }
}

canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', finishedPosition)
canvas.addEventListener('mousemove', draw)

window.addEventListener('load', resizeCanvas)
window.addEventListener('resize', resizeCanvas)

function resizeCanvas() {
  canvas.height = window.innerHeight
  canvas.width = window.innerWidth
}

document.querySelector('.lng').addEventListener('click', () => {
  alert('The language changed')
})

document.querySelector('.menu').addEventListener('click', () => {
  alert('The menu opened')
})
