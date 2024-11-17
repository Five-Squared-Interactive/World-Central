function LoadWorld(baseWorldURL, urlID) {
    nameInput = document.getElementById("user-name-" + urlID);
    if (nameInput != null) {
        window.location.href = baseWorldURL + "?USER_NAME=" + nameInput.value;
    }
}