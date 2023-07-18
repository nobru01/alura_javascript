function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();

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

listaDeTeclas[0].onclick = tocaSomPom
// Funciona como um print no console
console.log(listaDeTeclas);
