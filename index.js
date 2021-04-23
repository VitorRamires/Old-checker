

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
    var criandoImagem = createElement('img')
    criandoImagem.setAtribute('id','foto')

        if(sex[0].checked){
           
           var genero = 'homem'
            if(idade > 0 && idade <= 12){
                //criança
                criandoImagem.setAtribute('src', 'img/criança - homem.jpg')
            } else if (idade > 12 && idade <= 25){
                //jovem
            } else if (idade > 25 && idade <= 60){
                //adulto
            } else {
                // idoso
            }


        } else {
          var genero = 'mulher'
            if(idade > 0 && idade <= 12){
                //criança
            } else if (idade > 12 && idade <= 25){
                //jovem
            } else if (idade > 25 && idade <= 60){
                //adulto
            } else {
                //idoso
            }
          
        }
        
        var mostrar = document.querySelector('.container-mostrar')
        mostrar.appendChild(criandoImagem)
    
    }


}