import React, { useEffect, useState } from 'react'

export default function FetchProduct() {
const [data,setData] = useState([]);

    useEffect(()=>{

    async function fetchData(){


            try{

              const res = await fetch("https://dummyjson.com/products");
              const jsonData = await res.json();
              const products = jsonData.products;
              setData(products);
                
            } catch(e){
              console.log("error is :",e)
            }
            finally{

            }
        }

        fetchData();








    },[]
)



  return (
    <div>
      <h1>Fetch Product</h1>
      {
        data.map((ele)=>(
          
            <div style={{border:'4px Solid Red',width:'400px',height:'300px',margin:'20px'}}>
              <img src={'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp'} height='40' width='40'></img>
              <h2>
                {ele.id}
              </h2>
              <p>{ele.title}</p>
              <p>{ele.description}</p>
              <button>Add to Cart</button>
            </div>
          )
        )
      }
    </div>
  )
}
