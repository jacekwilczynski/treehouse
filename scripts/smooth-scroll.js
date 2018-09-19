(function() {
  function getInnerLinks() {
    var links = document.getElementsByTagName("a");
    var innerLinks = [];
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute("href");
      if (href && href[0] === "#") innerLinks.push(links[i]);
    }
    return innerLinks;
  }

  var innerLinks = getInnerLinks();
  innerLinks.forEach(function(link) {
    var href = link.getAttribute("href");
    var targetId = href.slice(1);
    var target = document.getElementById(targetId);
    link.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 54,
        behavior: "smooth"
      });
    });
  });
})();
