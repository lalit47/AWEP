
let likepost = function (likeid) {
    //console.log(likeid);

    let likevalue = likeid.children[0].innerHTML;
    let likecount = parseInt(likevalue);
    likecount++;
    likeid.children[0].innerHTML = likecount;

}


let dislikepost = function (dislikeid) {
    let dislikevalue = dislikeid.children[0].innerHTML;
    let dislikecount = parseInt(dislikevalue);
    dislikecount++;
    dislikeid.children[0].innerHTML = dislikecount;

}

function readvalue() {
    let usercomment = document.querySelector("#user-comment").value;

    if (usercomment != "") {
        let newelement = document.querySelector("#ref").cloneNode(true);
        newelement.children[0].innerHTML = usercomment;
        let commentBox = document.querySelector("#commentbox");
        newelement.style.visibility = "visible";
        commentBox.insertBefore(newelement, commentBox.firstChild);
        // commentBox.appendChild(usercomment);
        document.querySelector("#user-comment").value = "";
    }
    else {
        alert("Before clicking on comment .Please write something in the box");
    }
}

let deletecomment = function (delbtn) {
    delbtn.parentElement.remove();
}