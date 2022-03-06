import {createStore} from 'redux'

import cart from "../reducers";

const store = createStore(cart);

export default store;