(function(){
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('main-menu');
    if(menuToggle && menu){
        menuToggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('show');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    document.querySelectorAll('.has-submenu > a').forEach(link => {
        link.addEventListener('click', e => {
            if(window.innerWidth <= 900){
                e.preventDefault();
                link.parentElement.classList.toggle('open');
            }
        });
    });

    const yearEl = document.getElementById('year');
    if(yearEl){
        yearEl.textContent = new Date().getFullYear();
    }

    const slider = document.querySelector('.slider');
    if(slider){
        const images = Array.from(slider.querySelectorAll('#slides img'));
        if(images.length > 0){
            let idx = 0;
            const overlayTitle = document.getElementById('slideTitle');
            const overlayText = document.getElementById('slideText');
            const captions = [
                {
                    title: 'Where Faith Meets Academic Excellence',
                    text: 'PNGC IHE prepares servant leaders for Enga Province and Papua New Guinea.'
                },
                {
                    title: 'Hands-on Learning & Community Impact',
                    text: 'Students contribute to rural schools, health posts and community outreach.'
                },
                {
                    title: 'Modern Facilities in the Highlands',
                    text: 'Digital labs, smart classrooms and residential care ensure holistic formation.'
                }
            ];

            const showSlide = (pos) => {
                images.forEach((img, i) => img.classList.toggle('active', i === pos));
                const caption = captions[pos] || captions[0];
                if(overlayTitle){
                    overlayTitle.textContent = caption.title;
                }
                if(overlayText){
                    overlayText.textContent = caption.text;
                }
            };

            showSlide(idx);
            let timer = setInterval(() => {
                idx = (idx + 1) % images.length;
                showSlide(idx);
            }, 4500);

            slider.addEventListener('mouseenter', () => clearInterval(timer));
            slider.addEventListener('mouseleave', () => {
                timer = setInterval(() => {
                    idx = (idx + 1) % images.length;
                    showSlide(idx);
                }, 4500);
            });
        }
    }
})();
