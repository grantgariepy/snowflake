function setup() {
  createCanvas(800,800);
  background(0);
}

function draw() {

  translate(width/2,height/2);

  let mx = mouseX - width/2;
  let my = mouseY - width/2;
  let pmx = pmouseX - width/2;
  let pmy = pmouseY - width/2;

  if (mouseIsPressed) {
    stroke(255);

    for (let i = 0; i < 6; i++){
      let d = dist(mouseX,mouseY,pmouseX,pmouseY)
      let sw = map(d, 0, 20, 20, 1);
      strokeWeight(sw);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }

}
