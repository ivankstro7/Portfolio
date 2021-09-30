const web = document.getElementById("container-web");
const apps = document.getElementById("container-apps");
const webBtn = document.getElementById("web-btn");
const appsBtn = document.getElementById("apps-btn");
const historyWeb = document.getElementById("history-web");
const historyApps = document.getElementById("history-apps");


appsBtn.addEventListener("click", showApps);
webBtn.addEventListener("click", showWeb);

function showApps() {
    apps.style.display = "block"
    web.style.display = "none"
    historyApps.style.display = "block"
    historyWeb.style.display = "none"
    appsBtn.classList.add("active")
    webBtn.classList.remove("active")
}

function showWeb() {
    apps.style.display = "none"
    web.style.display = "block"
    historyApps.style.display = "none"
    historyWeb.style.display = "block"
    appsBtn.classList.remove("active")
    webBtn.classList.add("active")
}