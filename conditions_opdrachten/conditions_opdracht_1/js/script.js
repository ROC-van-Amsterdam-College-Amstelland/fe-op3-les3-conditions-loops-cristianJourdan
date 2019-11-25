function check() {
        var saldo = document.getElementById("saldo").value

    if(saldo<25){
        document.getElementById("tekst").innerHTML ="Helaas, u heeft te weinig geld!"
    }else{
        document.getElementById("tekst").innerHTML="."
    }

}