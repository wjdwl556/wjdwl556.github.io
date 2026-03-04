/* Portfolio enhancements - scroll animations, sticky header */
(function () {
  "use strict";

  function initStickyHeader() {
    const header = document.querySelector("header");
    const lead = document.getElementById("lead");
    if (!header || !lead) return;

    function onScroll() {
      const leadBottom = lead.offsetTop + lead.offsetHeight;
      if (window.pageYOffset > leadBottom - 80) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initScrollAnimations() {
    const sections = document.querySelectorAll("#about, #projects, #skills, #contact");
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(el);
    });

    document.head.insertAdjacentHTML(
      "beforeend",
      "<style>.animate-in{opacity:1!important;transform:translateY(0)!important;}</style>"
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initStickyHeader();
      initScrollAnimations();
    });
  } else {
    initStickyHeader();
    initScrollAnimations();
  }
})();
