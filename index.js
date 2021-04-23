

function Verificar(){

var ano = new Date()
var anoAtual = ano.getFullYear()
var Nascimento = document.getElementById('ano')
var msg = document.getElementById('msg')



//tratamento de erro
if( Number(Nascimento.value) > anoAtual || Nascimento.value.length === 0){
        alert("Complete o campo corretamente")
} else {


    
    var idade = anoAtual - Number(Nascimento.value)
    var sex = document.getElementsByName('gender')
    var genero = ''
    var imagem = document.createElement('img')
    imagem.setAttribute('src','')

        if(sex[0].checked){
           var genero = 'Masculino'
            if(idade > 0 && idade <= 12){
                //criança
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src','img/criança-homem.jpg')
            } else if (idade > 12 && idade <= 25){
                //jovem
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src', 'img/jovem-homem.jpg')
            } else if (idade > 25 && idade <= 60){
                //adulto
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src', 'img/adulto-homem.jpg')
            } else {
                // idoso
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src', 'img/idoso-homem.jpg')
            }


        } else {
          var genero = 'Feminino'
            if(idade > 0 && idade <= 12){
                //criança
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src', 'img/criança-mulher.jpg')
            } else if (idade > 12 && idade <= 25){
                //jovem
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src', 'img/jovem-mulher.jpg') 
            } else if (idade > 25 && idade <= 60){
                //adulto
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src', 'img/adulto-mulher.jpg')
            } else {
                //idoso
                msg.innerHTML = `Sou do genero ${genero} e tenho ${idade}`
                imagem.setAttribute('src', 'img/idosa-mulher.jpg')
            }
          
        }

            msg.appendChild(imagem)
            Nascimento.value = ""

    }

}


