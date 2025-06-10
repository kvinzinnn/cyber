const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    toggleBtn.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

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
