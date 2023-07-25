// alert("document.querySelector('input[type=tel]')");

function digita_tecla(tecla_valor){
    // Essa função recebe um valor numérico junta com os valores anteriormente digitados e substitui o placeholder do campo digitado
    
    if (display.placeholder ==="Digite seu telefone"){

        display.placeholder = tecla_valor;
    }
    else {
        display.placeholder = `${display.placeholder}${tecla_valor}`;
    }

}

const listaDeTeclas=document.querySelectorAll('input[type=button]');
const display=document.querySelector('input[type=tel]');

for (let contador=0;contador<listaDeTeclas.length;contador++){

    const tecla=listaDeTeclas[contador];
    const tecla_valor=tecla.value;

    console.log(tecla);
    tecla.onclick = function (){
        digita_tecla(tecla_valor);

    };

}