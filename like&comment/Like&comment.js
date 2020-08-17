var likecounter = 1;
var counter = 1;
function like() {
    likecounter++;
    document.querySelector("#likeid").innerHTML = "LIKE" + likecounter;
}
function comment() {
    let newcomment = document.createElement("div");
    newcomment.textContent = "Comment" + counter;
    newcomment.style.backgroundColor = "royalblue";
    newcomment.style.marginBottom = "4px";
    document.querySelector("#commentbox");
    document.querySelector("#commentbox").appendChild(newcomment);
    counter++;
}