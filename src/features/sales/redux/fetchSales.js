import axios from 'axios'
import { createActions, createReducer } from "reduxsauce"

import {
  SALES_FETCH_SALES_BEGIN,
  SALES_FETCH_SALES_SUCCESS,
  SALES_FETCH_SALES_FAILURE,
  SALES_FETCH_SALES_DISMISS_ERROR,
} from './constants'

export const fetchSales = (args = {}) => {
  console.log(args)
  return dispatch => {
    
    dispatch({ type: SALES_FETCH_SALES_BEGIN })

    const doRequest = async () => {
      try {

        let response = await axios.get(`http://192.168.0.18:3000/sales?_page=1&_limit=${args}`)
        dispatch({type: SALES_FETCH_SALES_SUCCESS, data: response})

      } catch (error) {
        dispatch({type: SALES_FETCH_SALES_FAILURE, data: { error: error }})
        console.error(error)
      }
    }

    return doRequest()
  }
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export const dismissFetchSalesError = () => {
  return {
    type: SALES_FETCH_SALES_DISMISS_ERROR,
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SALES_FETCH_SALES_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchSalesPending: true,
        fetchSalesError: null,
      }

    case SALES_FETCH_SALES_SUCCESS:
      // The request is success
      return {
        ...state,
        salesList: action.data.data,

        fetchSalesPending: false,
        fetchSalesError: null,
      }

    case SALES_FETCH_SALES_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchSalesPending: false,
        fetchSalesError: action.data.error,
      }

    case SALES_FETCH_SALES_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        fetchSalesError: null,
      }

    default:
      return state
  }
}
