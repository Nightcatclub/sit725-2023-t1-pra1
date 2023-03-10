function changeText(){
    var textsArray = ["Text 1","Text 2", "Text 3", "Text 4", "Text 5"]
    var number = getRandomNumber()
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];

}

function getRandomNumber() {
    return Math.floor(Math.random() * 5);

}