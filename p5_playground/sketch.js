

let height = 800;
let width = 1600;

function setup(){
    createCanvas(width, height);
}

let inc = 0.01; // controls how "stretched" the wave is

function draw() {
    background(222);

    let yoff = 0;
    loadPixels()
    for (let x = 0; x < width; x++) {
        let xoff = 0;
        for (let y = 0; y < height; y++){

            let index = (x + y * width) *  4
            
            let n = (noise(xoff, yoff) * 255) 
            pixels[index + 0] = n 
            pixels[index + 1] = n 
            pixels[index + 2] = n 
            pixels[index + 3] = 255
            xoff += inc;
        }
        yoff += inc;
    }
    
    updatePixels()
    noLoad();
}



