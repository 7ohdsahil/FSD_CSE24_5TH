//console.log("sahil")

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2))



// function sqrt(a,b){
//     return Math.sqrt(a+b)
// }

// console.log(sqrt(2,3))





// const sum=function(a,b){
//     return a+b;
// }
// console.log(sum(2,6))




// const sum = (a,b) => {return a+b}
// console.log(sum(3,3))




// (()=>{
//     console.log("Using IIFE")
// })();




// var a = 23;
// console.log(typeof(a))

// if(a<40){
//     var a = 40;
//     console.log("Value of a inside block = "+a);
// }
// console.log("Value of a outside block = "+a);




// function sum(a,b){
//     return a+b;
// }

// function msgwithsum(clbk,msg){
//     const result = clbk(40,50);
//     console.log("hii , "+msg+" your result is = "+ result)
// }
// msgwithsum(sum,"sahil")





// function login(error,msg){
//     if(error){
//         console.log("login failed : "+ error);
//     }
//     else{
//         console.log("Login successfull : "+msg);
//     }
// }

// function loginhandler(username,password,clbk){
//     if(username=="sahil" && password=="2121"){
//         clbk(null,"login success")
//     }
//     else{
//         clbk("Usrname or password is incorrect",null)
//     }
// }

// loginhandler("sahil","2121",login)

// console.log("one")
// setTimeout(()=>{console.log("Two")},1000)
// console.log("three")

const container=document.getElementById("container");
const button=document.getElementById("btn")
// console.log(container);
// console.log(button);


        const h1 = document.createElement('h1');
        console.log(h1);
        
        h1.innerText='Abes Engg College';
        
function ping(){
    try{
            //alert("server ping");
            container.innerHTML='<h2>Welcome to DOM</h2>';

            const img = document.createElement("img");
            
            img.src='https://w.wallhaven.cc/full/7j/wallhaven-7jeozo.jpg';
            img.setAttribute('height',200);
            img.setAttribute('width',200);
            container.appendChild(img);
        
        }catch{
                console.log("error");
        }
    }


button.addEventListener('click',ping);