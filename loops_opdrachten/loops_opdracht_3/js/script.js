var tekst="";
for(var i = 1; i <= 50; i += 1) {
    if (i==20 || i==40) {
        tekst +=i + ",dit is een mooi getal <br>";
    } else {
        tekst += i + "<br>";
    }
}
document.getElementById("bok").innerHTML = tekst;