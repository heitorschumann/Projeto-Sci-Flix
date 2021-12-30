/* início da lógica da página de recuperação de senha */
    let EmailCadastrado = document.getElementById("usuario");
    let SenhaCadastrada = document.getElementById("senha");
    let ConfirmacaoSenha = document.getElementById("senha2")
    let BotaoRecuperacao = document.getElementById("botao-recuperacao")

    let TextoConfirmacao = document.getElementById("texto-confirmacao")
    let input1 = document.getElementById("senha");
    let input2 = document.getElementById("senha2");
    
    
    BotaoRecuperacao.onclick = function confirmacao() {
        event.preventDefault()
        if(SenhaCadastrada.value === ConfirmacaoSenha.value && SenhaCadastrada.value != "") {
            TextoConfirmacao.innerHTML = "";
            input1.style.borderColor = "lightgreen";
            input2.style.borderColor = "lightgreen";
            input1.style.color = "lightgreen";
            input2.style.color = "lightgreen";
            
            if(SenhaCadastrada.value === ConfirmacaoSenha.value && SenhaCadastrada.value != "") {
                setTimeout( function (clicaAlert ) {
                     alert( "Senha alterada com sucesso" );
                     this.addEventListener.clicaAlert.onclick = window.location.href = "/Projeto-Sci-Flix/index.html";
                    }, 1000 );
            }
        } else {
            TextoConfirmacao.innerHTML = "Favor preencher os campos igualmente";
            TextoConfirmacao.style.color = "red";
            input1.style.borderColor = "red";
            input2.style.borderColor = "red";
            input1.style.color = "red";
            input2.style.color = "red";
        }
    }
/* fim da lógica da página de recuperação de senha */