(function() {
  var headerHeight = 54;

  function categorizeByHref(anchors) {
    var result = {
      external: [],
      internal: [],
      dummy: []
    };
    var category, href;
    for (var i = 0; i < anchors.length; i++) {
      href = anchors[i].getAttribute("href");
      if (href.startsWith("#")) {
        if (href === "#") {
          category = "dummy";
        } else {
          category = "internal";
        }
      } else {
        category = "external";
      }
      result[category].push(anchors[i]);
    }
    return result;
  }

  function scrollToTarget(anchor) {
    var href = anchor.getAttribute("href");
    var targetId = href.slice(1);
    var target = document.getElementById(targetId);
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: "smooth"
      });
    });
  }

  var anchors = categorizeByHref(document.getElementsByTagName("a"));
  anchors.internal.forEach(scrollToTarget);
})();
