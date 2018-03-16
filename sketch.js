var song;
var sliderVolume;
var sliderRate;
var sliderPan;


function setup() {
  createCanvas(200, 200);
  song = loadSound("szumy.mp3", loaded);
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 3, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded(){
    song.play();
}

function draw(){
  background(random(0,255));
//  console.log(slider.value());
    song.setVolume(sliderVolume.value());
    song.rate(sliderRate.value());
    song.pan(sliderPan.value());

}
