import React,{useState} from 'react'
import Card from '../Card/Card'
const UseState=()=>{
    const [name,setName]=useState('abhishek')
    const [address,setAddress]=useState('Ahmedabad')

    return(
        <Card>
      <h1>{name}</h1>
      <h2>{address}</h2>
      <button onClick={()=>setName('Abhi')}>Set Name</button>
      <button onClick={()=>setAddress('Usa')}>Set Address</button>
        </Card>
    )
}
export default UseState