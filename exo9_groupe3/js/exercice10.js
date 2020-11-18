function valid_credit_card(value) {
    if (value.length != 16) return false;
    if (/[^0-9-\s]+/.test(value)) return false;

    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}

let bankAccount = {
    amount: 1000,
    donation: function (giftAmount) {
        this.amount -= giftAmount
    }
}

console.log("Solde de base : " + bankAccount.amount + "€")

$("#validation").click(function(){

    let name = $("#name").val()
    let cbnumber = $("#cbnumber").val()

    if(name === ""){
        console.log("Veuillez saisir votre nom.")
    }
    else {
        if(valid_credit_card(cbnumber)){

            let giftAmount = 100

            if(bankAccount.amount >= giftAmount){
                bankAccount.donation(giftAmount)
                $("body").append(name + " a donné " + giftAmount + "€.<br>")
                console.log("Vous avez donné " + giftAmount + ".")
                console.log("Nouveau solde " + bankAccount.amount + "€.")
            }
            else console.log("Solde insuffisant")
        }
        else console.log("Numéro de carte de crédit éronné")
    }
})