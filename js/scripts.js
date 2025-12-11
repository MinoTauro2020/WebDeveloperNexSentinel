// Todo tu JavaScript va aquí

// Mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scrolling (versión corregida)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const hrefValue = this.getAttribute('href');

        // AÑADIMOS ESTA COMPROBACIÓN
        // Si el href es solo "#", no intentamos buscar un elemento.
        if (hrefValue === '#') {
            // Opción A: No hacer nada (el comportamiento por defecto ya fue prevenido).
            return;

            // Opción B: Si quieres que vaya arriba de la página, usa esto en lugar de 'return':
            // window.scrollTo({ top: 0, behavior: 'smooth' });
            // return;
        }

        const target = document.querySelector(hrefValue);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const spinner = submitBtn.querySelector('.spinner');
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            const response = await fetch('contact-simple.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(data)
            });
            
            // Check if response is OK
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            // Try to parse JSON
            let result;
            try {
                result = await response.json();
            } catch (jsonError) {
                // If JSON parsing fails, try to get text response
                const textResponse = await response.text();
                console.log('Respuesta del servidor:', textResponse);
                
                // Check if the response contains success indicators
                if (textResponse.includes('success') || textResponse.includes('enviada')) {
                    result = { success: true, message: '¡Solicitud enviada correctamente!' };
                } else {
                    throw new Error('El servidor devolvió una respuesta inesperada');
                }
            }
            
            if (result.success) {
                alert('¡Solicitud enviada correctamente! Te contactaremos en menos de 15 minutos. Para emergencias, llama al +34 965 123 456.');
                contactForm.reset();
            } else {
                alert('Error: ' + (result.message || 'Error desconocido'));
            }
        } catch (error) {
            console.error('Error completo:', error);
            alert('Error al enviar la solicitud: ' + error.message + '. Por favor, inténtalo de nuevo o llama directamente al +34 965 123 456.');
        } finally {
            // Hide loading state
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header && window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else if (header) {
        header.style.boxShadow = 'none';
    }
});

// Cookie consent
(function() {
    // Verificar si ya se aceptaron las cookies
    if (!localStorage.getItem('cookieConsent')) {
        // Crear banner de cookies
        const cookieBanner = document.createElement('div');
        cookieBanner.id = 'cookie-banner';
        cookieBanner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #1a1a1a;
            color: white;
            padding: 20px;
            text-align: center;
            z-index: 10000;
            font-family: 'Inter', sans-serif;
        `;
        
        cookieBanner.innerHTML = `
            <p style="margin: 0 0 15px 0;">
                Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra 
                <a href="/politica-cookies" style="color: #dc2626; text-decoration: underline;">Política de Cookies</a>.
            </p>
            <button id="accept-cookies" style="
                background: #dc2626;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 500;
            ">Aceptar y Continuar</button>
        `;
        
        document.body.appendChild(cookieBanner);
        
        // Manejar clic en aceptar
        document.getElementById('accept-cookies').addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            document.getElementById('cookie-banner').remove();
            
            // Enviar evento a Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cookie_consent_accepted');
            }
        });
    }
})();