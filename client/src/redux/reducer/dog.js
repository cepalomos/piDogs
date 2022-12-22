import {DOG_FAILURE,DOG_SUCCESS,DOG_REQUEST} from '../actions/dog';

const initialState = {
    loading:false,
    dogApi:[],
    error:[],
};

function storeDog(state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case DOG_REQUEST:
            return {
                ...state,
                loading:true,
                error:[]
            };
        case DOG_SUCCESS:
            return{
                ...state,
                loading:false,
                dogApi:payload,
            };
        case DOG_FAILURE:
            return {
                ...state,
                loading:false,
                error:[...state.error,payload],
            };
        default:
        return state;
    };
};
export default storeDog;