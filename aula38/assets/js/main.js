const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
//querySelectorAll me retorna uma NodeList que é muito parecida com um arrat, mas é algo interno do DOM do navegador

const estilosBody = getComputedStyle(document.body);
//Com essa propriedade eu pego todos os estilos presentes no campo selecionado (body, nesse caso)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color += '#FFFFFF'
}