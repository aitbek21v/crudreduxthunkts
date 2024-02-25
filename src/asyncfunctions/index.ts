import { AppDispatch } from './../redux/index';
import axios from "axios";
import { actions } from "../actions";

const API: string = "http://localhost:3000/data";
export const addProduct = (newProduct: object) => {
  return async (dispatch:AppDispatch) => {
    try {
      await axios.post(API, newProduct);
      dispatch({ type: actions.ADD_PRODUCT, payload: newProduct });
    } catch (error) {
      console.log(error);
    }
  };
};


export const getProduct = () => {
  return async (dispatch:AppDispatch) => {
    try {
      const url = axios(API)
      dispatch({type:actions.GET_PRODUCT,payload:(await url).data})
    } catch (error) {
      console.log(error);
      
    }
  }
}


export const deleteProduct = (id:any) => {
  return async (dispatch:AppDispatch) => {
    try {
      await axios.delete(`${API}/${id}`)
      dispatch({type:actions.DELETE_PRODUCT,payload:id})
      getProduct()
    } catch (error) {
      console.log(error);
      
    }
  }
}

export const getOneProduct = (id:string) => {
  return async (dispatch:AppDispatch) => {
    try {
      const {data} = await axios(`${API}/${id}`)
      dispatch({type:actions.GET_ONE_PRODUCT,payload:data})
    } catch (error) {
      console.log(error);
      
    }
  }
}

export const editProduct = (editedProduct:object,id:string) => {
  return async (dispatch:AppDispatch) => {
    try {
      await axios.patch(`${API}/${id}`,editedProduct)
    } catch (error) {
      console.log(error);
      
    }
  }
}