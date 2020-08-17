
/*let likepost = function (likeid) {
    console.log(likeid);
    likecount++;
    likeid.innerHTML = "LIKE" + likecount;

}*/

let likepost = function (likeid) {
    //console.log(likeid);

    let likevalue = likeid.children[0].innerHTML;
    let likedigit = parseInt(likevalue);
    likedigit++;
    likeid.children[0].innerHTML = likedigit;

}

function readvalue() {
    let usercomment = document.querySelector("#user-comment").value;
    let newelement = document.querySelector("#ref").cloneNode(true);

    newelement.children[0].innerHTML = usercomment;
    let commentBox = document.querySelector("#commentbox");
    newelement.style.visibility = "visible";
    commentBox.insertBefore(newelement, commentBox.firstChild);
    commentBox.appendChild(usercomment);
    document.querySelector("#user-comment").value = "";
}

let deletecomment = function (delbtn) {
    delbtn.parentElement.remove();
}