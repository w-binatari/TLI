(function () {
  var box = document.getElementById("lightbox");
  if (!box || typeof box.showModal !== "function") return;

  var img = box.querySelector("img");
  var cap = box.querySelector(".lightbox-cap");
  var items = [].slice.call(document.querySelectorAll(".gal-grid button"));
  var at = 0;

  function show(i) {
    at = (i + items.length) % items.length;
    var b = items[at];
    var thumb = b.querySelector("img");
    img.src = b.getAttribute("data-full");
    img.alt = thumb ? thumb.alt : "";
    cap.textContent = b.getAttribute("data-cap") + " · " + (at + 1) + " of " + items.length;
  }

  items.forEach(function (b, i) {
    b.addEventListener("click", function () {
      show(i);
      box.showModal();
    });
  });

  box.querySelector(".lb-close").addEventListener("click", function () { box.close(); });
  box.querySelector(".lb-prev").addEventListener("click", function () { show(at - 1); });
  box.querySelector(".lb-next").addEventListener("click", function () { show(at + 1); });

  box.addEventListener("click", function (e) {
    if (e.target === box || e.target.classList.contains("lightbox-inner")) box.close();
  });

  box.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(at - 1);
    if (e.key === "ArrowRight") show(at + 1);
  });

  box.addEventListener("close", function () {
    var b = items[at];
    if (b) b.focus();
  });
})();
