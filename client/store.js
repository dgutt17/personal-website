import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';
import axios from 'axios'


const ABOUT = 'ABOUT'

const about = newAbout => {
    return {
        type: ABOUT,
        newAbout
    }
}

const initialState = {
    newAbout: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ABOUT:
            return {...state, newAbout: action.newAbout}
        default: 
            return state
    }
}

export const addAboutThunk = () => {
    return async (dispatch) => {
        const {data} = await axios.get('/api/about')
        dispatch(about(data))
    }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
