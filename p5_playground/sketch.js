
let height = 800;
let width = 1600;

class Walker{
    constructor(width = 800, height = 400){
        this.height = height;
        this.width = width;
    }
}

function setup(){
    createCanvas(width, height)
    frameRate(30)
    background(230)
}

function getDirection(){

    return floor(random(0,4))

}

const walker = new Walker();
let walkerArr = []


function draw(){

    stroke(70)
    strokeWeight(6)


    for (x in walkerArr){
        point(walkerArr[x].width, walkerArr[x].height)
    }

    switch (getDirection()){
        case 0:
            walker.width += 5;
            break;
        case 1:
            walker.width -= 5;
            break;
        case 2:
            walker.height += 5;
            break;
        case 3:
            walker.height -= 5;
            break
    }

    let alreadyVisited = walkerArr.some(prevWalker => walker.width === prevWalker.width && walker.height === prevWalker.height)

    if (!alreadyVisited){
        point(walker.height, walker.width)
        walkerArr.push(new Walker(walker.width, walker.height))
    }

    

}


