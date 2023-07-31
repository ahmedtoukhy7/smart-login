
let nameReg=document.getElementById("nameReg")
let emailReg=document.getElementById("emailReg")
let passReg=document.getElementById("passReg")
let signupInput=document.getElementById("signup")
let one=document.querySelector(".one")
let two=document.querySelector(".two")
let three=document.querySelector(".three")
let layer=document.querySelector(".layer")
let closeEl=document.querySelector(".closeEl")
let link="index.html"

let arrReg=[]
if(localStorage.arrReg !=null){
    arrReg=JSON.parse(localStorage.arrReg)
}
function signup(){
    signupInput.addEventListener("click",function(){
        let user={
            name:nameReg.value,
            email:emailReg.value,
            password:passReg.value
        }
        if (valid(/^[A-Za-z][A-Za-z0-9_]{3,15}$/,nameReg,one)==true &&  valid(/^[A-Za-z0-9+_.-]+@(.+)$/,emailReg,two)==true &&valid(/^[A-Za-z0-9]{2,10}$/,passReg,three)==true &&notRepeat()!=true){
            arrReg.push(user)
            localStorage.setItem("arrReg",JSON.stringify(arrReg))
           
            signupInput.setAttribute("href",link)
        }
       

    })
}
signup()



function valid(regex,input,div){
    // let regex=/^[A-Za-z][A-Za-z0-9_]{3,15}$/

    if(regex.test(input.value)==true){
        div.classList.add("d-none")
        div.classList.remove("d-block")
        return true
    }
    else{
        div.classList.add("d-block")
        div.classList.remove("d-none")
        layer.style.display="flex"
        return false
    }
}
signupInput.addEventListener("click",function(){
    valid(/^[A-Za-z][A-Za-z0-9_]{3,15}$/,nameReg,one)
})
signupInput.addEventListener("click",function(){
    valid(/^[A-Za-z0-9+_.-]+@(.+)$/,emailReg,two)
})
signupInput.addEventListener("click",function(){
    valid(/^[A-Za-z0-9]{2,10}$/,passReg,three)
})
signupInput.addEventListener("click",notRepeat)


function notRepeat(){
    for(let i=0;i<arrReg.length;i++){
        //console.log(arrReg[i].name)
        if(arrReg[i].email==emailReg.value){
            one.classList.add("d-block")
            one.classList.remove("d-none")
            layer.style.display="flex"
            return true
        }
    }
    one.classList.add("d-none")
    one.classList.remove("d-block")

}


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
