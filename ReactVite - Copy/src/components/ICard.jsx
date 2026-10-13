import React from 'react'

function ICard({data}) {
  return (
    <div style={{border:'5px solid red',width:'600px',height:'500px'}}>
      <h2>College:{data.college}</h2>
      <h2>Roll:{data.roll}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
      <img src={data.pic} height={200} width={300}></img> 
      </div>
  )
}

export default ICard