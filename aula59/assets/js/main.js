function Calculadora() {
  this.display = document.querySelector('.display')

  this.btnClicado = document.addEventListener('click', (e) => {
    this.el = e.target

    if(this.el.classList.contains('btn-num')) {
      this.addBtnClicado(this.el.innerText)
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

  this.realizaConta = () => {
    let conta = this.display.value

    conta = eval(conta)
    this.display.value = String(conta)
  }
  
  this.addBtnClicado = (valor) => {
    this.display.value += valor;
  }
}

const c1 = new Calculadora()