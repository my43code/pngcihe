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
                    text: 'Papua New Guinea Christian Institute of Higher Education prepares servant leaders for National Capital District and Papua New Guinea.'
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

    const showcaseGrid = document.getElementById('showcase-grid');
    if(showcaseGrid){
        const showcaseItems = [
            {
                type: 'image',
                src: 'images/facility1.jpg',
                title: 'Learning commons redesign',
                description: 'Students collaborate on capstone projects inside the refreshed digital commons.'
            },
            {
                type: 'image',
                src: 'images/carexpo2.jpg',
                title: 'Business pitch expo',
                description: 'Governance students present micro-enterprise ideas to Port Moresby SME partners.'
            },
            {
                type: 'image',
                src: 'images/stdcon2.jpg',
                title: 'ICT studio practicum',
                description: 'Hands-on labs equip cohorts to deliver blended learning to rural schools.'
            },
            {
                type: 'image',
                src: 'images/12stdsassembly.jpg',
                title: 'Community worship',
                description: 'Weekly liturgies strengthen shared values of service and hospitality.'
            },
            {
                type: 'video',
                src: 'https://www.youtube.com/embed/ysz5S6PUM-U',
                embed: true,
                title: 'Campus walk-through',
                description: 'Take a quick tour of Papua New Guinea Christian Institute of Higher Education facilities, chaplaincy hub and academic wings.'
            },
            {
                type: 'video',
                src: 'videos/bejhistory.mp4',
                embed: false,
                title: 'Cultural history presentation',
                description: 'Education majors dramatise Port Moresby legends using art, poetry and Tok Pisin narrations.'
            }
        ];

        const renderShowcase = (filter = 'all') => {
            showcaseGrid.innerHTML = '';
            const filteredItems = showcaseItems.filter(item => filter === 'all' ? true : item.type === filter);
            if(filteredItems.length === 0){
                const message = document.createElement('p');
                message.textContent = 'More media moments are being curated. Please check back soon!';
                showcaseGrid.appendChild(message);
                return;
            }

            filteredItems.forEach(item => {
                const card = document.createElement('article');
                card.className = 'showcase-card';
                let mediaEl;
                if(item.type === 'video'){
                    if(item.embed){
                        mediaEl = document.createElement('iframe');
                        mediaEl.src = item.src;
                        mediaEl.title = item.title;
                        mediaEl.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                        mediaEl.allowFullscreen = true;
                    } else {
                        mediaEl = document.createElement('video');
                        mediaEl.controls = true;
                        const source = document.createElement('source');
                        source.src = item.src;
                        source.type = 'video/mp4';
                        mediaEl.appendChild(source);
                    }
                } else {
                    mediaEl = document.createElement('img');
                    mediaEl.src = item.src;
                    mediaEl.alt = item.title;
                }

                const heading = document.createElement('h3');
                heading.textContent = item.title;
                const desc = document.createElement('p');
                desc.textContent = item.description;

                card.appendChild(mediaEl);
                card.appendChild(heading);
                card.appendChild(desc);
                showcaseGrid.appendChild(card);
            });
        };

        renderShowcase();

        const tabs = document.querySelectorAll('.filter-tabs .tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(btn => {
                    btn.classList.toggle('active', btn === tab);
                    btn.setAttribute('aria-pressed', btn === tab ? 'true' : 'false');
                });
                renderShowcase(tab.dataset.filter);
            });
        });
    }
})();
