for (i = 1; i < 7; i++) {
    const nameInput = document.getElementById("user-name-" + i);
    const loadLink = document.getElementById("load-link-" + i);

    if (nameInput == null || loadLink == null) {
        continue;
    }

    nameInput.addEventListener("input", function(evt) {console.log("sfdf " + loadLink.href);
        if (loadLink.href.includes("?USER_NAME=")) {
            loadLink.href = loadLink.href.substring(0, loadLink.href.indexOf("?USER_NAME="));
        }
        if (nameInput.value == null || nameInput.value == "") {
            loadLink.href = loadLink.href + "?USER_NAME=NEW_USER";
        }
        else {
            loadLink.href = loadLink.href + "?USER_NAME=" + nameInput.value;
        }console.log(loadLink.href);
    });

    if (nameInput.value == null || nameInput.value == "") {
        loadLink.href = loadLink.href + "?USER_NAME=NEW_USER";
    }
    else {
        loadLink.href = loadLink.href + "?USER_NAME=" + nameInput.value;
    }
}