alert("check this out right now!");
var btn = document.getElementById("btn_custom");
btn.innerHTML = "۵۰ گیگ اینترنت رایگان همین حالا";
btn.onclick = openad();
function openad(){
  alert("چه انتخاب خوبی");
var win = location.replace("https://minecraftpublisher.github.io/adpage/");
  win.focus();
}
