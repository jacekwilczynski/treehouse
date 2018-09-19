(function activateToggleClass() {
  var controls = document.querySelectorAll("[data-toggle-class]");
  for (var i = 0; i < controls.length; i++) {
    var control = controls[i];
    control.addEventListener("click", function(e) {
      e.stopPropagation();
      var className = control.dataset.toggleClass;
      var targets = document.querySelectorAll(control.dataset.target);
      for (var j = 0; j < targets.length; j++) {
        targets[j].classList.toggle(className);
      }
    });
  }
})();

(function activateRemoveClass() {
  var controls = document.querySelectorAll("[data-remove-class]");
  for (var i = 0; i < controls.length; i++) {
    var control = controls[i];
    control.addEventListener("click", function(e) {
      e.stopPropagation();
      var className = control.dataset.removeClass;
      var targets = document.querySelectorAll(control.dataset.target);
      for (var j = 0; j < targets.length; j++) {
        targets[j].classList.remove(className);
      }
    });
  }
})();
