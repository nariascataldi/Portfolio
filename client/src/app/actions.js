import axios from 'axios';
import { URL } from '../config/Const';

export const GET_ALL_PROYECTS = 'GET_ALL_PROYECTS';


export function getAllProyects() {
  return async function (dispatch) {
    const json = await axios.get(URL + '/proyects');
    return dispatch({
      type: GET_ALL_PROYECTS,
      payload: json.data
    })
  }
};

