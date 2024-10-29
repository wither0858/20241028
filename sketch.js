let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r =15
let angle =0
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================


function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.06
  });
  rectMode(CENTER)
  noFill()
  angleMode(DEGREES)
  //frameRate(10)
}

function draw() {
  background(255);
  noFill()
  for(let y=0; y<height; y=  y+120){
    for(let x=0; x<width; x= x+120){
      push()
        translate(x,y)
        stroke(255)
        for(let i=0;i<10;i=i+1){
          let r = map(sin(frameCount),-1,1,150,255)
          let g = map(cos(frameCount/2),-1,1,150,255)
          let b = map(sin(frameCount/4),-1,1,150,255)
          stroke(r,g,b)
          rotate(angle)
          rect(0,0,100-i*3,100-i*3,20)
          angle = sin(frameCount) * 30
        }
      pop()
    } 
  }    
  translate(width/2,height/2)
  rotate((frameCount/2)%360)
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y)
    fill("#59a96a")
    noStroke()
    ellipse(points[i].x+r*sin(angle+i*5),points[i].y+r*sin(angle+i*5),10)
    strokeWeight(3)
    stroke("#636940")
    line(points[i].x+r*sin(angle+i*5),points[i].y+r*sin(angle+i*5),points[i+1].x,points[i+1].y)
 } 
 angle = angle+10  

}
