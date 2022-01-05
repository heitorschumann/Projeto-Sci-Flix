let nomeUser
let sobrenomeUser
let emailUser
let senhaUser

//requisição API ViaCEP e autocomplete dos inputs

$("#cepBtn").on("click", function () {
    const cep = $("#cep").val()
    const url = `https://viacep.com.br/ws/${cep}/json/`

    $.ajax({
        url: url,
        type: 'GET',
        success: function (dados) {
            $('#uf').val(dados.uf)
            $('#cidade').val(dados.localidade)
            $('#bairro').val(dados.bairro)
            $('#rua').val(dados.logradouro)

        },
        error: function () {
            $("#cep").attr('class', 'form-control is-invalid')
        }
    })
})


// verificação dos inputs   


function validaEmail(email) {
    const crc = /\S+@\S+\.\S+/
    crc.test(email)

    if (crc.test(email) === true) {
        $("#emailUser").attr('class', 'form-control is-valid')
    } else {
        $("#emailUser").attr('class', 'form-control is-invalid')
    }
}

function validaSenha(senha) {
    //caracteres maiúsculos e minúsculos, caracteres especiais, números e 6 a 20 caracteres
    const crcS = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/  
    crcS.test(senha)

    if (crcS.test(senha) === true) {
        $("#senhaUser").attr('class', 'form-control is-valid')
    } else {
        $("#senhaUser").attr('class', 'form-control is-invalid')
    }


}


function validaSenhaCheck(senhaC) {
    if ($('#senhaUser').val() == $('#senhaCheck').val()) {
        $("#senhaCheck").attr('class', 'form-control is-valid')
    } else {
        $("#senhaCheck").attr('class', 'form-control is-invalid')
    }
}

/// tentativa de fazer um "mini armazenamento de dados"
 document.getElementById("botao").addEventListener("click", function(event){
    event.preventDefault() })


    function registrarDados() {
    
        nomeUser = $('#nomeUser').val()
        sobrenomeUser = $('#sobrenomeUser').val()
        emailUser = $('#emailUser').val()
        senhaUser = $('#senhaUser').val()
        const dadosUsuario = {
            'nome': nomeUser,
            'sobrenome': sobrenomeUser,
            'email': emailUser,
            'senha': senhaUser
        }
        const stringDados = JSON.stringify(dadosUsuario)
        localStorage.setItem('dadosString', stringDados)
        console.log(localStorage.getItem('dadosString')) //testando o retorno dos dados
        return window.location.href='../../index.html'
    }


