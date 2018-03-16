var song;
var slider;


function setup() {
  createCanvas(200, 200);
  song = loadSound("szumy.mp3", loaded);
  slider = createSlider(0, 1, 0.5, 0.01)
}

function loaded(){
    song.play();
}

function draw(){
  background(random(0,255));
//  console.log(slider.value());
    song.setVolume(slider.value());
}
