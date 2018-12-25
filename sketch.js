let numbers = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 
    0x70, 0x7F, 0x7B, 0x77, 0x1F, 0x4E, 0x3D, 0x4F, 0x47];

let index = 0;
function setup () {
    createCanvas(400, 400)
    frameRate(1)
}

function draw () {
    background(255);    
    segments(numbers[index]);
    index = (index + 1) % numbers.length;
}

function getColor (val, shift) {
    let on = (val >> shift) & 1;
    let r = 255 * on;     // We get either zero or one.
    return color(r, 0, 0, on)
}

function segments (val) {
    noStroke();
    colorMode(RGB, 1)
    // A
    fill(getColor(val, 6))
    rect (60, 20, 100, 20);
    // B
    fill(getColor(val, 5))
    rect (160, 40, 20, 100);
    // C
    fill(getColor(val, 4))
    rect (160, 160, 20, 100);
    // D
    fill(getColor(val, 3))
    rect (60, 260, 100, 20);
    // E
    fill(getColor(val, 2))
    rect (40, 160, 20, 100);
    // F
    fill(getColor(val, 1))
    rect (40, 40, 20, 100);
    // G
    fill(getColor(val, 0))
    rect (60, 140, 100, 20);
}