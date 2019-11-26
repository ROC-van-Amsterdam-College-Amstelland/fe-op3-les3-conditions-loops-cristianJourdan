var getallen = ["1", "2", "3", "4", "5"];
var text = "";
var i;
for (i = 0; i < getallen.length; i++) {
  text += getallen[i] + "<br>";
}
document.getElementById("loop").innerHTML = text;