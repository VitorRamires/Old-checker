

    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var Nascimento = document.getElementById('ano')
    var msg = document.getElementById('msg')
    var msg2 = document.querySelector('.msg2')
    var form = document.querySelector('.formulary')
    var container = document.querySelector('.container-mostrar')



function Verificar(){

    //tratamento de erro
    if( Number(Nascimento.value) > anoAtual || Nascimento.value.length === 0){
        alert("Complete o campo corretamente")
    } else {
    
        var idade = anoAtual - Number(Nascimento.value)
        var sex = document.getElementsByName('gender')
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id','foto')
      
        if(sex[0].checked){
            
        if(idade > 100 || idade <= 0) {
            alert('Idade invalida')
            msg.innerHTML = "Preencha corretamente!"
            form.classList.remove("expanse_form")
            container.classList.remove("img_down")
            container.style.display = "none"

        } else {
            form.classList.add("expanse_form")
            container.classList.add("img_down")
            container.style.display = "flex"
           var genero = 'masculino'
            if(idade > 0 && idade <= 12){
                //criança
                imagem.setAttribute ('src', 'img/criança-homem.jpg')
            } else if (idade > 12 && idade <= 25){
                //jovem
                imagem.setAttribute('src', 'img/jovem-homem.jpg')
            } else if (idade > 25 && idade <= 60){
                //adulto
                imagem.setAttribute('src', 'img/adulto-homem.jpg')
            } else {
                // idoso
                imagem.setAttribute('src', 'img/idoso-homem.jpg')
            }
             msg.innerHTML = `Eu tenho ${idade} e sou do genero ${genero}` 
        }

        } else if(sex[1].checked)  {
            if(idade > 100 || idade <= 0) {
                alert('Idade invalida!')
                msg.innerHTML = "Preencha corretamente!"
                form.classList.remove("expanse_form")
                container.classList.remove("img_down")
                container.style.display = "none"
                
            } else {
            form.classList.add("expanse_form")
            container.classList.add("img_down")
            container.style.display = "flex"

            var genero = 'feminino'
            if(idade > 0 && idade <= 12){
                //criança
                imagem.setAttribute('src', 'img/criança-mulher.jpg')
                
            } else if (idade > 12 && idade <= 25){
                //jovem
                imagem.setAttribute('src', 'img/jovem-mulher.jpg')
                
            } else if (idade > 25 && idade <= 60){
                //adulto
                imagem.setAttribute('src', 'img/adulto-mulher.jpg')
                
            } else {
                //idoso
                imagem.setAttribute('src', 'img/idosa-mulher.jpg')
            }

                msg.innerHTML = `Eu tenho ${idade} anos e sou do genero ${genero}`
        
        }

    }
       
        msg2.innerHTML= ""
        Nascimento.value = ""
        msg2.appendChild(imagem)
    }   
    
}

function Limpar(){
    form.classList.remove("expanse_form")
    container.classList.remove("img_down")
    container.style.display = "none"
}
