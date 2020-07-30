import React,{useReducer,useEffect} from 'react'
import Card from '../Card/Card'
import Reducer from './reducer'
import {setSearch,setUser} from './action'
import SearchInput from '../Input/input'
import User from '../User/user'
const UseReduce=()=>{
    const [state,dispatch]=useReducer(Reducer.reducer,Reducer.initial_state)
      const {user,search}=state
      useEffect(() => {
             const fetchFn=async()=>{
             const response=await fetch(`https://jsonplaceholder.typicode.com/users?username=${search}`);
             const json=await response.json()
             dispatch(setUser(json[0]))
         }
         fetchFn()
      }, [search])
    return(
        <Card>
         <SearchInput value={search} onChange={ev=>dispatch(setSearch(ev.target.value))}/>
        {
            user?<User user={user}/>:(<p>No User found</p>)
        }
        </Card>
    )
}
export default UseReduce;