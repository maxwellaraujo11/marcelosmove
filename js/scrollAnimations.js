import  ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.box-director', {
  origin: 'left',  // A origem da animação (top, bottom, left, right)
  distance: '100px', // A distância do elemento em relação à origem
  duration: 1000, // A duração da animação em milissegundos
  delay: 0, // O atraso antes que a animação comece
  easing: 'ease', // A função de easing (suavização) da animação
  reset: false, // Se a animação deve ser repetida quando o elemento sair e entrar na tela novamente
  mobile: true // Se a animação deve ser ativada em dispositivos móveis
});
