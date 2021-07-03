---
title: How to feel more at home
excerpt_separator: <!-- excerpt-end -->
---
{% capture about %}
{% capture content %}
This website incorporates an expanded poem, a series of mobile photographs, and interactive semi-generative audiovisual elements into a singular landing page. This work was born out of a desire to explore and articulate personal ideas of home, what (and who) makes one, and how to find meaning living in-between homes. It is inspired and expanded by an [Are.na channel](https://www.are.na/francesco-imola-2o2ng4qooxm/how-to-feel-more-at-home) by the same title that I started in 2020.

I built this site using [p5.js](https://p5js.org/), [Tone.js](https://tonejs.github.io/), and [Tonal](https://github.com/tonaljs/tonal). It might not work as intended on devices or browsers other than desktop Firefox and Chrome, and mobile iOS Chrome.
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture images %}
{%- include table_images.html url="assets/hftmah/htfmah1.png" alt="Screenshot of the site" -%}
{%- include table_images.html url="assets/hftmah/htfmah2.png" alt="Screenshot of the site" -%}
{%- include table_images.html url="assets/hftmah/htfmah.png" alt="Screenshot of the site" -%}
{% endcapture %}

{% capture links %}
{% capture content %}
- [Visit the work](http://https://francescoimola.github.io/htfmat/)
- [Check out the code](https://github.com/francescoimola/htfmat)
- [Explore the Are.na channel](https://www.are.na/francesco-imola-2o2ng4qooxm/how-to-feel-more-at-home)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture license %}
This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
{% endcapture %}


{%- include workpage_table.html text=about
img=images connections=links rights=license -%}