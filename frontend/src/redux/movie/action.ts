import { AxiosError, AxiosResponse } from 'axios';
import { Axios } from '../../common/axios';
import { store } from '../store';
import { SET_MOVIELIST } from './types';

export const getMovieList = () => {
  Axios.get('/movie/list')
    .then((res: AxiosResponse) => {
      store.dispatch({ type: SET_MOVIELIST, payload: res.data.data });
    })
    .catch((err: AxiosError) => {
      console.log(err);
    });
};
