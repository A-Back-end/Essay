const form = document.querySelector('.form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements['username'].value;
        const password = form.elements['password'].value;

        if (password === '2009' && name === 'Aziz') {
            // Vercel serves the public folder as root; locally it may need public/ prefix
            const target = (window.location.protocol === 'file:')
                ? 'public/real_essay.html'
                : '/real_essay.html';
            window.location.href = target;
        } else {
            alert('Incorrect name or password. Please try again.');
        }
});