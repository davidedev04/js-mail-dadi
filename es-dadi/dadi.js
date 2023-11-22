

const buttonGen = document.getElementById("genera_button");

// andiamo a dare dei comandi al bottone per generare i numeri
buttonGen.addEventListener("click",

    function buttonGen() {

        // generiamo un numero random da 1 a 6 a noi

        let number = Math.floor(Math.random() * 6) + 1;
        console.log(number);
        document.getElementById("number_us").innerHTML = number;

        // generiamo un numero random da 1 a 6 al computer

        let numberComputer = Math.floor(Math.random() * 6) + 1;
        console.log(numberComputer);
        document.getElementById("number_pc").innerHTML = numberComputer;

        // diamo una condizione di vincita / pareggio
        if (number < numberComputer) {
            document.getElementById("win_lose").innerHTML = "ha vinto il computer!!!";
        } else if (number > numberComputer) {
            document.getElementById("win_lose").innerHTML = "hai vinto tu!!!";
        } else {
            document.getElementById("win_lose").innerHTML = "avete pareggiato!!!";
        }

    }
);
