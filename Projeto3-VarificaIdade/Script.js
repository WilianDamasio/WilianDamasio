/*function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var msg = document.getElementById('msg')
        var genero =''

        if (fsex[0].checked){

            genero = 'Homem'
            
            msg.setAttribute('src', 'Imagens/Manha.jpg')
            msg.style.alignSelf= "center"

        }else if (fsex[1].checked){

            genero = 'Mulher'
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }

}*/

var pi = 3.1416
var dens = 7.85

var diametro1 = 13.2 //------
var diametro2 = 12.5  //-----
var comprimento1 = 5800 //--------
var raio1 = diametro1*diametro1
var raio3 = diametro2*diametro2
var r1 = ((raio1*pi*dens)*comprimento1)/1000000
var a1 = r1

var r3 = ((raio3*pi*dens)*comprimento1)/1000000
var perda = (1-(r3/r1))*100

var diametro3 = 12.5  //--------
var comprimento2 = 2033 //-------
var raio2 = diametro3*diametro3
var quant = Math.floor(comprimento1/comprimento2)
var r2 = ((raio2*pi*dens)*comprimento2)/1000000
var a2 = r2

var compriutil = Math.floor(comprimento1/quant)
var r3 = ((raio2*pi*dens)*compriutil)/1000000

console.log(`Peso da barra 26,4Ø de ${comprimento1} : ${a1.toFixed(3)}`)
console.log(`Perda em relação ao aço de 25Ø: ${perda.toFixed(2)}%`)
console.log(`Quantidade de peças pós usinagem:${quant.toFixed(0)}`)
console.log(`Comprimento da guia: ${comprimento2}`)
console.log(`Peso da guia: ${a2.toFixed(3)}`)
console.log(`Comprimento Util: ${compriutil.toFixed(0)}`)
console.log(`Peso do comprimento util: ${r3.toFixed(3)}`)
console.log(`Para duas guias ${(((1-(comprimento2/compriutil))*100)*2).toFixed(2)}`)
console.log(`Perda: ${((1-(comprimento2/compriutil))*100).toFixed(2)}%`)
