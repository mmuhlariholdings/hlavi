// Copy to Clipboard Functionality
document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy-btn');
    const installCommand = document.getElementById('install-command');

    if (copyBtn && installCommand) {
        copyBtn.addEventListener('click', async () => {
            try {
                const text = installCommand.textContent;
                await navigator.clipboard.writeText(text);

                // Visual feedback
                copyBtn.classList.add('copied');
                copyBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4L6 11.5L2.5 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;

                // Reset after 2 seconds
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                    copyBtn.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10.5 1H3.5C2.67 1 2 1.67 2 2.5V11.5H3.5V2.5H10.5V1ZM12.5 4H6.5C5.67 4 5 4.67 5 5.5V13.5C5 14.33 5.67 15 6.5 15H12.5C13.33 15 14 14.33 14 13.5V5.5C14 4.67 13.33 4 12.5 4ZM12.5 13.5H6.5V5.5H12.5V13.5Z" fill="currentColor"/>
                        </svg>
                    `;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                // Fallback for older browsers
                fallbackCopy(installCommand.textContent);
            }
        });
    }

    // Fallback copy method for older browsers
    function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            copyBtn.classList.add('copied');
            setTimeout(() => copyBtn.classList.remove('copied'), 2000);
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }

        document.body.removeChild(textArea);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    document.querySelectorAll('.feature-card, .workflow-step').forEach(el => {
        observer.observe(el);
    });
});
