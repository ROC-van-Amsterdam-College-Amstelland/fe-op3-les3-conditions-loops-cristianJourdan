function check() {
     var saldo = document.getElementById("saldo").value

    if(saldo == 500){
        document.getElementById("tekst").innerHTML="salaris boiis"
    }else if(saldo>500){
        document.getElementById("tekst").innerHTML= "Bonus BOII FEESIEE"
    }else{
        document.getElementById("tekst").innerHTML= "Helaas! u bent skheer!"  
    }

}