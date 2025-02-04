
        function alternaSenha(){
            //cole aqui
            let camposenha = document.getElementById('senha')
            let botaosenha = document.getElementById('mostraSenha')

                if(camposenha.type === 'password'){
                     camposenha.type = 'text'
                    botaosenha.innerText ='Ocultar'
                }else{
                     camposenha.type = 'password'
                     botaosenha.innerText = 'Mostrar'
                }
        }