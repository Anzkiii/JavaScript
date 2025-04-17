
function getSentanceInformation(...sentances){
    let wordCount = 0;
    let letterCount = 0;
    let sentanceCount = 0;
    
    for (let i in sentances){

        for (let letter of sentances[i]){
            if (letter !== " "){
                letterCount++;
            }
        }
        wordCount += sentances[i].split(" ").length
        sentanceCount++;
    };
    return {
        wordCount: wordCount,
        letterCount: letterCount,
        sentanceCount: sentanceCount
    }
}



sentance = getSentanceInformation("Hello world", "ababa", "This isnt good");


console.log(sentance.wordCount);

console.log(sentance.letterCount);

