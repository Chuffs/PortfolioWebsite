---
layout: projectsintro
introPage: true
projectName: 'My Website'
title: 'The micromatt Website'
postnumber: 0
description: In this project portfolio I detail how I went about creating my website using Jekyll & GitHub Pages, in the hopes that my struggles help someone create their own with a little more ease.

permalink: /projects/My_Website/intro/
---

Writing your own website gives you full control over the design and content of your site, it can also be an amazing learning opportunity to learn how webpages are coded and the technologies that go into making them.

This site was built at the back end of 2017 and throughout 2018 & 2019 and was a part time project of mine. I enjoyed the design aspect of crafting my own aesthetically pleasing site and learning the coding behind. This project portfolio will go through the design aspects and coding challenges that I faced when building this website, in the hopes that it will help others achieve similar results in the future.

Preface: This portfolio assumes some basic knowledge of HTML and CSS. If you wish to learn more about HTML and CSS I would recommend visiting [w3schools](https://www.w3schools.com/){:target="_blank" class="blog-links"} - I find this resource incredibly useful, and second to none in terms of the amount of information, tips and examples on HTML, CSS, Javascript and other web coding languages.

---

Project Files:

{% assign project-files = site.projects | where: "introPage", false %}
{% assign project-files = project-files | where: "projectName", page.projectName %}
{% assign lessonNumber = 1 %}
{% for page in project-files %}
  - <a href="{{page.url}}"> Lesson {{lessonNumber}} -  {{ page.title }} </a>
    - {{page.description}}
{% assign lessonNumber = lessonNumber | plus: 1 %}
{% endfor %}

---
