import { useEffect, useReducer } from 'react';
import { initState } from './initState';
import { reducer } from './reducer';
import axios from 'axios';
import {
  requestDataFetch,
  requestFailure,
  requestSuccess,
} from './actionTypes';

const useFetch = async (url) => {
  const [state, dispatch] = useReducer(initState, reducer);
  useEffect(() => {
    dispatch({ type: requestDataFetch });

    axios
      .get(url)
      .then((res) => {
        dispatch({ type: requestSuccess, payload: res });
      })
      .catch((error) => {
        dispatch({ type: requestFailure, payload: error });
      });
  }, [url]);

  return state;
};

export default useFetch;
