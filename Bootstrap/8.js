window.addEventListener('load', () => {
    for (let i = 0; i < 10; i++) {
        let newelement = document.getElementById("childBlock");
        let cloneElement = newelement.cloneNode(true);
        cloneElement.style.display = "flex";
        cloneElement.style.visibility = "visible";
        let parent = document.getElementById("clone");
        parent.insertBefore(cloneElement, parent.firstChild);

    }
})