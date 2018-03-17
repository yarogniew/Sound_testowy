var song;
var sliderVolume;
var sliderRate;
var sliderPan;


function setup() {
  createCanvas(200, 200);
  song = loadSound("szumy.mp3", loaded);
  background(120);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.position(20, 20);
  fill(0);
  text('vol', 20, 20);
  sliderRate = createSlider(0, 4, 1, 0.01);
  sliderRate.position(20, 60);
  text('rate', 20, 60);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  sliderPan.position(20, 100);
  text('pan', 20, 100);
}

function loaded(){
    song.play();
}

function draw(){


//  console.log(slider.value());
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());

}
