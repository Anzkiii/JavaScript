
let height = 800;
let width = 1600;

class Walker{
    constructor(width = 800, height = 400, burnedSide = []){
        this.height = height;
        this.width = width;
        this.burnedSide = burnedSide;
    }
}

function setup(){
    createCanvas(width, height)
    frameRate(3)
    background(150)
}

function chooseDirectionNumber(walker){
    let tries = [0, 1, 2, 3].filter(x => !walker.burnedSide.includes(x))

    if (tries.length === 0){
        return null;
    }

    let directionNumber = random(tries);

    walker.burnedSide = [];
    return directionNumber;
}

function chooseDirection(walker){  
    
    let directionNumber = chooseDirectionNumber(walker)

    if (directionNumber === null){
        return null;
    }

    
    if (directionNumber === 0 ) {
        walker.width += 5;
    } else if (directionNumber === 1) {
        walker.width -= 5;
    } else if (directionNumber === 2) {
        walker.height += 5;
    } else if (directionNumber === 3) {
        walker.height -= 5;
    }
    return directionNumber;
}  

const walker = new Walker();
let walkerArr = []


function draw(){
    strokeWeight(6)
    stroke(70)
    for (x of walkerArr){
        point(walkerArr.width, walkerArr.height)
    }

    let oldX = walker.width;
    let oldY = walker.height;

    let direction = chooseDirection(walker);
    
    if (direction === null){
        console.log("Walker is stuck!")
    }

    let alreadyVisited = walkerArr.some(prevWalker => walker.width === prevWalker.width && walker.height === prevWalker.height)

    if (!alreadyVisited){
        point(walker.width, walker.height)
        walkerArr.push(new Walker(walker.width, walker.height))
    } else{
        walker.burnedSide.push(direction)
        stroke(20, 20, 200)

        walker.width = oldX;
        walker.height = oldY;
        point(walker.width, walker.height)

    }
}


