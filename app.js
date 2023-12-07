console.log("hola")
const li =  document.querySelectorAll(".li")
console.log(li)
const bloque = document.querySelectorAll(".bloque")
const huella = document.querySelectorAll(".huella")

li.forEach( (cadaLi, i )=>{
    li[i].addEventListener("click",() =>{
        
        li.forEach((cadaLi, i )=>{
            li[i].classList.remove("activo")
            bloque[i].classList.remove("activo")
            huella[i].classList.remove("activo")
            
        })

        li[i].classList.add("activo")
        bloque[i].classList.add("activo")
        huella[i].classList.add("activo")

    })

})



botonBarcaza = document.getElementById("botonBarcaza")
botonBarcaza.addEventListener("click",
function calculoBarcazas(){

    console.log(document.getElementById("ToneladasBarcazas").value )
    console.log(document.getElementById("KilometrosBarcazas").value )
    kilometrosBarcazas = document.getElementById("KilometrosBarcazas").value
    toneladasBarcazas = document.getElementById("ToneladasBarcazas").value
    TotalBarcazas = document.getElementById("TotalBarcazas")
    TotalBarcazasValue = TotalBarcazas.textContent
    console.log(TotalBarcazas)
    console.log(TotalBarcazasValue)


    factor_emision = 0.0141
    co2barcazas=parseFloat(kilometrosBarcazas)*parseFloat(toneladasBarcazas)*factor_emision
    co2barcazasnuevo = parseFloat(TotalBarcazasValue)+ co2barcazas
    TotalBarcazas.innerHTML =co2barcazasnuevo.toFixed(2)
    console.log(co2barcazas)

    Totalanterior =document.getElementById("TotalTodo").textContent
    TotalNuevo = document.getElementById("TotalTodo")
    TotalNuevoValue = parseFloat(Totalanterior) + co2barcazas
    TotalNuevo.innerHTML = TotalNuevoValue.toFixed(2)
    


})



BotonTren = document.getElementById("BotonTren")
BotonTren.addEventListener("click",
function calculoTren(){

    console.log("funciona")

    
    KilometrosTren = document.getElementById("KilometrosTren").value
    ToneladasTren = document.getElementById("ToneladasTren").value
    TotalTrenes = document.getElementById("TotalTrenes")
    TotalTrenesValue = TotalTrenes.textContent


    factor_emision = 0.02779
    co2trenes=parseFloat(KilometrosTren)*parseFloat(ToneladasTren)*factor_emision
    co2trenesnuevo = parseFloat(TotalTrenesValue)+ co2trenes
    TotalTrenes.innerHTML =co2trenesnuevo.toFixed(2)
    

    Totalanterior =document.getElementById("TotalTodo").textContent
    TotalNuevo = document.getElementById("TotalTodo")
    TotalNuevoValue = parseFloat(Totalanterior) + co2trenes
    TotalNuevo.innerHTML = TotalNuevoValue.toFixed(2)
    


})



BotonCamiones = document.getElementById("BotonCamiones")
BotonCamiones.addEventListener("click",
function CalculoCamiones(){
    tipo = document.getElementById("TipoCamiones").value
   
    KilometrosCamion = document.getElementById("KilometrosCamiones").value
    console.log(KilometrosCamion)

    if(tipo == "Articulado"){
        factor_emision = 0.917
    }else{
        factor_emision =1.07
    }

    console.log(factor_emision)
   
    TotalCamiones = document.getElementById("TotalCamiones")
    TotalCamionesValue = TotalCamiones.textContent
    co2camiones=parseFloat(KilometrosCamion)*factor_emision
    co2camionesnuevo = parseFloat(TotalCamionesValue)+ co2camiones
    TotalCamiones.innerHTML =co2camionesnuevo.toFixed(2)
    

    Totalanterior =document.getElementById("TotalTodo").textContent
    TotalNuevo = document.getElementById("TotalTodo")
    TotalNuevoValue = parseFloat(Totalanterior) + co2camiones
    TotalNuevo.innerHTML = TotalNuevoValue.toFixed(2)
    

}
)
    

/*
function calcular(){
    toneladasBarcazas = document.getElementById("ToneladasBarcazas").value 
    kilometrosBarcazas = document.getElementById("KilometrosBarcazas").value 
  
    if (document.getElementById("inputState").value == "Camiones"){
        if(document.getElementById("Tipo").value == "Refrigerado"){
            if(document.getElementById("Vehiculo").value == "Rigido"){
                if(document.getElementById("Carga").value == "0%"){
                    factor_emision = 0.784
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                    
                }else if (document.getElementById("Carga").value == "50%"){
                    factor_emision = 0.932
                    co2= (parseFloat(kilometros) * factor_emision )/1000
                }else {
                    factor_emision =1.081
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }
            }else{
                if(document.getElementById("Carga").value == "0%"){
                    factor_emision = 0.73 
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }else if (document.getElementById("Carga").value == "50%"){
                    factor_emision = 0.966
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }else {
                    factor_emision =1.202
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }
            }
        
        }else{
            if(document.getElementById("Vehiculo").value == "Rigido"){
                if(document.getElementById("Carga").value == "0%"){
                    factor_emision = 0.658
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }else if (document.getElementById("Carga").value == "50%"){
                    factor_emision = 0.783
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }else {
                    factor_emision = 0.908
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }
            }else{
                if(document.getElementById("Carga").value == "0%"){
                    factor_emision = 0.632
                    co2=( parseFloat(kilometros) * factor_emision )/1000
                }else if (document.getElementById("Carga").value == "50%"){
                    factor_emision = 0.835
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }else {
                    factor_emision = 1.039
                    co2= (parseFloat(kilometros) * factor_emision)/1000
                }
            }

        }
    }else if(document.getElementById("inputState").value == "Barcos"){
        if(document.getElementById("Tipo").value =="Bulk Carrier"){
            if(document.getElementById("Toneladas").value >= "0" && document.getElementById("Toneladas").value <= "9999" ){
                factor_emision = 0.030
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision )/1000
            }else if (document.getElementById("Toneladas").value >= "10000" && document.getElementById("Toneladas").value <= "34999" ){
                factor_emision = 0.008
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision )/1000
            }else if (document.getElementById("Toneladas").value >= "35000" && document.getElementById("Toneladas").value <= "59999" ){
                factor_emision = 0.006
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else if (document.getElementById("Toneladas").value >= "60000" && document.getElementById("Toneladas").value <= "99999" ){
                factor_emision = 0.004
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else if (document.getElementById("Toneladas").value >= "100000" && document.getElementById("Toneladas").value <= "199999" ){
                factor_emision = 0.003
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else{
                factor_emision = 0.0025
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }
        }else if(document.getElementById("Tipo").value =="Products Tanker" ){
            if(document.getElementById("Toneladas").value >= "0" && document.getElementById("Toneladas").value <= "4999" ){
                factor_emision = 0.046
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else if (document.getElementById("Toneladas").value >= "5000" && document.getElementById("Toneladas").value <= "9999" ){
                factor_emision = 0.030
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else if (document.getElementById("Toneladas").value >= "10000" && document.getElementById("Toneladas").value <= "19999" ){
                factor_emision = 0.019
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else if (document.getElementById("Toneladas").value >= "20000" && document.getElementById("Toneladas").value <= "59999" ){
                factor_emision = 0.010
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else{
                factor_emision = 0.006
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }
        }else {
            if(document.getElementById("Toneladas").value >= "0" && document.getElementById("Toneladas").value <= "4999" ){
                factor_emision = 0.014
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else if (document.getElementById("Toneladas").value >= "5000" && document.getElementById("Toneladas").value <= "9999" ){
                factor_emision = 0.016
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }else{
                factor_emision = 0.012
                co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
            }
        }
    }else {
        factor_emision =  0.02779 
        co2= (parseFloat(kilometros) * parseFloat(toneladas) * factor_emision)/1000
    }

    console.log(co2)
    console.log(factor_emision)
    console.log(document.getElementById("Tipo").value)
    console.log(document.getElementById("Vehiculo").value)
    document.getElementById("co2").innerHTML = co2
}
*/