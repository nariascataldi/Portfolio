import {
  GET_ALL_PROYECTS,
} from './actions';


const initialState = {
  allProyects: [],
  proyects: [],
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROYECTS:
      return {
        ...state,
        allProyects: action.payload,
        proyects: action.payload
      }
    default:
      return { ...state }
  }

}

export default rootReducer;