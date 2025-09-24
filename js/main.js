// Supondo que você tenha funções para cada personagem em arquivos separados
// Exemplo: loadRobertoImage, robertoSocar, robertoChutar, robertoPoder
// Faça o mesmo para o outro personagem (ex: Sandow)

window.onload = function() {
  // Carrega os personagens na tela
  loadRobertoImage();
  // loadSandowImage(); // Descomente se tiver outro personagem

  // Adiciona eventos de teclado para controlar os personagens
  document.addEventListener('keydown', (event) => {
    // Controles do Roberto (S, D, F)
    if (event.key === 's') {
      robertoSocar();
    } else if (event.key === 'd') {
      robertoChutar();
    } else if (event.key === 'f') {
      robertoPoder();
    }

    // Controles do outro personagem (Exemplo: J, K, L)
    // if (event.key === 'j') {
    //   sandowSocar();
    // } else if (event.key === 'k') {
    //   sandowChutar();
    // } else if (event.key === 'l') {
    //   sandowPoder();
    // }
  });
};
