 //sizing variables
 var w = window.innerWidth,
 h = window.innerHeight,
 resolution = 8.5,
 resolutionH = 11,
 dimDif = resolution / resolutionH,
 sizeH = h,
 sizeW = h * dimDif;





let font, alphabet = "O", 
    graphic, sliderIndex = 3

let colSlider, rowSlider, 
    sliderX, sliderY, fontSizeSlider

let switchOn = false,
    bttnSize = 50, 
    bkgdCol = 0, circleCol = 255
let tt = 'Hi.\nThis is a web-based experimental text editor that allows you to \nadjust letters and create \nunique characters.  \n\nPress any key to change \nPress enter/return to save as png'

function preload(){
 font = loadFont('Monoton-Regular.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  sssX = 30
  sssY = 28

  colSlider = createSlider(10, 100, 50, 1);
  colSlider.position(sssX, sssY*sliderIndex+1);
  colSlider.style('width', '80px');
  sliderIndex=sliderIndex+1
  
  rowSlider = createSlider(1, 300, 100, 1);
  rowSlider.position(sssX, sssY*sliderIndex+1)
  rowSlider.style('width', '80px');
  sliderIndex=sliderIndex+1
  
  sliderX = createSlider(-100, 100, 10, 1)
  sliderX.position(sssX, sssY*sliderIndex+1)
  sliderX.style('width', '80px')
  sliderIndex=sliderIndex+1
  
  sliderY = createSlider(5, 200, 10, 1)
  sliderY.position(sssX, sssY*sliderIndex+1)
  sliderY.style('width', '80px');
  colSlider.addClass("mySliderStyle")
  sliderIndex=sliderIndex+1
  
  fontSizeSlider = createSlider(150, 670, 350, 1);
  fontSizeSlider.position(sssX, sssY*sliderIndex+1);
  fontSizeSlider.style('width', '80px');
  sliderIndex=sliderIndex+1
}

function draw() {
  background(bkgdCol);
  
  rows = rowSlider.value()
  cols = colSlider.value()
  slX = sliderX.value()
  slY = sliderY.value()
  fontSize = fontSizeSlider.value()

  //graphic
  graphic = createGraphics(windowWidth, windowHeight)
  graphic.background(bkgdCol);
  graphic.textFont(font)
  graphic.textAlign(CENTER, CENTER)
  graphic.textSize(fontSize)
  graphic.text(alphabet, width/2, height/2)
  //lightg
  graphic.textSize(fontSize + 5)
  graphic.fill(211,211,211)
  graphic.text(alphabet, width/2 + 3, height/2 + 3)
  //grey-blue
  graphic.fill(112,128,144)
  graphic.text(alphabet, width/2 - 2, height/2 - 2)
  // white
  graphic.fill(circleCol)
  graphic.text(alphabet, width/2, height/2)
  
  for (let x = 0; x < width / rows ; x += 1){
    for (let y = 0; y < height / cols; y += 1){
      
      sinDistortionX = sin(0.05 + x * 0.5 + y * 0.9) * slX
      sinDistortionY = cos(0.05 + x * 0.5 + y * 0.9) * slY 
      
      let dx = x * rows
      let dy = y * cols 
      let dw = rows
      let dh = cols
      let sx = x * rows + sinDistortionX
      let sy = y * cols + sinDistortionY
      let sw = rows
      let sh = cols
      
    image(graphic, dx, dy, dw, dh, sx, sy+80, sw, sh)
    }
  }
  
  push()
  textSize(28)
  textAlign(LEFT)
  textStyle(ITALIC)
  text('BANDS, BLACK AND WHITE',30,70)  
  pop()

  push()
  textSize(13)
  textStyle(NORMAL)
  textAlign(LEFT, TOP)
  sstX = 120
  text('row', sstX, 85)  
  text('column', sstX, 113)
  text('x', sstX, 140 )
  text('y', sstX, 168)
  text('size', sstX, 197)  
  pop()

  //switch
  if (switchOn) {
    bkgdCol = color(255)
    circleCol = color(0)
    fill(0)
    noStroke()
  } else {
    bkgdCol = 0
    circleCol = color(255)
    noStroke()
    fill(255)
  }
  circle(windowWidth-70, 75, bttnSize)  
  
    if ((mouseX > windowWidth-80) && (mouseX < windowWidth-55) &&
    (mouseY > 115) && (mouseY < 140)) {
    textStyle(NORMAL)
    textSize(13)
    textAlign(RIGHT)
    text(tt,windowWidth-240,120,150,160)  
  } else {
    textStyle(NORMAL)
    textSize(24)
    textAlign(LEFT)
    text('ⓘ',windowWidth-80,132)  
  }
}

function mouseClicked() {
  let distance = dist(mouseX, mouseY, windowWidth-70, 75);
  if (distance <= bttnSize / 2) {
    switchOn = !switchOn;
  }
}
function keyTyped() {
  if (key === 'a') {
    alphabet = "A"
  } else if (key === 'b') {
    alphabet = "B"
  }else if (key === 'c') {
    alphabet = "C"
  }else if (key === 'd') {
    alphabet = "D"
  }else if (key === 'e') {
    alphabet = "E"
  }else if (key === 'f') {
    alphabet = "F"
  }else if (key === 'g') {
    alphabet = "G"
  }else if (key === 'h') {
    alphabet = "H"
  }else if (key === 'i') {
    alphabet = "I"
  }else if (key === 'j') {
    alphabet = "J"
  }else if (key === 'k') {
    alphabet = "K"
  }else if (key === 'l') {
    alphabet = "L"
  }else if (key === 'm') {
    alphabet = "M"
  }else if (key === 'n') {
    alphabet = "N"
  }else if (key === 'o') {
    alphabet = "O"
  }else if (key === 'p') {
    alphabet = "P"
  }else if (key === 'q') {
    alphabet = "Q"
  }else if (key === 'r') {
    alphabet = "R"
  }else if (key === 's') {
    alphabet = "S"
  }else if (key === 't') {
    alphabet = "T"
  }else if (key === 'u') {
    alphabet = "U"
  }else if (key === 'v') {
    alphabet = "V"
  }else if (key === 'w') {
    alphabet = "W"
  }else if (key === 'x') {
    alphabet = "X"
  }else if (key === 'y') {
    alphabet = "Y"
  }else if (key === 'z') {
    alphabet = "Z"
}}
function keyPressed() {
if (keyCode === ENTER) {
    save(graphic, "drawing#.png")
  }}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
