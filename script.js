
function enviarFormulario() {
    // Obter os valores dos campos de texto e senha
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let toggle = document.getElementById('toggle').checked;
    let lembrarSenha = '';

    //Verifica se o switch lembre de mim esta marcado ou não
    if (toggle){
         lembrarSenha = "Ligado";
    }
    else{
         lembrarSenha = "Desligado"
    }

    // Verificar se algum dos campos obrigatórios está vazio
    if (usuario === '' || senha === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exibir um alerta com as informações
    alert("Dados Enviados \n" + 'Texto: ' + usuario + '\nSenha: ' + senha + '\nLembrar Senha: ' + lembrarSenha);
    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('toggle').checked = false;
}   