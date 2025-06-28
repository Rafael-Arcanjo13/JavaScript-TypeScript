const btn = document.querySelector('#btn-carregar').addEventListener('click', e => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const listaUsuarios = document.querySelector('#lista-usuarios');
    listaUsuarios.innerHTML = 'Carregando...'

    async function carregaResultado(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error('Erro ao carregar os usuários.');

            const users = await response.json();

            listaUsuarios.innerHTML = '';

            users.forEach(user => {
                const response = (`${user.name} - ${user.email}`);

                const li = document.createElement('li');
                listaUsuarios.appendChild(li);
                li.innerHTML += response;
            });
        } catch (e) {
            listaUsuarios.innerHTML = 'Erro ao carregar os usuários.';
            console.log(e);
        };


    };

    carregaResultado(url);

})