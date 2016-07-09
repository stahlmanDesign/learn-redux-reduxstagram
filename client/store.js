import {createStore, compose } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory} from 'react-router';

// import the route reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create obj for def. data
const defaultState = {
  posts, // in ES6, if key name is same as value, is implied posts:posts
  comments // same as above; comments:comments
}

// tell chrome extension about redux dev tools about store
const enhancers = compose( // imported from redux
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers); // enhancers optional for dev tools

// export so can be used in another file
export const history = syncHistoryWithStore(browserHistory, store); // take push state and weave into Reduxstagram

// hot reload reducers requires telling modules which have changed
if (module.hot){
  module.hot.accept('./reducers/',() =>{
    // cannot use ES6 import inside a function
    // use require instead

    // re=require
    const nextRootReducer = require('./reducers/index').default;

    // replace store with not reloaded reducer
    // actually plays back state changes
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
