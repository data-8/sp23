

function onLoad() {
    var mode = localStorage.getItem("darkMode");

    if (mode == 1) {
        jtd.setTheme('custom_dark');
    }
}