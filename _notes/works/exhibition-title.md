---
title: Exhibition Title Bot
excerpt_separator: <!-- excerpt-end -->
description: An autonomous bot generated a new exhibition title for a fictional art exhibition every day for two years between 2018 and 2021. It stopped posting after writing and posting over 500 titles, from the hilarious to the most grotesque.
---

{% capture about %}
{% capture content %}
Exhibition Title Bot is an autonomous program that generated a new exhibition title for a fictional art exhibition every day for two years between 2018 and 2021. It stopped posting after writing and posting over 500 titles, from the hilarious to the most grotesque.

I built the bot using the [Bright Spiral editor](https://www.brightspiral.com/tracery/) and [Cheap Bots Done Quick](https://cheapbotsdonequick.com/) to automate the posting. This work is inspired by [another exhibition title generator](http://www.mit.edu/~ruchill/lazycurator.submit.html) built by Rebecca Uchill & Ben Guaraldi.
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture images %}
{%- include table_images.html url="assets/exhibit_title/exhibition-title.png" alt="Single tweet from the bot reading 'Apposite Softheartedness'" -%}
{%- include table_images.html url="assets/exhibit_title/mockup.png" alt="Mockup of tweets from the Twitter bot" -%}
{% endcapture %}

{% capture links %}
{% capture content %}
[Read the tweets](https://twitter.com/exhibit_title)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture license %}
Un-licensed under a <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 Public Domain Dedication</a>. I dedicate all copyright interests of this work to the public domain.
{% endcapture %}

{%- include workpage_table.html text=about
img=images connections=links rights=license -%}
