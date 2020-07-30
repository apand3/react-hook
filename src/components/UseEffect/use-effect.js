import React,{useState,useEffect} from 'react'
import Card from '../Card/Card'

const UseEffect=()=>{
    const [user,setUser]=useState(null)
    const [search,setSearch]=useState('Abhi')
    useEffect(()=>{
        const fetchFn=async ()=>{
            const response=await fetch(`https://jsonplaceholder.typicode.com/users?username=${search}`);
            const resJson=await response.json();
            setUser(resJson[0])
        
        }
        fetchFn()
    },[search])
    return (
        <Card>
            <input type="text" 
            value={search}
            onChange={event=>setSearch(event.target.value)}
            />
            {
                user?(
                    <div>
                        <h3>{user.name}</h3>
                <h3>{user.username}</h3>
                <h3>{user.email}</h3>
                    </div>
                ):(<p>No user found</p>)
            }
            </Card>
    )
}
export default UseEffect;