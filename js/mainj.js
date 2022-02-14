let valeurInitiale = Math.random() * 100;

let valeurArrondi = Math.round(valeurInitiale);

function checkNumber() {
    let choice = document.getElementById("maValeur").value;
    let responseBody = document.getElementById("response");

    if (isNaN(choice)) {
        alert("Entrez un nombre avant que je me fâche");
    } else {
        console.log(valeurArrondi);

        if (choice > valeurArrondi) {
            responseBody.innerHTML = "Trop grand !";
            responseBody.setAttribute("style", "color:red");
        }
        if (choice < valeurArrondi) {
            responseBody.innerHTML = "Trop petit !";
            responseBody.setAttribute("style", "color:red");
        }
        if (choice == valeurArrondi) {
            responseBody.innerHTML = "GG tu as trouvé !!!";
            responseBody.setAttribute("style", "color:green");
        }
    }

}