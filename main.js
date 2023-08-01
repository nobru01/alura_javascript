function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}
function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
/* passando uma função para um botão -> não coloca o "()", pq senão vai rodar a função
 nao queremos que rode a função quando abrir a página só quando clicar no botão
 document.querySelector('.tecla_pom').onclick = tocaSomClap();
*/
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

// document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

for (let contador=0; contador < listaDeTeclas.length;contador++){
// while (contador < listaDeTeclas.length){

    const tecla=listaDeTeclas[contador]
    const id_final=tecla.classList[1];
    // Template String
    // crase no lugar da aspas e $ para formartar a string
    const id_montado=`#som_${id_final}`;
    /*
    // funções anônimas
    São o valor de algum atributo 
    ou estão sendo armazenadas dentro de alguma referência constante ou variável.
    Então eu estou aguardando uma função, vou escrever function dentro desse atributo onclick.
    */
    tecla.onclick = function (){
        tocaSom(id_montado)
    };
    // contador =contador +1;
    // Funciona como um print no console
    console.log(contador);
    tecla.onkeydown=function () {
        tecla.classList.add('ativa');
        
    }
    tecla.onkeyup=function () {
        tecla.classList.remove('ativa');
        
    }
}

