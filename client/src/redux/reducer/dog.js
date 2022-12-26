import {
  DOG_FAILURE,
  DOG_SUCCESS,
  DOG_REQUEST,
  FILTER_TEMPERS,
  FILTER_DOG_NAME,
  RESET_DOGS,
  ALPHABETIC_ASC,
  ALPHABETIC_DES,
  WEIGHT_ASC,
  WEIGHT_DES,
} from "../actions/dog";

const initialState = {
  loading: false,
  dogApi: [],
  dog: [],
  error: [],
};

function storeDog(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: [],
      };
    case DOG_SUCCESS:
      return {
        ...state,
        loading: false,
        dogApi: payload,
        dog: payload,
      };
    case DOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: [...state.error, payload],
      };
    case FILTER_TEMPERS:
      return {
        ...state,
        dog: state.dog.filter(({ temperament }) =>
          temperament
            ? temperament.toLowerCase().includes(payload.toLowerCase())
            : false
        ),
      };
    case FILTER_DOG_NAME:
      return {
        ...state,
        dog: state.dog.filter(({ name }) =>
          name.toLowerCase().includes(payload.toLowerCase())
        ),
      };
    case RESET_DOGS:
      return {
        ...state,
        dog: state.dogApi,
      };
    case ALPHABETIC_ASC:
      return {
        ...state,
        dog: [
          ...state.dog.sort(({ name: a }, { name: b }) =>
            a.toLowerCase() > b.toLowerCase()
              ? 1
              : a.toLowerCase() < b.toLowerCase()
              ? -1
              : 0
          ),
        ],
      };
    case ALPHABETIC_DES:
      return {
        ...state,
        dog: [
          ...state.dog.sort(({ name: a }, { name: b }) =>
            a.toLowerCase() < b.toLowerCase()
              ? 1
              : a.toLowerCase() > b.toLowerCase()
              ? -1
              : 0
          ),
        ],
      };
    case WEIGHT_ASC:
      return {
        ...state,
        dog: [
          ...state.dog
            .sort(
              ({ weight: a }, { weight: b }) =>
                parseInt(a.slice(0, 2)) - parseInt(b.slice(0, 2))
            )
            .sort(
              ({ weight: a }, { weight: b }) =>{
                if(parseInt(a.slice(0,2))===parseInt(b.slice(0,2)))
                return parseInt(a.slice(-2)) - parseInt(b.slice(-2));
                else
                return 0;
              }
            ),
        ],
      };
    case WEIGHT_DES:
      return {
        ...state,
        dog: [
          ...state.dog.sort(
            ({ weight: a }, { weight: b }) =>
              parseInt(b.slice(-2)) - parseInt(a.slice(-2))
          ),
        ],
      };
    default:
      return state;
  }
}
export default storeDog;
