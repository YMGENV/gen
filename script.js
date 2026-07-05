document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  // Duplicate ticker content once so the marquee loop is seamless
  var track = document.querySelector(".ticker-track");
  if (track && !track.dataset.doubled) {
    track.innerHTML += track.innerHTML;
    track.dataset.doubled = "true";
  }

  // Video card placeholders: no live video attached yet
  document.querySelectorAll(".video-card").forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = "contact.html#contact-form";
    });
  });
});
