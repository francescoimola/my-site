---
title: University of Greenwich Galleries, 2018-2020
excerpt_separator: <!-- excerpt-end -->
description: Some of the projects I've worked on from my time at University of Greenwich Galleries.
---
{% capture about %}
{% capture content %}
Between 2018 and 2020 I assisted the production, design, delivery, and documentation of over 100 art, design, and architecture exhibitions & events at University of Greenwich Galleries. Here are some of the highlights from that time, alongside the core role(s) I played in the production of each project.
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture images %}
<div class="image">
    <img src="./assets/greenwichgal/default_mode_network.jpg" alt="Installation shot of Default mode network, Mhairi Vari & Pedro Pereira, 2016-2018" loading="lazy" tabindex="1">
    <small>Installation and de-install<br><a href="http://www.greenwichunigalleries.co.uk/sound-image-2018-exhibition/">Sound/Image (2018)</a><br>Installation shot of <i>Default mode network</i>, Mhairi Vari and Pedro Pereira, 2018</small>
</div>
<span class="fullscreen">
    <img src="./assets/greenwichgal/default_mode_network.jpg" alt="Installation shot of Default mode network, Mhairi Vari & Pedro Pereira, 2016-2018" loading="lazy">
</span>
<div class="image">
    <img src="./assets/greenwichgal/default_mode_network.jpg" alt="Installation shot of Default mode network, Mhairi Vari & Pedro Pereira, 2016-2018" loading="lazy" tabindex="1">
    <small>Installation and de-install<br><a href="http://www.greenwichunigalleries.co.uk/sound-image-2018-exhibition/">Sound/Image (2018)</a><br>Installation shot of <i>Default mode network</i>, Mhairi Vari and Pedro Pereira, 2018</small>
</div>
<span class="fullscreen">
    <img src="./assets/greenwichgal/default_mode_network.jpg" alt="Installation shot of Default mode network, Mhairi Vari & Pedro Pereira, 2016-2018" loading="lazy">
</span>
{% endcapture %}

{% capture links %}
{% capture content %}
- [Visit the Galleries' website and online archive](http://www.greenwichunigalleries.co.uk/)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture license %}
All photographs are licensed to Francesco Imola under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a> unless otherwise stated. The best effort has been taken to ensure artworks and artists are corretly credited. If you find any errors, please <a href="mailto:frn.imola@gmail.com?subject=Re%20Credits%20error%20on%20your%20website">let me know</a> and I will correct them.
{% endcapture %}

{%- include workpage_table.html text=about
img=images connections=links rights=license -%}
