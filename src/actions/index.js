import {INCREMENT,DECREMENT,FETCH_USER,FETCH_USER_REQUEST,FETCH_USER_ERROR} from './../constans';
import {LOAD_USER} from './../constans';
import axios from 'axios';
export const increment = (name) =>{
    return {
        type:INCREMENT,
        name
    }
}
export const decrement = () =>{
    return {
        type:DECREMENT
    }
}

export const get_user = () => {
    // return dispatch => {
    //     dispatch(fetch_user_request())
    //     axios.get('https://randomuser.me/api')
    //     .then(res => {
    //         console.log(res);
    //         dispatch(fetch_user(res.data.results[0]));
    //     })
    //     .catch(error =>{
    //         console.log(error);
    //         dispatch(fetch_user_error(error.response.data))
    //     })
    // }
    return {
        type:LOAD_USER,
        payload:axios.get('https://randomuser.me/api')
    }
}

export const fetch_user = (user) => {
    return {
        type:FETCH_USER,
        user
    }
}

export const fetch_user_request = () => {
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetch_user_error = (error) => {
    return {
        type:FETCH_USER_ERROR,
        error
    }
}