function check() {
    var tekst = "";
    for (i = 0; i <= 1000; i++) {
        if (i == 666) {
            tekst += i + " kiekeboe<br>";
        } else {
            tekst += i + "<br>"
        }

        console.log(i);
    }
    document.getElementById("tekst").innerHTML = tekst;

}