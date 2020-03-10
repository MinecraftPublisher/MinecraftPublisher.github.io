alert("check this out right now!");
var btn = document.getElementById("btn_custom");
btn.innerHTML = "<font color=red><h1>۵۰ گیگ اینترنت رایگان همین حالا</h1></font>";
btn.onclick = openad();
function openad(){
  alert("چه انتخاب خوبی");
var win = location.replace("https://minecraftpublisher.github.io/adpage/");
  win.focus();
}
