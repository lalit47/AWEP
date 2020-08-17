function original() {
    let org = document.querySelector("div").children[0];
    org.innerHTML = "HELLO! HOW ARE YOU?";
    org.style.background = "indianred";
    org.style.color = "white";
}
function change() {
    let change = document.querySelector("div").children[0];
    change.innerHTML = "I AM FINE";
    change.style.background = "red";
    change.style.color = "black";
}