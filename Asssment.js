var text = document.getElementById("TextNmaae")
var NUM = document.getElementById("num")
var Sumbiit  = document.getElementById("btn")

var parrntELDiv= document.getElementById("total")

var DeleteToal = document.createElement("span")
var dangerli = document.createElement("li")
dangerli.setAttribute("class","fa-solid fa-trash")

DeleteToal.append(dangerli)

 var totalAmount = document.createElement("div")
var TotalDivText = document.createElement("div")


var validProduct = document.getElementById("productvalid")
var validAmount = document.getElementById("AmounError")
var ul = document.getElementById("ul")
var AoMuNt = 0
// totalAmounText = document.createElement("div").append
// totalAmount = document.createElement("div")
// var TotalDiv = document.createElement("div")

Sumbiit.addEventListener("click",()=>{
    if(text.value =="" && NUM.value==""){
        validProduct.classList.add("visibleAll")
        validAmount.classList.add("visibleAll")
    }
    else{

        InputAmount =Number (NUM.value)
      var parentLI = document.createElement("li")
      var pRoductdiv = document.createElement("div")
      var AmounTDive = document.createElement("div")
       pRoductdiv.innerHTML = text.value
        AmounTDive.innerHTML = InputAmount
        var sapan = document.createElement("span")
        delIocon = document.createElement("li")
        delIocon.setAttribute("class","fa-solid fa-trash")
        sapan.append(delIocon)
        parentLI.append(pRoductdiv,AmounTDive,sapan)
        ul.append(parentLI)
        parrntELDiv.append()
        }

})


 


