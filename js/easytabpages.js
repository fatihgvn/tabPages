// TAB PAGES JS
var tabpages = document.body.querySelectorAll(".tab-container");
tabpages.forEach(function(e){
  var buttons = e.querySelectorAll(".button ul li");
  var pages = e.querySelectorAll(".page .item");
  buttons.forEach(function(b,i){
    //bin.className = "";
    b.addEventListener("click",function () {

      buttons.forEach(function(bin){bin.className = "";});;
      this.className = "active";

      pages.forEach(function (pin,indis) {
        pin.className = "item";
      });
      pages[i].className = "item active";
    });
  });
});
