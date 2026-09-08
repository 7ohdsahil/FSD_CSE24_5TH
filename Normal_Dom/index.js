const root=document.getElementById('container');
const button=document.getElementById('btn');
console.log(root);

const h2=document.createElement('h2');
const img=document.createElement('img');

const div=document.createElement('div');

function showData(){
    try{
    h2.innerText="Welcome to DOM";
    h2.style.color='blue';
    h2.style.backgroundColor='cyan';
    root.appendChild(h2);

    img.src="https://w.wallhaven.cc/full/ly/wallhaven-lydzk2.png";
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    root.appendChild(img);
    root.appendChild(h2);
    }

    catch(e){

        console.log(e);

    }
    finally{


    }


}
button.addEventListener('click',showData);