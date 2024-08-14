# Criptografador de Texto

Este projeto é uma aplicação web que permite a criptografia e descriptografia de textos usando HTML5, CSS3 e JavaScript. A interface foi desenvolvida com um layout moderno e responsivo, que se adapta a diferentes tamanhos de tela e dispositivos.

## Funcionalidades

- **Criptografar Texto**: O usuário pode inserir um texto no campo de entrada e criptografá-lo ao clicar no botão "Criptografar".
- **Descriptografar Texto**: Após criptografar o texto, o botão muda para "Descriptografar", permitindo ao usuário reverter o texto criptografado ao seu estado original.
- **Habilitação Dinâmica do Botão**: O botão "Criptografar" só fica habilitado quando o usuário digita algum texto. Se o campo de texto estiver vazio, o botão será desabilitado, evitando cliques acidentais.
- **Interface Responsiva**: O layout é centralizado na tela e se adapta a diferentes tamanhos de tela, incluindo dispositivos móveis.
- **Interatividade com Botão**: O botão muda de cor ao passar o mouse por cima, oferecendo uma experiência de usuário agradável.
- **Inicialização do Botão Desabilitado**: O botão é explicitamente desabilitado no início com actionBtn.disabled = `true`;. Isso garante que, ao carregar a página, o botão esteja sempre desabilitado até que o usuário comece a digitar no campo de texto.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- **index.html**: Estrutura da página com um campo de texto e um botão.
- **styles.css**: Estilos da página, incluindo fontes importadas, cores, layout responsivo e efeitos de interação.
- **script.js**: Lógica de criptografia e descriptografia, além do controle dinâmico de habilitação do botão.
- **README.md**: Documento de explicação e descrição do projeto.

### Arquivos

- `index.html`: Contém a estrutura básica da aplicação e os elementos visuais.
- `styles.css`: Define o estilo visual da aplicação, incluindo o fundo com degradê, layout centralizado, e responsividade.
- `script.js`: Implementa a lógica de criptografia e descriptografia utilizando funções de substituição simples e a lógica para habilitar/desabilitar o botão dinamicamente.
- `README.md`: Documento explicativo e descritivo do projeto.

## Como Usar

1. **Abrir o Projeto**: Abra o arquivo `index.html` em um navegador.
2. **Inserir Texto**: Digite o texto que deseja criptografar no campo de texto. O botão "Criptografar" será habilitado quando digitar algum texto.
3. **Criptografar**: Clique no botão "Criptografar". O texto será criptografado e o botão mudará para "Descriptografar".
4. **Descriptografar**: Clique no botão "Descriptografar" para reverter o texto ao seu estado original.

## Detalhes Técnicos

- **Criptografia Simples**: A criptografia é feita através de uma substituição de caracteres, onde o valor ASCII de cada caractere é incrementado em 3. A descriptografia reverte esse processo.
- **Habilitação Dinâmica do Botão**: O botão só é habilitado se o campo de texto contiver algum valor, desabilitando-se automaticamente caso o campo esteja vazio.
- **Responsividade**: A aplicação utiliza `flexbox` e `media queries` para garantir que o layout se adapte bem a diferentes tamanhos de tela.
- **Estilos Dinâmicos**: O botão de ação muda de cor ao ser hoverado, proporcionando uma experiência de usuário interativa.


## Contribuição

Este é um projeto que fazer parte do programa **Iniciante em Programação T7 - ONE**. Se tiver sugestões ou melhorias, sinta-se à vontade para enviar um pull request ou abrir uma issue.