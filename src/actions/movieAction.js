import axios from 'axios';
import { searchURL } from '../api';

export const loadMovie = (movie_name) => async (dispatch) => {
    const searchData = await axios(searchURL(movie_name));

    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            search: searchData.data
        }
    })
}
