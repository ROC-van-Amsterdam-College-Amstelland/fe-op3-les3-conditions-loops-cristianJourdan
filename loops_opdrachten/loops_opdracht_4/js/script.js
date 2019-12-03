var tekst="";
for(var i = 10; i <= 500; i += 10) {
    if (i==20 || i==40) {
        tekst +=i + ",dit is een mooi getal <br>";
    } else {
        tekst += i + "<br>";
    }
}
document.getElementById("bok").innerHTML = tekst;