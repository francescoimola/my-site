---
title: In The Aisles
excerpt_separator: <!-- excerpt-end -->
---


{% capture about %}
{% capture content %}
In the Aisles is an interactive experience built around, and in homage of, the homonymous [story by Clemens Meyer](https://www.thewhitereview.org/fiction/in-the-aisles/) (later adapted into the movie _In den Gängen_). I built this site with [Twine](https://twinery.org/), an open-source tool for telling nonlinear stories, by combining several elements. 

Crucial to the experience are the extracts from the story, interrupted by numerous PDF to HTML exports of sketches on paper illustrating how I imagined the narrated environment. These exports created natural errors "in translation" that I deliberately included as part of the experience. The site homepage also displays a GIF of a CAD model of a forklift, suggesting yet another link to the warehouse where the story takes place. The soundtrack you hear looped throughout the site is a piece of music I composed in response to reading the original story.
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture images %}
{%- include table_images.html url="assets/the_aisles/In-the-Aisles-1.png" alt="Screenshot of the site homepage" -%}
{%- include table_images.html url="assets/the_aisles/In-the-Aisles-2.png" alt="Screenshot of the site homepage" -%}
{% endcapture %}

{% capture links %}
{% capture content %}
* [Visit _In The Aisles_](https://francescoimola.github.io/In-The-Aisles/)
* [Code](https://github.com/francescoimola/In-The-Aisles)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture license %}
Un-licensed under a <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener" rel="noreferrer">CC0 Public Domain Dedication</a>. I dedicate all copyright interests of this work to the public domain.
{% endcapture %}

{%- include workpage_table.html text=about
img=images connections=links rights=license -%}
