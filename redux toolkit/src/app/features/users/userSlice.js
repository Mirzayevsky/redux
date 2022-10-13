const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    {id:'0',name:'Branden Eich'},
    {id:'1',name:'Stave Jobs'},
    {id:'2',name:'Mark Zuckerberg'},

]
const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})
export const selectAllUsers = (state)=> state.users
export default usersSlice.reducer