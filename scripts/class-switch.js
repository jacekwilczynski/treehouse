(function activateClassSwitches() {
  var allowedBehaviors = ["add", "remove", "toggle"];

  var controls = document.getElementsByClassName("js-class-switch");
  for (var i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", function(e) {
      var control = e.currentTarget;
      var behavior = control.dataset.switchBehavior;
      if (allowedBehaviors.indexOf(behavior) < 0) return;
      var className = control.dataset.switchClass;
      var targets = document.querySelectorAll(control.dataset.switchTarget);
      for (var j = 0; j < targets.length; j++) {
        targets[j].classList[behavior](className);
      }
      e.stopPropagation();
    });
  }
})();
