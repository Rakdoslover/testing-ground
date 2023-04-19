// Targets the id:s for boxes
let imgBoxOne = document.getElementById("imgbox1");
let imgBoxTwo = document.getElementById("imgbox2");
let imgBoxThree = document.getElementById("imgbox3");
let imgBoxFour = document.getElementById("imgbox4");

// Targets for the buttons


//listeners


function resetElement(event) {
    imgBoxOne.style.display = "none";
    imgBoxTwo.style.display = "none";
    imgBoxThree.style.display = "none";
    imgBoxFour.style.display = "none";
}


document.getElementById("create-element").onclick = function createElement() {
    document.getElementById("imgbox1").style.display = "block";
    document.getElementById("imgbox2").style.display = "block";
    document.getElementById("imgbox3").style.display = "block";
    document.getElementById("imgbox4").style.display = "block";

}