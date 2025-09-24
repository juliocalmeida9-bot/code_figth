
function loadRobertoImage() {
  robertoImg = document.createElement('img');
  robertoImg.src = 'https://roberto.com.br/img/roberto.png';
  robertoImg.id = 'roberto';
  document.body.appendChild(robertoImg);
}

// Função para socar
function robertoSocar() {
  console.log('Roberto deu um soco!');
  // Aqui você pode trocar a imagem ou animar o personagem
  robertoImg.style.border = '2px solid red'; // Exemplo visual
  setTimeout(() => robertoImg.style.border = '', 200);
}

// Função para chutar
function robertoChutar() {
  console.log('Roberto deu um chute!');
  robertoImg.style.border = '2px solid blue'; // Exemplo visual
  setTimeout(() => robertoImg.style.border = '', 200);
}

// Função para soltar o poder
function robertoPoder() {
  console.log('Roberto soltou o poder!');
  // Exemplo: criar um efeito visual simples
  let poder = document.createElement('div');
  poder.style.position = 'absolute';
  poder.style.left = (robertoImg.offsetLeft + 100) + 'px';
  poder.style.top = robertoImg.offsetTop + 'px';
  poder.style.width = '40px';
  poder.style.height = '20px';
  poder.style.background = 'yellow';
  poder.style.borderRadius = '10px';
  poder.innerText = '⚡';
  document.body.appendChild(poder);
  setTimeout(() => document.body.removeChild(poder), 500);
}

// Exemplo de uso: chame as funções abaixo para testar
// loadRobertoImage();
// robertoSocar();
// robertoChutar();
// robertoPoder();

// Adiciona eventos de teclado para controlar Roberto
document.addEventListener('keydown', (event) => {
  if (event.key === 's') {
    robertoSocar();
  } else if (event.key === 'd') {
    robertoChutar();
  } else if (event.key === 'f') {
    robertoPoder();
  }
});