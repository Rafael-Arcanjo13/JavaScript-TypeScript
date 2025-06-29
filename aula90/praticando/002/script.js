const btn = document.querySelector('#btn_search').addEventListener('click', e => {
    const userId = document.querySelector('#userId').value;
    const list = document.querySelector('#list');
    const url = `https://jsonplaceholder.typicode.com/posts?userId=1`;

    if (userId === '') {
        list.innerHTML = 'Valor inválido';
        throw new Error('Valor inválido');
    }

    if (userId >= '11') {
        list.innerHTML = 'Nenhum post encontrado.';
        throw new Error('Nenhum post encontrado.');
    }

    list.innerHTML = 'Carregando...'

    async function carregaResultado(url) {
        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error('Erro ao carregar os usuários.');

            const users = await response.json();

            list.innerHTML = '';

            users.forEach(user => {
                if (user.id == userId) {
                    const title = `Título: ${user.title}`
                    const body = `Corpo: ${user.body}`
                    const li = document.createElement('li')
                    list.appendChild(li)
                    li.innerHTML = title + '<br>' + body;
                };
            });
        } catch (e) {
            list.innerHTML = 'Erro ao carregar os usuários.';
            console.log(e);
        }

    }

    carregaResultado(url);
});

