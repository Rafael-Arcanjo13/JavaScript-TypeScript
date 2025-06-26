document.getElementById('btn-carregar').addEventListener('click', async () => {
    const lista = document.getElementById('lista-usuarios');
    lista.innerHTML = 'Carregando...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) throw new Error('Erro ao carregar os usuários.');

        const usuarios = await response.json();

        lista.innerHTML = ''; // Limpa o "Carregando..."

        usuarios.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.name} - ${usuario.email}`;
            lista.appendChild(li);
        });

    } catch (e) {
        lista.innerHTML = 'Erro ao carregar os dados.';
        console.log(e);
    }
});