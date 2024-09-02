document.addEventListener("DOMContentLoaded", function() {
    const loadingVideo = document.getElementById("loading-video");

    // Odblokowanie dźwięku i odtwarzanie wideo na każdej platformie
    loadingVideo.play();

    // Po zakończeniu odtwarzania wideo ukryj ekran ładowania i pokaż treść strony
    loadingVideo.onended = function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    };

    // Data otwarcia - 5 października 2024
    const countdownDate = new Date("October 5, 2024 00:00:00").getTime();

    // Funkcja odliczania
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Aktualizacja wartości na stronie
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // Po zakończeniu odliczania
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown-title").innerText = "Strona już otwarta!";
            document.getElementById("timer").innerText = "";
        }
    }, 1000); // Odświeżanie co sekundę

    // Funkcja zmiany języka
    function setLanguage(language) {
        document.getElementById("page-title").textContent = translations[language].title;
        document.getElementById("main-title").textContent = translations[language].mainTitle;
        document.getElementById("main-message").textContent = translations[language].mainMessage;
        document.getElementById("countdown-title").textContent = translations[language].countdownTitle;
        document.getElementById("facebook-button").textContent = translations[language].facebookButton;
    }

    const translations = {
        pl: {
            title: "Octosport.EU - Wkrótce Otwarcie",
            mainTitle: "Wkrótce Otwarcie!",
            mainMessage: "Przygotowujemy dla Ciebie coś wyjątkowego. Już wkrótce otwarcie naszej strony!",
            countdownTitle: "Czas do otwarcia:",
            facebookButton: "Śledź nas na Facebooku"
        },
        en: {
            title: "Octosport.EU - Opening Soon",
            mainTitle: "Opening Soon!",
            mainMessage: "We are preparing something special for you. Our website is launching soon!",
            countdownTitle: "Time until launch:",
            facebookButton: "Follow us on Facebook"
        },
        es: {
            title: "Octosport.EU - Próximamente",
            mainTitle: "¡Próximamente!",
            mainMessage: "Estamos preparando algo especial para ti. ¡Nuestra página web se lanzará pronto!",
            countdownTitle: "Tiempo hasta el lanzamiento:",
            facebookButton: "Síguenos en Facebook"
        }
    };

    // Ustawienie domyślnego języka na polski
    setLanguage('pl');
});