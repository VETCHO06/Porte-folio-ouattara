window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
    
        
        const formData = new FormData(this);
    
        fetch('traitement-formulaire.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.style.display = 'block';
            }
    
            setTimeout(() => {
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 3000);
    
            console.log(data);
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
    });
});