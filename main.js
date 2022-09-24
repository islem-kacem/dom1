console.log("test")

var favs=Array.from(document.querySelectorAll(".fa-heart"))
var btn=Array.from(document.querySelectorAll(".fa-trash-alt"))
var cards=Array.from(document.querySelectorAll(".card"))
var plusbtns=Array.from(document.querySelectorAll(".fa-plus-circle"))
var btsmins=Array.from(document.querySelectorAll(".fa-minus-circle"))


for (let fav of favs){
    fav.addEventListener("click", function(){
        if(fav.style.color=="black")
        {fav.style.color="pink"}
        else{

            fav.style.color= "black"
        }

    })
}

for (let i in btn){
   btn[i].addEventListener("click",function(){
    cards[i].remove()
    total()
   })
}

for (let plusbtn of plusbtns){
    plusbtn.addEventListener("click",function(){
    plusbtn.nextElementSibling.innerHTML++
    total()
    })
}

for (let minbtn of btsmins){
    minbtn.addEventListener("click",function(){
        minbtn.previousElementSibling.innerHTML++
        total()
        })
}


function total(){
    let qte=Array.from(document.querySelectorAll('.qute'))
    let price=Array.from(document.querySelectorAll('.unitt-price'))
    let s=0;
    for (let i=0 ; i<price.length ; i++){
        s=s+price[i].innerHTML*qte[i].innerHTML

    }
    document.getElementById('total-price').innerHTML=s

}