
        // Función para el menú hamburguesa
        function toggleMenu() {
            document.querySelector('.hamburger').classList.toggle('active');
            document.querySelector('nav').classList.toggle('active');
        }

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.hamburger').classList.remove('active');
                document.querySelector('nav').classList.remove('active');
            });
        });

        // Configuración del Intersection Observer para animaciones
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: desconectar el observer después de mostrar el elemento
                    // observer.unobserve(entry.target);
                } else {
                    // Comentar la siguiente línea si no quieres que los elementos 
                    // se oculten al salir del viewport
                    entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        // Observar todos los elementos con la clase 'section'
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Observar el footer
        observer.observe(document.querySelector('footer'));

        // Añadir animación inicial con delay para las cards
        document.querySelectorAll('.science-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
            }, index * 200);
        });
    
