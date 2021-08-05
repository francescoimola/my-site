---
title: Feed Your Demons and Meet the Ally
excerpt_separator: <!-- excerpt-end -->
---
{% capture about %}
{% capture content %}
Cross-referencing mythology, pop culture, the supernatural, and digital selfhood, the works presented in this ZIP-compressed exhibition explore fears, desires, and obstacles artists face within themselves in times of crisis and isolation.

Feed Your Demons and Meet the Ally is curated by Magda Żołędź—of [ONE Project](https://one-project.co.uk/)—and I. We opened the exhibition on 2nd July 2020 with an online opening featuring interviews, Q&As, and workshops with artists in the show.
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture images %}
{%- include table_images.html url="assets/feedyourdemons/site.png" alt="The exhibition website, section on participating artists" caption="The exhibition website' section on participating artists" -%}
{%- include table_images.html url="assets/feedyourdemons/feed-your-demons.png" alt="The exhibition folder, extracted from a ZIP file" caption="The exhibition folder, extracted from a ZIP file"-%}
{% endcapture %}

{% capture links %}
{% capture content %}
* The exhibition has ended, but you can still [request the ZIP file via email](mailto:frn.imola@gmail.com?subject=Feed%20Your%20Demons%20and%20Meet%20the%20Ally%20-%20ZIP%20File&body=Hello!)
* [Read the documentation](https://feedyourdemons.cargo.site/)
* [Explore the Are.na channel](https://www.are.na/francesco-imola-2o2ng4qooxm/feed-your-demons-and-meet-the-ally)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture license %}
Documentation of this exhibition, excluding the artists' works, is licensed under the <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC 4.0 License</a>.
{% endcapture %}

{%- include workpage_table.html text=about
img=images connections=links rights=license -%}
