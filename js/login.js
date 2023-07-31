let emailLog=document.getElementById("emailLog")
let passLog=document.getElementById("passLog")
let login=document.getElementById("login")
let layer=document.querySelector(".layer")
let closeEl=document.querySelector(".closeEl")
let newarr=JSON.parse(localStorage.arrReg)
console.log(newarr)
let link="home.html"

// sign in

function signin(){
    login.addEventListener("click",function(){
        for(let i=0;i<newarr.length;i++){
            if(newarr[i].email.toLowerCase()==emailLog.value.toLowerCase() && newarr[i].password.toLowerCase()==passLog.value.toLowerCase()){
             localStorage.setItem("userName",newarr[i].name)
                login.setAttribute("href",link)
            }
            else{
                layer.style.display="flex"
            }
        }
    })
}
signin()


closeEl.addEventListener("click",closeFunc)
closeEl.addEventListener("click",Escape)


function closeFunc(){
    layer.style.display="none"
}

function Escape(){
    document.addEventListener("keyup",function(e){
        if(e.key=="Escape"){
            layer.style.display="none"
        }
    })
}