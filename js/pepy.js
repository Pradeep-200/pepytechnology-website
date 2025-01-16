
function lister(){
    const list=document.getElementById("list")
    list.style.position="relative"
    list.style.left="240px"

    const pepy=document.getElementById("pepy3_1")
    pepy.style.position="relative"
    pepy.style.right="440px"

    const pepy1=document.getElementById("serv")
    pepy1.style.position="relative"
    pepy1.style.right="440px"

    const pepy2=document.getElementById("porter")
    pepy2.style.position="relative"
    pepy2.style.left="270px"
    pepy2.style.bottom="245px"

    const pepy3=document.getElementById("porter1")
    pepy3.style.position="relative"
    pepy3.style.left="270px"
    pepy3.style.bottom="245px"

    const pepy4=document.getElementById("contact")
    pepy4.style.position="relative"
    pepy4.style.left="270px"
    pepy4.style.bottom="245px"

    const pepy5=document.getElementById("pepy3_3")
    pepy5.style.position="relative"
    pepy5.style.left="270px"
    pepy5.style.bottom="245px"

    const pepy6=document.getElementById("flag")
    pepy6.style.position="relative"
    pepy6.style.left="155px"
    pepy6.style.top="-220px"
}


document.getElementById("serv")
addEventListener("click",function(){
    var list=document.getElementById("list")
    if(list.style.display==="none"){
        list.style.display="block"
    }
    else{
        list.style.display="none"
    }
})
