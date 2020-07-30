const  INITIAL_STATE={
    user:null,
    search:'abhi'
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.payload
            }
            case 'SET_SEARCH':
                return{
                    ...state,
                    search:action.payload
                }
                default:
                    return state
    }
}
const reducerObj={
    initial_state:INITIAL_STATE,
    reducer:reducer
}
export default reducerObj