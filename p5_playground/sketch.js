

let height = 660;
let width = 1515;

class pnt{
    constructor(){
        this.height = 0;
        this.width = 0;
    }
}
pntArray = []
for (let x = 0; x < width; x++){
    pntArray.push(new pnt())
}

function setup(){
    createCanvas(width, height);
}

function draw(){
    background(222);
    

    for (var x = 0; x < width; x++){
        let noiseValue = noise(x * 0.01, frameCount * 0.005)
        pntArray[x].height = map(noiseValue, 0, 1, 0, height)
        pntArray[x].width = x
    
        let pointerHeight = pntArray[x].height;
        let pointerWidth = x
    
        strokeWeight(6)
        point(pointerWidth, pointerHeight)
    }

}
