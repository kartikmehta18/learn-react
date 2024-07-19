import { createSlice , nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[{}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo ={
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
            
    // useEffect(() => {
    //   const input =JSON.parse(localStorage.getItem("input"))
     
    //    if(input && input.length >0 ){
    //     setInput(input);
    //    }
    //  }, [])
    //  useEffect(() =>{
    //    localStorage.setItem("input", JSON.stringify(input));
    //  },[input])
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer