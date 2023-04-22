// const clos=document.querySelector(".close");
// const bar=document.querySelector("#bar");
// const nav=document.querySelector("#navbar");
document.querySelector("#bar").addEventListener("click",function(){

    document.querySelector('.cross').style.visibility = 'visible';
// document.querySelector("#close").classList.remove("cross");

    document.querySelector("#navbar2").style.right = '0';
    
});
// if(bar){
//     bar.addEventListener("click",()=>{
//         nav.classList.add("active");
//     })
// }
// if(clos){
//     clos.addEventListener("click",()=>{
//         nav.classList.remove("active");
//     })
// }
document.querySelector("#close").addEventListener("click",function(){
    document.querySelector("#navbar2").style.right = '-300px';

    // document.querySelector('#close').classList.("cross");
    // document.querySelector("#close").classList.toggle("cross");

});
  
setTimeout(function(){

})
