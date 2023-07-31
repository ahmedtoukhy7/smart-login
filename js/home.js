
let newarr=JSON.parse(localStorage.arrReg)

for(let i=0;i<newarr.length;i++){
    if(localStorage.arrReg){
        console.log(localStorage.arrReg)
    }
}
document.getElementById("welcome").innerHTML=`Welcome ${localStorage.userName.toUpperCase()}`
console.log(localStorage.userName)