---
layout: page
title: Home
id: home
permalink: /
description: I'm Francesco, London-based cultural producer connecting the dots between art and design.
---

<h1 style="margin: 1.1em 0 0.5em 0;">I make art projects, campaigns, events, and websites run smoothly. I also know a thing or two about creating art that runs on the web and curating low-impact exhibitions and interventions.</h1>

Have a look at [[What's at the top of my mind|what I've been up to recently]] or [get in touch](#contact){: .internal-link #inTouch} to discuss working together.

<script>
    let contacts = document.getElementById("detailsC");
    let startPoint = document.getElementById("inTouch");

    startPoint.onclick = function () {
      if (typeof contacts !== "undefined" && contacts.open) {
        return true;
      } else {
        contacts.toggleAttribute("open");
      }
    }
  </script>