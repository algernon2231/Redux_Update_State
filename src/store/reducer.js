const initialState = {
  age: 21,
  history: []
}


const reducer = (state = initialState, action) => {
   switch(action.type){
     case 'UP':
        return {
          ...state,
          age: state.age + 1,
          history: state.history.concat({id:Math.random(),age: state.age + action.value})
        }

     case 'DOWN':
        return {
          ...state,
          age: state.age - 1,
          history: state.history.concat({id: Math.random(),age: state.age - action.value})
        }
     case 'DEL_ITEM':
        return {
          ...state,
          history : state.history.filter(el  => el.id !== action.key )
        }   
     default:
       return state
       
    }
   
}

export default reducer