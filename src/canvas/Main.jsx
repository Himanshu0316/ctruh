import React, { useEffect, useState } from 'react'
import "./Main.css"
const Main = () => {
    const [color,setColor] = useState("yellow")
    useEffect(()=>{

    },[color])
  return (
    <div className='Main'>
        <select name="" id="" onChange={(e)=>setColor(e.target.value)}>
            <option value="white" className='white'>colors</option>
            <option value="red" className='red'></option>
            <option value="yellow" className='yellow'></option>
            <option value="blue" className='blue'></option>
            <option value="green" className='green'></option>
        </select>
      <div className='canvas' style={{backgroundColor:color}}></div>
    </div>
  )
}

export default Main
