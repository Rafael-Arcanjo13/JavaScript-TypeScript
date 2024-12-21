function Calculadora() {
  this.display = document.querySelector('.display')

  this.btnClicado = () => {
    document.addEventListener('click', (e) => {
      this.el = e.target

      if(this.el.classList.contains('btn-num'))
        this.colocarNoDisplay(el)
      }
  
    )}

  } 
  
  this.colocarNoDisplay = (valor) => {
    this.display.value += valor
  }
}

const calculator = new Calculadora()
console.log(calculator)