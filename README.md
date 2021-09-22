# at-javascript
Assessment da disciplina Javascript do bloco de Front-End

## Restrições gerais de trabalho:

Todo script utilizado deve ter seu escopo isolado;
Se o aluno estiver confortável, pode usar uma biblioteca de componentes css, como o bootstrap.
Lembre-se que o componente deve alertar o usuário em caso de erro.
Dica: use a função window.alert(mensagem);
Utilize ao máximo o paradigma de funções puras, veja uma explicação do conceito aqui.

## Jogo da memória

Criar um aplicativo que apresenta um tabuleiro de jogo da memória (4x4, 8 pares de figuras), um botão que permita iniciar/reiniciar o jogo e um botão para mostrar o melhor tempo de jogo (que deve ser armazenado entre desligamentos do aplicativo). Além disso, Nossas 16 figuras são as cartas que precisamos parear.

Após o carregamento da página, o app deve mostrar todas as cartas desviradas e em pares conforme condição inicial do vídeo exemplo;
Ao clicar no botão iniciar/reiniciar jogo, o app deve embaralhar as cartas usando uma função pseudo-randômica, posicioná-las no tabuleiro e mostrá-las desviradas ao jogador por 3 segundos
Ao clicar sobre uma carta, ela deve ser desvirada. Caso seja a segunda carta desvirada, deve-se testar a igualdade das cartas; se formarem um par permanecem desviradas, senão, voltam a ser viradas após um intervalo de 1,5 segundos (para que o usuário veja qual foi a segunda carta);
Após todas as cartas terem sido desviradas, o jogo termina;
Após desvirar a segunda carta, não deve ser possível virar uma terceira até que seja verificada a paridade e desferido o resultado da verificação;
A medição de tempo de jogo deve ser feita entre o click de iniciar o jogo até o momento em que todas as cartas encontrem seus pares.

## Restrições de trabalho:

Todas as respostas devem ser apresentadas na mesma div (arquivo index.html), <div id="tabuleiro"> </div>. Para isso o aluno deve manipular o DOM usando jQuery (e demais conteúdos abordados, não restringindo apenas ao uso do jQuery);
Durante o jogo, os alunos devem animar o virar e desvirar das cartas
