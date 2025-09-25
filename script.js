
        // DOM Elements
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('section');
        const contactForm = document.getElementById('contactForm');
        
        // Toggle Mobile Menu
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
        
        // Navigation - Switch Pages
        navLinks.forEach(link => {s
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get the target page from data attribute
                const targetPage = link.getAttribute('data-page');
                
                // Update active link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                link.classList.add('active');
                
                // Show the target page
                pages.forEach(page => {
                    page.classList.remove('active');
                    if (page.id === targetPage) {
                        page.classList.add('active');
                    }
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('show');
                
                // Scroll to top
                window.scrollTo(0, 0);
            });
        });
        
        // Form Validation
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            // Validate Name
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (name.value.trim() === '') {
                nameError.style.display = 'block';
                isValid = false;
            } else {
                nameError.style.display = 'none';
            }
            
            // Validate Email
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailError.style.display = 'none';
            }
            
            // Validate Message
            const message = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (message.value.trim() === '') {
                messageError.style.display = 'block';
                isValid = false;
            } else {
                messageError.style.display = 'none';
            }
            
            // If form is valid, show success message
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#nav-menu') && !e.target.closest('#hamburger') && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
