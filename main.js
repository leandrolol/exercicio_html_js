const form = document.getElementById('meuFormulario');

function validaCampo (campoMaior){
    const numeroComoArray = campoA.value > campoB.value;
    return numeroComoArray.valueOf 
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = parseInt (document.getElementById('campoA').value);
    const campoB = parseInt (document.getElementById('campoB').value);

    if (campoA > campoB){
        const containerMensagemSucesso = document.querySelector('.sucesso');
        containerMensagemSucesso.innerHTML = 'Parabéns!! O valor é válido';
        containerMensagemSucesso.style.display = 'block';
    form.reset()
    }else{
        form.campoA.style.border = '1px solid red';
        form.campoB.style.border = '1px solid red';
    
        const containerMensagemErro = document.querySelector('.erro').style.display = 'block';
        containerMensagemErro.innerHTML = ' Campo A não pode ser menor que Campo B';
        containerMensagemErro.style.display = 'block';
    }


})

console.log(form);