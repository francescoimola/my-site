---
title: Everything You See Is In The Past
permalink: /everything-you-see
---
{% capture about %}
{% capture content %}
A curatorial research project and exhibition exploring the impact of the internet and contemporary digital culture on the practice of artist-curators. 
The project began in September 2019 and culminated in May 2020 with an exhibition—opened with a virtual tour—and accompanying catalogue. The exhibition featured works from Enes Alba, Atom Chen, Dario Bucheli, and Perce Jerrom. And the catalogue included interviews and Q&As with Lisa Barnard, Pita Arreola-Burns, Elliott Burns, Valentina Peri, Ghislaine Boddington, and Walter Corneli. I also wrote an in-depth [examination of the curatorial process](https://www.are.na/francesco-imola-2o2ng4qooxm/eysiitp-project-portfolio-francesco-imola), with which I graduated in Digital Arts from the University of Greenwich in 2020.
The name for this project pays homage to a homonimous [work](http://www.everythingyouseeisinthepast.com/) and [exhibition](http://www.postmastersart.com/archive/rozendaal13/rozendaal13.html) by artist Rafaël Rozendaal.
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture images %}
{%- include table_images.html url="assets\everythingyousee\Catalogue-gif.gif" alt="GIF of the exhibition catalogue" caption="GIF of the exhibition catalogue" -%}
{%- include table_images.html url="assets\everythingyousee\site.png" alt="Screenshot of the exhibition website's homepage" caption="The exhibition website's homepage"-%}
{%- include table_images.html url="assets/everythingyousee/opening.png" alt="Still from the online opening event" caption="Still from the online opening event"-%}
{% endcapture %}

{% capture links %}
{% capture content %}
- [Read the exhibition catalogue](https://arena-attachments.s3.amazonaws.com/7413063/c6f7ebaf91a84dd94ae368676d6010a2.pdf?1590356387)
- [Explore the documentation](https://www.are.na/francesco-imola-2o2ng4qooxm/eysiitp-project-portfolio-francesco-imola)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture license %}
This exhibition and its catalogue, excluding the artists' works, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
{% endcapture %}

{%- include workpage_table.html text=about
img=images connections=links rights=license -%}
