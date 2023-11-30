
import React, { useState } from 'react'
import './index.css'
// import { array } from 'prop-types'

const Counter = () => {
    const[count,hook]=useState(0)
    const[color,setcolor]=useState("")

    const handlehook=()=>{
      hook(count+1);
      if (count>=5){
        hook(count+5);
        const colors= `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        setcolor(colors)     
        document.body.style.backgroundColor=color;
      }
  

    }

   
  return (
   
    <div className='Contain'
    style={{
      backgroundColor: color
    }}
    > 
      <h1 className='Heading'>Counter</h1>
      <p>You clicked {count}</p>
      <button onClick={handlehook}>Onclick</button>
    </div>
   
  )
}

export default Counter
