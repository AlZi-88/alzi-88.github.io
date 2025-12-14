// Dark Mode Theme Toggle
(function() {
    // Apply theme immediately to prevent flash
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.innerHTML = `
        <span class="icon light-icon">🌙</span>
        <span class="icon dark-icon">☀️</span>
        <span class="toggle-text"></span>
    `;
    document.body.appendChild(themeToggle);

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    updateToggleText(currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        let theme = document.body.getAttribute('data-theme') || 'light';
        let newTheme = theme === 'light' ? 'dark' : 'light';
        
        // Set on both html and body for maximum compatibility
        document.documentElement.setAttribute('data-theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleText(newTheme);
        
        console.log('Theme switched to:', newTheme); // Debug
    });

    // Update toggle button text
    function updateToggleText(theme) {
        const toggleText = themeToggle.querySelector('.toggle-text');
        toggleText.textContent = theme === 'light' ? 'Dark' : 'Light';
    }

    // Optional: Listen for system preference changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener(function(e) {
            // Only apply if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                document.body.setAttribute('data-theme', newTheme);
                updateToggleText(newTheme);
            }
        });
    }
});
