
const convertButton = document.querySelector(".convert-button")
const img = document.querySelector(".currency-img")




function convertValues() {
    let inputValue = document.querySelector("#input-value").value
    let input = document.querySelector(".currency-selector").value
    let anotherCoin = document.querySelector(".another-value")
    let currencyName = document.querySelector(".currency-name")
    const dolarToday = 4.93
    const euroToday = 5.31
    const libraToday = 6.19


    if (input == "dolar") {
        anotherCoin.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }
        ).format(inputValue / dolarToday)
        img.src = "assets/dolar.png"
    }

    if (input == "euro") {
        anotherCoin.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }
        ).format(inputValue / euroToday)

        currencyName.textContent = "Euro"
        img.src = "assets/euro.png"

    }

    if (input == "libra") {
        anotherCoin.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }
        ).format(inputValue / libraToday)

        currencyName.textContent = "Libra"
        img.src = "assets/libra.png"

    }

    


    let valorReal = document.querySelector(".real-value")
    valorReal.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }
    ).format(inputValue)



}


convertButton.addEventListener("click", convertValues)

