

        /* menu toggle (mobile)
        (function(){
            const toggle = document.querySelector('.menu-toggle');
            const menu = document.getElementById('main-nav');
            toggle.addEventListener('click', () => {
                const open = menu.classList.toggle('open');
                toggle.setAttribute('aria-expanded', String(open));
            });
        })();

        // simple slider with overlay text (welcome message remains on slides)
        (function(){
            const slides = Array.from(document.querySelectorAll('#slides img'));
            let idx = 0;
            const slideCount = slides.length;
            const overlayTitle = document.getElementById('slideTitle');
            const overlayText = document.getElementById('slideText');

            // Optional: different messages for slides (modify as needed)
            const captions = [
                {
                    title: "Welcome to Our School Partnership",
                    text: '"But seek first the kingdom of God and his righteousness; and all these things shall be added unto you." – Matthew 6:33'
                },
                {
                    title: "Academic Excellence & Faith",
                    text: "Preparing students for service, leadership and lifelong learning."
                },
                {
                    title: "Community & Facilities",
                    text: "Modern facilities and a supportive Christian community."
                }
            ];

            function showSlide(i){
                slides.forEach((s, n) => s.classList.toggle('active', n === i));
                const cap = captions[i] || captions[0];
                overlayTitle.textContent = cap.title;
                overlayText.textContent = cap.text;
            }

            // auto-advance
            let interval = setInterval(() => {
                idx = (idx + 1) % slideCount;
                showSlide(idx);
            }, 2000);

            // pause on hover
            const slider = document.querySelector('.slider');
            slider.addEventListener('mouseenter', ()=> clearInterval(interval));
            slider.addEventListener('mouseleave', ()=> interval = setInterval(()=>{ idx = (idx + 1) % slideCount; showSlide(idx); }, 2000));
        })();

        // set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // submenu toggle
        
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  document.querySelectorAll('.menu > li').forEach(item => {
    item.addEventListener('click', e => {
      if (window.innerWidth <= 768 && item.querySelector('.submenu')) {
        e.preventDefault();
        item.classList.toggle('open');
      }
    });
  });
*/