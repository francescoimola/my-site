---
title: Three Years
excerpt_separator: <!-- excerpt-end -->
description: All the tweets, over a thousand of them, from my old Twitter account compiled in a book, installed in an exhibition, and read live uninterruptedly.  
---
<style>
    table.work tr:nth-child(4), table.work tr:nth-child(5) {
        display: revert;
        visibility: visible;
    }
    #paperback {
        margin-top: 0;
    }
</style>

{% capture about %}
{% capture content %}
In 2019, I downloaded the entire Twitter archive of over a thousand tweets from my old, now closed, account spanning nearly three years. I used this dataset to write a book, install it in an exhibition, and perform an uninterrupted 2:30 hrs live reading. As a believer in the power of journaling, I was interested in how presenting data as a stream of consciousness could tell the story of how it came to be published on social media.    

Three Years was launched and read live on 23 March 2019 at Heritage Gallery, University of Greenwich Galleries. It was displayed as part of [528](http://www.greenwichunigalleries.co.uk/fivetoeight/), a group show I co-curated with fellow students at the University of Greenwich.

To display the book, I handmade a custom single-bookshelf from a wooden pole in which the book is "slotted in" and installed this on a plinth. Designing _Three Years_ was my first attempt at book design. Since then, I have created several more physical designs, including posters, booklets, signage, and [[Everything You See Is In The Past|exhibition catalogues]].
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture images %}
{%- include table_images.html url="assets/three_years/mockup.png" alt="Book Mockup" caption="Book Mockup" -%}
{%- include table_images.html url="assets/three_years/installation.jpg" alt="Collage of the book's installation display from concept to creation and exhibition" caption="Collage of the book's installation display from concept to creation" -%}
{% endcapture %}

{% capture links %}
{% capture content %}
* [Read (PDF)](assets/three_years/Three_Years.pdf#view=FitV&pagemode=thumbs)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture purchase %}
{% capture content %}
### Paperback
* [Blackwells](https://blackwells.co.uk/bookshop/product/Three-Years-by-Imola-Francesco/9780244761820) (UK)
* [Lulu](https://www.lulu.com/en/gb/shop/francesco-imola/three-years/paperback/product-14q2wqw6.html?page=1&pageSize=4) (UK)
* [Book Depository](https://www.bookdepository.com/book/9780244761820) (UK and Selected Countries)
* [Barnes and Noble](https://www.barnesandnoble.com/w/three-years-francesco-imola/1131049662) (US and Selected Countries)
* [Amazon](https://amzn.to/34NvaSW) (Worldwide - Affiliate link)
* [Google Books](https://www.google.co.uk/books/edition/Three_Years/zxGKDwAAQBAJ) (Elsewhere)
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture specs %}
{% capture content %}
* Publisher: lulu.com 
* Paperback: 82 pages
* ISBN-10: 0244761825
* ISBN-13: 978-0244761820
* Dimensions: 14.81 x 0.48 x 20.98 cm
{% endcapture %}
{{ content | markdownify }}
{% endcapture %}

{% capture license %}
<i>Three Years</i> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0 license</a>. 
{% endcapture %}

{%- include workpage_table.html text=about
img=images connections=links rights=license field1_title="Purchase" field2_title="Specifications" field1_content=purchase field2_content=specs -%}