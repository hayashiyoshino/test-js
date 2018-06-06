window.addEventListener("load",function () {
  var btn = document.querySelector("input");

  function printHello() {
    console.log("Hello world");
  }

  btn.addEventListener("click", printHello);
});



