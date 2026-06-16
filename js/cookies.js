document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookiePopup").classList.add("show");
    }
});

function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookiePopup").style.display = "none";
}
