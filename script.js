document.addEventListener('DOMContentLoaded', () => {

    // === 1. LÓGICA DO MODO ESCURO / CLARO ===
    const themeToggleBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const htmlElement = document.documentElement;

    function updateThemeUI(isDark) {
        if (iconSun && iconMoon) {
            iconSun.classList.toggle('hidden', !isDark);
            iconMoon.classList.toggle('hidden', isDark);
        }
    }

    if (themeToggleBtn) {
        updateThemeUI(htmlElement.classList.contains('dark'));

        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.classList.toggle('dark');
            htmlElement.classList.toggle('light', !isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeUI(isDark);
        });
    }

    // === 2. MENU MOBILE TOGGLE ===
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', !isHidden);
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // === 3. CARROSSEL SWIPER (ATIVIDADES DE INFRAESTRUTURA) ===
    if (typeof Swiper !== 'undefined' && document.querySelector('.services-swiper')) {
        new Swiper('.services-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
            },
        });
    }

    // === 4. ENVIO DO FORMULÁRIO DE DIAGNÓSTICO (WEB3FORMS) ===
    const formDiagnostico = document.getElementById('form-diagnostico');

    if (formDiagnostico) {
        const btnSubmit = formDiagnostico.querySelector('button[type="submit"]');

        formDiagnostico.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (!btnSubmit) return;

            const originalContent = btnSubmit.innerHTML;

            btnSubmit.innerHTML = `
                <span class="inline-flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando diagnóstico...
                </span>`;
            btnSubmit.disabled = true;

            const formData = new FormData(formDiagnostico);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) throw new Error("Erro de comunicação com o servidor.");

                const data = await response.json();

                if (data.success) {
                    exibirFeedback(formDiagnostico, "Diagnóstico enviado com sucesso! Nossa equipe entrará em contato em breve.", "sucesso");
                    formDiagnostico.reset();
                } else {
                    exibirFeedback(formDiagnostico, "Não foi possível enviar o formulário. Tente novamente.", "erro");
                }
            } catch (error) {
                exibirFeedback(formDiagnostico, "Erro de conexão. Verifique sua rede e tente novamente.", "erro");
            } finally {
                btnSubmit.innerHTML = originalContent;
                btnSubmit.disabled = false;
            }
        });
    }

    function exibirFeedback(container, mensagem, tipo) {
        let feedbackEl = container.querySelector('.form-feedback');

        if (!feedbackEl) {
            feedbackEl = document.createElement('div');
            container.appendChild(feedbackEl);
        }

        if (tipo === 'sucesso') {
            feedbackEl.className = 'form-feedback p-4 mt-4 rounded-xl text-sm font-semibold text-center border bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800 transition-all';
        } else {
            feedbackEl.className = 'form-feedback p-4 mt-4 rounded-xl text-sm font-semibold text-center border bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-200 border-rose-300 dark:border-rose-800 transition-all';
        }

        feedbackEl.textContent = mensagem;

        setTimeout(() => {
            feedbackEl.remove();
        }, 7000);
    }
});