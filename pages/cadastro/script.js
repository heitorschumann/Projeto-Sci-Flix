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