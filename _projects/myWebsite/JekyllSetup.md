---
layout: projectsintro
introPage: false
projectName: 'The micromatt Website'
title: 'Setup'
postnumber: 1
description: In this lesson we'll look into how we can write a dynamic website and have static files produced, so we can host it as a simple website, on services such as Github Pages.
---

Writing your own website gives you full control over the design and content of your site, it can also be an amazing learning opportunity to learn how webpages are coded and the technologies that go into making them.

This site was built at the back end of 2017 and the start of 2018 and was a part time project of mine. I enjoyed the design aspect of crafting my own aesthetically pleasing site and learning the coding behind. This project portfolio will go through the design aspects and coding challenges that I faced when building this website, in the hopes that it will help others achieve similar results in the future.

Preface: This portfolio assumes some basic knowledge of HTML and CSS. If you wish to learn more about HTML and CSS I would recommend visiting [w3schools](https://www.w3schools.com/) - I find this resource incredibly useful, and second to none in terms of the amount of information, tips and examples on HTML, CSS, Javascript and other web coding languages.

<!-- break -->
---

Project Files -

{% assign project-files = site.projects | where: "introPage", false %}
{% assign project-files = project-files | where: "projectName", page.projectName %}
{% for page in project-files %}
  - [{{ page.title }}]({{ page.url }})
    - {{ page.description }}
{% endfor %}
