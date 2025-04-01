(function () {
    emailjs.init("dr4_J_qyry_lfjnXc");
})();

// funzione per inviare la mail
function sendEmail() {
    // valido il campo mail
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value;

    if (!isValidEmail(emailValue)) {
        mostraAlert("Inserisci un indirizzo email valido.", 'error');
        return; // Impedisci l'invio dell'email se l'email non è valida
    }

    // prendo i valori dal form
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_mbea7lf', 'template_guxuhaj', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("myForm").reset();
            mostraAlert("Messaggio inviato con successo!");
        }, function (error) {
            console.log('FAILED...', error);
            mostraAlert("Errore nell'invio del messaggio.", 'error'); // Mostra un alert di errore
        });
}

// funzione per mostrare l'alert di email inviata
function mostraAlert(messaggio, tipo = 'success', durata=3000) {
    var alertBox = document.getElementById("alertMessaggio");
    var alertTesto = document.getElementById("alertTesto");

    alertTesto.textContent = messaggio;
    alertBox.style.display = "block";

    // Imposta il colore in base al tipo di alert
    if (tipo === 'success') {
        alertBox.style.backgroundColor = "#4CAF50"; // Verde
    } else if (tipo === 'error') {
        alertBox.style.backgroundColor = "#f44336"; // Rosso
    } else {
        alertBox.style.backgroundColor = "#2196F3"; // Blu (info)
    }

    // Imposta la chiusura automatica
    setTimeout(function() {
        alertBox.style.display = "none";
    }, durata);
}

// funzione per chiudere l'alert
function chiudiAlert() {
    document.getElementById("alertMessaggio").style.display = "none";
}

// funzione per controllare il campo mail
function isValidEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

// hamburger menu
const hamburgerBtn = document.getElementById("hamburger-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const closeBtn = document.getElementById("close-btn");
        const mobileMenuLinks = document.querySelectorAll(".mobile-menu-list li a");

        hamburgerBtn.addEventListener("click", openMobileMenu);
        closeBtn.addEventListener("click", closeMobileMenu);
        mobileMenuLinks.forEach(link => {
            link.addEventListener("click", closeMobileMenu);
        });

        function openMobileMenu() {
            mobileMenu.classList.add("active");
            document.body.style.overflow = 'hidden'; /* Prevent scrolling */
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove("active");
            document.body.style.overflow = ''; /* Restore scrolling */
        }

        function handleMenuAction(sectionId) {
            closeMobileMenu(); // Close the menu
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }