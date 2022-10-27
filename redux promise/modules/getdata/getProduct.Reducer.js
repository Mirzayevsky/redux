const defaultState={
    loading:false,
    error:false,
    success:false,
    data:[]
}

export const getDataReducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'GET_DATA_PENDING':
        return{
            loading:true,
            error:false,
            success:false,
            data:[]
        }
        case 'GET_DATA_FULFILLED':
        return{
            loading:false,
            error:false,
            succes:true,
            data:action.payload.data
        }
        case 'GET_DATA_REJECTED':
        return{
            loading:false,
            error:true,
            success:false,
            data:[]
        }
        default:
            return state
    }
}