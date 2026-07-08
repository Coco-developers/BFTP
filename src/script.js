document.addEventListener("DOMContentLoaded", () => {
    const modeButton = document.getElementById("mode-button");
    const body = document.body;

    modeButton.style.visibility = "visible";
    modeButton.innerText = "Dark Mode";
    let isDark = true;

    modeButton.addEventListener("click", e => {
        e.preventDefault();
        body.style.backgroundColor = isDark ? "black" : "white";
        modeButton.innerText = isDark ? "Light Mode" : "Dark Mode";
        isDark = !isDark;
    });
});