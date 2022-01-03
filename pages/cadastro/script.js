//requisição e autocomplete 

$("#cepBtn").on("click", function(){
    var cep = $("#cep").val()
    const url = `https://viacep.com.br/ws/${cep}/json/`

    $.ajax({
        url: url,
        type: 'GET',
        success: function (dados){
            console.log(dados)
            $('#uf').val(dados.uf)
            $('#cidade').val(dados.localidade)
            $('#bairro').val(dados.bairro)
            $('#rua').val(dados.logradouro)
        }
    })
})


// verificação de dados  


function validaEmail(email){
   const crc = /\S+@\S+\.\S+/
   crc.test(email)
  
    if(crc.test(email) === true){
        $("#emailUser").attr('class', 'form-control is-valid')
    } else {
        $("#emailUser").attr('class', 'form-control is-invalid')
    }
} 
function validaSenha(senha){
    //caracteres maiúsculos e minúsculos, caracteres especiais, números e 8 a 20 caracteres
    const crcS = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
    crcS.test(senha)

    if(crcS.test(senha) === true){
        $("#senhaUser").attr('class', 'form-control is-valid')
    } else {
        $("#senhaUser").attr('class', 'form-control is-invalid')
    }
    

}
function validaSenhaCheck(senhaC){
    if($('#senhaUser').val()== $('#senhaCheck').val()){
        $("#senhaCheck").attr('class', 'form-control is-valid')
    }
    else {
        $("#senhaCheck").attr('class', 'form-control is-invalid')
    }
}

