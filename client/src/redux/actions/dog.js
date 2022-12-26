export const DOG_REQUEST = "DOG_REQUEST";
export const DOG_FAILURE = "DOG_FAILURE";
export const DOG_SUCCESS = "DOG_SUCCESS";
export const FILTER_TEMPERS = "FILTER_TEMPERS";
export const FILTER_DOG_NAME = "FILTER_DOG_NAME";
export const RESET_DOGS = "RESET_DOGS";
export const ALPHABETIC_ASC = "ALPHABETIC_ASC";
export const ALPHABETIC_DES = "ALPHABETIC_DES";
export const WEIGHT_ASC = "WEIGHT_ASC";
export const WEIGHT_DES = "WEIGHT_DES";

const dogSuccess = (data) => ({ type: DOG_SUCCESS, payload: data });
const dogRequest = () => ({ type: DOG_REQUEST });
const dogFailure = (error) => ({ type: DOG_FAILURE, payload: error });
const peticionDog = (url) => {
  return (dispatch) => {
    dispatch(dogRequest());
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(dogSuccess(data)))
      .catch((erro) => dispatch(dogFailure(erro)));
  };
};
const filterTempers = (temper)=>{
  return {type:FILTER_TEMPERS,payload:temper};
};
const filterDogName = (nameDog)=>{
  return {type:FILTER_DOG_NAME,payload:nameDog};
};
const resetDogs = ()=>{
  return {type:RESET_DOGS};
};
const orderAlphabetic=(order)=>({type:order});

export { peticionDog,filterTempers,filterDogName,resetDogs, orderAlphabetic };
