// Simple routing for the single-page application
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showPage('home');

    // Handle navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            showPage(pageId);

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality would connect to backend in a real system');
        showPage('vote');
    });

    // Handle registration form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        alert('Registration successful! Please login.');
        showPage('login');
    });

    // Handle vote form submission
    document.getElementById('voteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to submit your votes? You cannot change them afterward.')) {
            alert('Thank you for voting!');
            showPage('results');
        }
    });

    // Manifesto modal handling
    document.querySelectorAll('.view-manifesto').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('#manifestoModal .modal-title').textContent =
                this.dataset.name + "'s Manifesto";
            document.getElementById('manifestoModalBody').textContent =
                this.dataset.manifesto;
        });
    });
});

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.container[id]').forEach(page => {
        page.style.display = 'none';
    });

    // Show requested page
    document.getElementById(pageId).style.display = 'block';

    // Scroll to top
    window.scrollTo(0, 0);
}