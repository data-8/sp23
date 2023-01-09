---
layout: home
title: Home
nav_order: 1
nav_exclude: false
permalink: index.html
seo:
  type: Course
  name: Data 8 Spring 2023
---

# Data 8: Foundations of Data Science

{: .mb-2 }
UC Berkeley, Spring 2023
{: .mb-2 .fs-6 .text-grey-dk-000 }

[Site Under Construction](#){: .btn .btn-yellow}

<!--[Lecture Zoom Link](https://berkeley.zoom.us/j/96844490266){: .btn .btn-blue}-->

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

### Darkmode Test

<button class="js-toggle-dark-mode">Toggle Dark Mode</button>


<script>
const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

jtd.addEvent(toggleDarkMode, 'click', function(){
  if (jtd.getTheme() === 'dark') {
    jtd.setTheme('light');
  } else {
    jtd.setTheme('custom_dark');
  }
});
</script>

