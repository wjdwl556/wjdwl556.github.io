/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $wrapper = $("#wrapper"),
    $header = $("#header"),
    $banner = $("#banner");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"],
  });

  /**
   * Applies parallax scrolling to an element's background image.
   * @return {jQuery} jQuery object.
   */
  $.fn._parallax =
    browser.name == "ie" || browser.name == "edge" || browser.mobile
      ? function () {
          return $(this);
        }
      : function (intensity) {
          var $window = $(window),
            $this = $(this);

          if (this.length == 0 || intensity === 0) return $this;

          if (this.length > 1) {
            for (var i = 0; i < this.length; i++)
              $(this[i])._parallax(intensity);

            return $this;
          }

          if (!intensity) intensity = 0.25;

          $this.each(function () {
            var $t = $(this),
              on,
              off;

            on = function () {
              $t.css(
                "background-position",
                "center 100%, center 100%, center 0px"
              );

              $window.on("scroll._parallax", function () {
                var pos =
                  parseInt($window.scrollTop()) - parseInt($t.position().top);

                $t.css(
                  "background-position",
                  "center " + pos * (-1 * intensity) + "px"
                );
              });
            };

            off = function () {
              $t.css("background-position", "");

              $window.off("scroll._parallax");
            };

            breakpoints.on("<=medium", off);
            breakpoints.on(">medium", on);
          });

          $window
            .off("load._parallax resize._parallax")
            .on("load._parallax resize._parallax", function () {
              $window.trigger("scroll");
            });

          return $(this);
        };

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Clear transitioning state on unload/hide.
  $window.on("unload pagehide", function () {
    window.setTimeout(function () {
      $(".is-transitioning").removeClass("is-transitioning");
    }, 250);
  });

  // Fix: Enable IE-only tweaks.
  if (browser.name == "ie" || browser.name == "edge") $body.addClass("is-ie");

  // Scrolly.
  $(".scrolly").scrolly({
    offset: function () {
      return $header.height() - 2;
    },
  });

  // Tiles.
  var $tiles = $(".tiles > article");

  $tiles.each(function () {
    var $this = $(this),
      $image = $this.find(".image"),
      $img = $image.find("img"),
      $link = $this.find(".link"),
      x;

    // Image.

    // Set image.
    $this.css("background-image", "url(" + $img.attr("src") + ")");

    // Set position.
    if ((x = $img.data("position"))) $image.css("background-position", x);

    // Hide original.
    $image.hide();

    // Link.
    if ($link.length > 0) {
      $x = $link.clone().text("").addClass("primary").appendTo($this);

      $link = $link.add($x);

      $link.on("click", function (event) {
        var href = $link.attr("href");

        // Prevent default.
        event.stopPropagation();
        event.preventDefault();

        // Target blank?
        if ($link.attr("target") == "_blank") {
          // Open in new tab.
          window.open(href);
        }

        // Otherwise ...
        else {
          // Start transitioning.
          $this.addClass("is-transitioning");
          $wrapper.addClass("is-transitioning");

          // Redirect.
          window.setTimeout(function () {
            location.href = href;
          }, 500);
        }
      });
    }
  });

  // Banner.
  $banner.each(function () {
    var $this = $(this),
      $image = $this.find(".image"),
      $img = $image.find("img");

    // Parallax.
    $this._parallax(0.275);

    // Image.
    if ($image.length > 0) {
      // Set image.
      $this.css("background-image", "url(" + $img.attr("src") + ")");

      // Hide original.
      $image.hide();
    }
  });
})(jQuery);
