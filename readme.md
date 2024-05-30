### Exercício Módulo 10 - Plugins jQuery

## Dicas

- O carousel slick utiliza a ID do campo para atribuir funções.
- A semântica de escrita do HTML e jQuery utilizam o idioma inglês.
- O jQuery plugin só executa depois que o jQuery carregar na página.

seguindo as dicas e o que aprendi em aula, consegui concliur com exito a atividade proposta.

- [Acesse o projeto finalizado, online](https://exercicio-modulo-10-ebac.vercel.app/)

- corrigi o erro de slide
- coloquei a função do carrosel dentro do arquivo main.js, antes estava em script dentro do HTML.
- corrigi o erro nas chamadas dos plugins, pois os plugins não devem vir primeiro que a importação do jQuery.
  - Regra: primeiro import a biblioteca, somente depois import o plugin
- corrigi o erro na mascara pois estava com erro de escrita.
- corrigi erro em validate, required estava escrito de forma errada.
- Em invalidHandle acrescentei uma condição que conta quantos campos errados tem e informa em alert ao usuário.