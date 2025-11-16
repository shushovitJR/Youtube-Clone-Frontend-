function togglemenu() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.querySelector("main");

    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        main.style.marginLeft = "200px"; // same as sidebar width
    } else {
        sidebar.style.display = "none";
        main.style.marginLeft = "0px";
    }
}
