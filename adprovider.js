alert("check this out right now!");
var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "نصب بهترین برنامه ها";
btn.onclick = openad();
function openad(){
var win = window.open("http://minecraftpublisher.github.io", '_blank');
  win.focus();
}
