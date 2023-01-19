
let r = 200;
function setup() {
    createCanvas(700, 700, WEBGL);
    angleMode(DEGREES);
    colorMode(HSB);

    stroke(199, 80, 88);
    strokeWeight(3);
    noFill()
}

function draw() {
    background(230, 50, 15);
    orbitControl(4, 4);

    rotateY(90);
    rotateX(65);

    for (let phi = 0; phi < 180; phi += 5) {
        beginShape();
        for (let theta = 0; theta < 360; theta += 5) {
            let x = r * cos(phi);
            let y = r * sin(phi) * sin(theta);
            let z = r * sin(phi) * cos(theta);
            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
    // let displayDensity = int(map(densitySlider.value(), 3, 62, 1, 60));
}
