import axios from 'axios';
import { URL } from '../config/Const';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';


export function getAllProducts() {
  return async function (dispatch) {
    const json = await axios.get(URL + '/products');
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: json.data
    })
  }
};

