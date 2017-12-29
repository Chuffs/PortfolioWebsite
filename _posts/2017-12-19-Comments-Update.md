---
layout: blog_post
title:  "Comments are now live!"
date:   2017-12-18
categories: ['site-update']
tags: ['jekyll', 'liquid']
---

Over the past few days I have been working on tweaking the look and feel of the entire blog page. I have attempted to go for a minimalist and clean design that is easy to read on all formats, from mobile to desktop - please let me know if there any issues with the styling of the website on certain platforms.

We now also have working comments. Previously there was a form that linked to a PHP file that sent the comment as an email to me. Now unfortunately, as we are using github pages to host this site, PHP is not supported, so we got a rather [angry unicorn](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08mouMO9hRq5nJ2VlS7X6kM6IH2RExh6pbXPCsWqwJP-n2USgLw){:target="_blank" class="blog-links"} when we tried to access that function.

There are many services out there that support embedding a comment function into blogs, sush as Disqus - which is quite a popular one. I was tempted to use Disqus, however I wanted a way to allow users to comment regardless of whether or not they had a Disqus account. I was adamant to get some form of commenting system working with Jekyll’s use of collections and scripting to send emails of the comments to me, and the use YAML front matter and liquid to sort through comments for each blog post.

Essentially the comments work by filtering through all the files located under the directory ‘_comments’ and sorting said files to their corresponding blog posts, using YAML front matter I can then specify who posted, when they posted and whether it is a new comment thread or reply to an existing comment. The submit comment works by the user selecting if they wish to submit a new comment (default) or reply to a comment thread already posted. The fields of the form then get sent to a Google spreadsheet script and emailed to me, which I then write up into markdown files for Jekyll to generate.

With my endeavours into coding this website and learning (the hard way) how Jekyll and Liquid/Ruby work, I am considering making a portfolio and project section explaining how I went about coding certain aspects of the site, as I feel it may be helpful to some new users of Jekyll - You can already find my website repository on [GitHub](https://github.com/Chuffs/MicroMattWebsite){:target="_blank" class="blog-links"}.

I think that will do for this blog post, hopefully all is well with the design of the website. I will start working on the other pages that my navbar and places link to.

Peace for now,
Matt
