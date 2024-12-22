function Calculadora() {
  this.display = document.querySelector('.display')

  this.btnClicado = document.addEventListener('click', (e) => {
    this.el = e.target

    if(this.el.classList.contains('btn-num')) {
      this.addBtnClicado(this.el.innerText)
      this.display.focus()
    }

    if(this.el.classList.contains('btn-clear')) {
      this.display.value = ''
    }

    if(this.el.classList.contains('btn-del')) {
      this.display.value = this.display.value.slice(0, -1)
    }

    if(this.el.classList.contains('btn-eq')) {
      this.realizaConta()
    }
  })
  
  this.addBtnClicado = (valor) => {
    this.display.value += valor;
  }

  this.realizaConta = () => {
    let conta = this.display.value

    try {
      conta = eval(conta)

      if(!conta) {
        alert('Conta Invalida!')
        return
      }

      this.display.value = String(conta)
    } catch (e) {
      alert('Conta Invalida!')
      return
    }
  }

  this.teclaPressionada = this.display.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
      this.realizaConta()
      this.display.focus()
    }
  })
}

const c1 = new Calculadora()