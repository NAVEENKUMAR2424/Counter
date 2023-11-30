// import React from "react";

// class Counter extends React{
//     render(){
//         return(
//             <div>
//                 <p>Hijskkskkksk</p>
//             </div>
//         )
//     }
// }

// export default Counter

import React, { useState } from 'react'
import './index.css'

const Counter = () => {
    const[count,hook]=useState(0)
  return (
    <div className='Contain'>
      <h1 className='Heading'>Counter</h1>
      <p>You clicked {count}</p>
      <button onClick={()=>hook(count+1)}>Onclick</button>
    </div>
  )
}

export default Counter
