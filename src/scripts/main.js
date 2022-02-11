import M from 'materialize-css'

document.addEventListener("DOMContentLoaded", function () {
  //var $divBouncing = $(".div-bounce");

  $(".div-bounce").each(function () {
    $(this).waypoint(
      function () {
        $(this.element).addClass("div-bouncing");
      }, {
        offset: "100%"
      }
    );
  });
  $("button").click(function () {
    let element = this;
    if (!element.attributes["actionapi"]) return;
    var a = element.attributes["actionapi"].textContent;
    $.ajax({
        url: `/requests/${a}`,
        type: "POST",
        context: document.body
      })
      .done(function (t) {
        var m = "Succes !";
        if (t.responseText) m = t.responseText;
        M.toast({
          html: m
        });
      })
      .fail(function (c) {
        var m = "Il y a eu une erreur";
        if (c.responseText) m = c.responseText;
        M.toast({
          html: m
        });
      });
  });

  var content =
    document.getElementsByClassName("menu-ul")[0].innerHTML +
    document.getElementsByClassName("navLeftSection")[0].innerHTML;
  var sidebarBody = document.querySelector("#hamburger-sidebar-body");
  var button = document.querySelector("#hamburger-button");
  var overlay = document.querySelector("#hamburger-overlay");
  //var html = document.querySelector("body");
  var activatedClass = "hamburger-activated";
  //var menu = document.querySelector(".navbar-options");

  //var buttonOptions = document.querySelector(".logged-image");
  //var activatedClassOptions = "visible";

  sidebarBody.innerHTML = content;

  button.addEventListener("click", function (e) {
    e.preventDefault();

    this.parentNode.classList.add(activatedClass);
  });

  button.addEventListener("keydown", function (e) {
    if (this.parentNode.classList.contains(activatedClass)) {
      if (e.repeat === false && e.which === 27)
        this.parentNode.classList.remove(activatedClass);
    }
  });

  overlay.addEventListener("click", function (e) {
    e.preventDefault();

    this.parentNode.classList.remove(activatedClass);
  });


  const checkbox = document.querySelector('.my-form input[type="checkbox"]');
  const btns = document.querySelectorAll(".my-form button");

  checkbox.addEventListener("change", function () {
    const checked = this.checked;
    for (const btn of btns) {
      checked ? (btn.disabled = false) : (btn.disabled = true);
    }
  });
});