function check() {
    var saldo = document.getElementById("saldo").value

if(saldo >= 25){
    document.getElementById("tekst").innerHTML ="je hebt voldoende saldo om 25 euro op te nemen"
}else{
    document.getElementById("tekst").innerHTML="Helaas, u heeft te weinig geld!"
}

}