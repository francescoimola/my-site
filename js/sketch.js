function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

// prevent touch gestures from dragging the page on touchscreens
function touchMoved() {
    return false
}

function draw() {
    if (mouseIsPressed) {
        hatching(16, 86, 125, 50, 1, 3)
    }
}

function hatching(r, g, b, alpha, strokeweight, lerptimes) {
    // set the color and brush style
    stroke(r, g, b, alpha);
    strokeWeight(strokeweight);

    // calculate the speed of the mouse
    let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

    // make a vector by inverting X and Y values
    const vector = createVector(mouseY - pmouseY, mouseX - pmouseX)

    // set the vector magnitude (the line length) based on the mouse speed
    vector.setMag(speed / 2)

    // repeat the line with lerping
    for (let i = 0; i < lerptimes; i++) {

        // find the lerped X and Y coordinates
        const x = lerp(mouseX, pmouseX, i / lerptimes)
        const y = lerp(mouseY, pmouseY, i / lerptimes)

        // draw a line
        line(x - vector.x, y - vector.y, x + vector.x, y + vector.y)
    }
}