import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import rootReducer from '../store/reducer';

/**
 * |temp|  'baseURL' - IP adress (IPv4) of your computer
 *
 * (Emulator is a device on it's own that is not running on the same IP(localhost or 127.0.0.1)
 *  as current web browser, postman or your server. In order to make request to server from emulator
 *  it's needed to access to the server via computer IP Address, not 'localhost')
 */
const client = axios.create({
    baseURL: 'xyz',
    responseType: 'json'
});

const store = createStore(
    rootReducer,
    applyMiddleware(
        axiosMiddleware(client)
    )
);

export default store;