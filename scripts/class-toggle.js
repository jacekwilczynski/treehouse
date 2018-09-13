(function() {
  var controls = document.querySelectorAll("[data-toggle-class]");
  for (var i = 0; i < controls.length; i++) {
    var control = controls[i];
    control.addEventListener("click", function() {
      var className = control.dataset.toggleClass;
      var targets = document.querySelectorAll(control.dataset.target);
      for (var j = 0; j < targets.length; j++) {
        targets[j].classList.toggle(className);
      }
    });
  }
})();
