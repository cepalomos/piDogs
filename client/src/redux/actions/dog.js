export const DOG_REQUEST = "DOG_REQUEST";
export const DOG_FAILURE = "DOG_FAILURE";
export const DOG_SUCCESS = "DOG_SUCCESS";

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

export { peticionDog };
