function validarContato(){
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const project = document.getElementById('project').value;
        const message = document.getElementById('message').value;
    
        if (!name || !email || !project || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
    
        alert('Formulário enviado com sucesso!');
    });
}

function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@admin.com' && password === 'senha') {
        alert('Login bem-sucedido!');
        window.location.href = 'portfolio.html';
    } else {
        alert('Email ou senha incorretos!');
    }
}

function validateRegister() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (name.length > 3) {
        if (password === confirmPassword) {
            alert('Registro bem-sucedido!');
            window.location.href = 'portfolio.html';
        } else {
            alert('As senhas não coincidem!');
        }
    } else {
        alert('O nome deve ter mais de 3 caracteres!');
    }
}





