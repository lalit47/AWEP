window.addEventListener('load', () => {
    for (i = 0; i < 10; i++) {
        let newElement = document.getElementById("cloneid").cloneNode(true);
        let oldElement = document.getElementById("clonecontainer");
        oldElement.insertBefore(newElement, oldElement.firstChild);
        newElement.style.visibility = "visible";

    }
})