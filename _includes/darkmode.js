const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'custom_dark') {
    jtd.setTheme('light');
    localStorage.setItem("darkMode", 0);
  } else {
    jtd.setTheme('custom_dark');
    localStorage.setItem("darkMode", 1);
  }
});

window.addEventListener("load", (event) => {
    onLoad();
  });


function onLoad() {
    var mode = localStorage.getItem("darkMode");

    if (mode == 1) {
        jtd.setTheme('custom_dark');
    }
}