const drawSpace = document.getElementById('drawSpace')
const pictureSize = document.getElementById('test5')
const clearDrawing = document.getElementById('clearDrawing')
const eraserMode = document.getElementById('eraserMode')
const colorMode = document.getElementById('colorMode')
var drawState = true

function draw() {
      
      function removeAllChildNodes() {
    while (drawSpace.firstChild) {
        drawSpace.removeChild(drawSpace.firstChild);
    }
}
var size = 0
size = parseInt(pictureSize.value)

console.log(size)


var area = size * size
      
console.log(area)

removeAllChildNodes()
      for (let i = 0; i <= area-1; i++) {
            var pixel = document.createElement('div')
            pixel.setAttribute('class', 'pixel')
            pixel.setAttribute('style', `height: ${500 / size}px; width: ${500 / size}px`)
            pixel.setAttribute('id', `${i}`)
            drawSpace.appendChild(pixel)

      }
      let style = document.getElementsByClassName('pixel')
      console.log(style)


      
}
function flipColor() {
      const pixelPiece = document.getElementsByClassName('pixel')
      for (let i = 0; i < pixelPiece.length; i++) {
            pixelPiece[i].addEventListener('mouseover', function () {
                  console.log("mouseover works")
                  pixelPiece[i].style.backgroundColor = 'black'
            }, false)
      }
}

function erase() {
      const pixelPiece = document.getElementsByClassName('pixel')
      for (let i = 0; i < pixelPiece.length; i++) {
            pixelPiece[i].addEventListener('mouseover', function () {
                  console.log("mouseover works")
                  pixelPiece[i].style.backgroundColor = 'white'
            }, false)
      }
}

function determineDrawState() {
      eraserMode.addEventListener('click', function () {
            drawState = false
      })

      colorMode.addEventListener('click', function () {
            drawState = true
      })

      if (drawState === true) {
            flipColor()
      } else if (drawState === false) {
            erase()
      }

}


pictureSize.addEventListener('input', function () {
      draw()
      determineDrawState()      
}, false)

window.onload = function () {
      draw()
      determineDrawState()
}

function clear() {
      const pixelPiece = document.getElementsByClassName('pixel')
      for (let i = 0; i < pixelPiece.length; i++) {

                  pixelPiece[i].style.backgroundColor = 'white'
      }
}

clearDrawing.addEventListener('click', function () {
      clear()
}, false)

eraserMode.addEventListener('click', function () {
      determineDrawState()
})

colorMode.addEventListener('click', function () {
      determineDrawState()
})



















      


