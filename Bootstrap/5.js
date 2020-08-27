

function like(likebtn) {
    let likevalue=likebtn.children[0].innerHTML;
    let likecount=parseInt(likevalue);
    likecount++;
    likebtn.children[0].innerHTML = likecount; 

}


function dislike(dislikebtn) {
    let dislikevalue=dislikebtn.children[0].innerHTML;
    let dislikecount=parseInt(dislikevalue);
    dislikecount++;
    dislikebtn.children[0].innerHTML = dislikecount;

}