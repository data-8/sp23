---
layout: home
title: Home
nav_order: 1
nav_exclude: false
permalink: index.html
seo:
  type: Course
  name: Data 8 Summer 2023
---

# Data 8: Foundations of Data Science

{: .mb-2 }
UC Berkeley, Summer 2023
{: .mb-2 .fs-6 .text-grey-dk-000 }

[Course Captures](https://bcourses.berkeley.edu/courses/1525580/external_tools/78985){: .btn .btn-blue}

## Announcements


{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}


{% assign mods = site.modules | where: 'class', 'Berkeley' %}
{% for module in mods %}
{{ module }}
{% endfor %}


<!--DARKMODE UNDER CONSTRUCTION-->
<br />

<button class="js-toggle-dark-mode dm-btn btn">Toggle Dark Mode</button>

<p class="dm-text">The Data 8 Website Dark Mode&trade; is in beta. You can provide feedback about the website <a href="https://forms.gle/64xx2B1Y7K32bNhR9" class="yellow-link">here</a></p>


<script src="assets/darkmode.js"></script>
<script>
  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

  jtd.addEvent(toggleDarkMode, 'click', function(){
    if (jtd.getTheme() === 'custom_dark') {
      jtd.setTheme('light');
      localStorage.setItem("darkMode", 0);
      toggleDarkMode.innerHTML = "Toggle Dark Mode";
      toggleDarkMode.classList.add('dm-btn');
        toggleDarkMode.classList.remove('dm-dark-btn');
    } else {
      jtd.setTheme('custom_dark');
      localStorage.setItem("darkMode", 1);
      toggleDarkMode.innerHTML = "Return to the Light";
      toggleDarkMode.classList.add('dm-dark-btn');
      toggleDarkMode.classList.remove('dm-btn');
    }
  });

    window.addEventListener("DOMContentLoaded", (event) => {
      onLoad();
  });
</script>