var counter = 1;
var likecounter = 1;
function comment() {
    let newcomment = document.createElement("div");
    newcomment.textContent = "Comment" + counter;
    newcomment.style.background = "blue";
    newcomment.style.color = "white";
    newcomment.style.margin = "4px"

    document.querySelector("#commentbox");
    document.querySelector("#commentbox").appendChild(newcomment);

    counter++;

}






function like() {
    likecounter++;
    document.querySelector('#likeid').innerHTML = "LIKE" + likecounter;

}