function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

function setDarkMode(isDark) {
    body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark);

    // Use the sun icon for light mode and moon icon for dark mode
    const iconClass = isDark ? 'fa-regular fa-sun' : 'fa-solid fa-moon'; 
    darkModeToggle.innerHTML = `<i class="${iconClass}"></i>`;
}

darkModeToggle.addEventListener('click', () => {
    setDarkMode(!body.classList.contains('dark-mode'));
});

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('darkMode');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setDarkMode(savedTheme === 'true' || (savedTheme === null && prefersDark));

// Listen for changes in system color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
    }
});
