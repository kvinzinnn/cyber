const toggleBtn = document.getElementById('theme-toggle');
const toggleIcon = toggleBtn.querySelector('i');
const body = document.body;

// Alternar tema (claro/escuro)
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    }
});

// Acessibilidade: aumento de fonte progressivo
const accessibilityBtn = document.getElementById('accessibility-btn');
let fontSizeLevel = 1;

accessibilityBtn.addEventListener('click', () => {
    fontSizeLevel = (fontSizeLevel % 3) + 1;
    switch (fontSizeLevel) {
        case 1:
            body.style.fontSize = "16px";
            break;
        case 2:
            body.style.fontSize = "18px";
            break;
        case 3:
            body.style.fontSize = "20px";
            break;
    }
});
