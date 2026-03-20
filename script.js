const form = document.querySelector('.form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements['username'].value;
        const password = form.elements['password'].value;

        if (password === '2009' && name === 'Aziz') {
            window.location.href = 'real_essay.html';
        } else {
            alert('Incorrect name or password. Please try again.');
        }
});