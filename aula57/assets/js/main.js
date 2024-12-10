function meuEscopo() {
    const display = document.querySelector('.display')
    const btnEq = document.querySelector('.btn-eq')
    const numeros = document.querySelectorAll('.btn-num')

    numeros.forEach((btn) =>
        btn.addEventListener('click', (event) => {
          display.innerHTML = event.currentTarget.textContent
        })
      );

}

meuEscopo()