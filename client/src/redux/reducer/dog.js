import {DOG_FAILURE,DOG_SUCCESS,DOG_REQUEST,FILTER_TEMPERS,FILTER_DOG_NAME} from '../actions/dog';

const initialState = {
    loading:false,
    dogApi:[],
    dog:[],
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
                dog:payload
            };
        case DOG_FAILURE:
            return {
                ...state,
                loading:false,
                error:[...state.error,payload],
            };
        case FILTER_TEMPERS:
            return {
                ...state,
                dog:state.dog.filter(({temperament})=>temperament?temperament.toLowerCase().includes(payload.toLowerCase()):false)
            };
        case FILTER_DOG_NAME:
            return {
                ...state,
                dog:state.dog.filter(({name})=>name.toLowerCase().includes(payload.toLowerCase()))
            };
        default:
        return state;
    };
};
export default storeDog;