document.addEventListener('DOMContentLoaded', (event) => {
    const daynight = document.querySelector('.daynight');
    const body = document.body;

    daynight.addEventListener('click', () => {
        body.classList.toggle('dark');
    });

    new Typed("#text", {
        strings: ["Aryan", "Youtuber", "Coder"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
});

