import {
  requestDataFetch,
  requestFailure,
  requestSuccess,
} from './actionTypes';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case requestDataFetch: {
      return { ...state, isLoading: true, error: null, data: null };
    }
    case requestSuccess: {
      return { ...state, isLoading: false, error: null, data: payload };
    }
    case requestFailure: {
      return { ...state, isLoading: false, error: payload, data: null };
    }

    default:
      throw new Error(
        'action type is undefined, error ocurred in useFetch reducer.'
      );
  }
};
