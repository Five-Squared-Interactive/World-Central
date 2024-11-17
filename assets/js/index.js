for (i = 1; i < 7; i++) {
    nameInput = document.getElementById("user-name-" + i);
    loadLink = document.getElementById("load-link-" + i);

    if (nameInput == null || loadLink == null) {
        continue;
    }

    if (nameInput.value == null) {
        loadLink.href = loadLink.href + "?USER_NAME=UNNAMED_USER";
    }
    else {
        loadLink.href = loadLink.href + "?USER_NAME=" + nameInput.value;
    }
}