import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import counterApp from './reducers/reducers'
import Counter from './components/Counter';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import AllPosts from './components/AllPosts';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(
    combineReducers({
        global: counterApp,
        routing: routerReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(browserHistory, store);

render( 
    <Provider store={store}>
        <Router history={history}>
            <Route path = '/' component={Home}></Route> 
            <Route path = '/login' component={Login}></Route> 
            <Route path = '/signup' component={Signup}></Route> 
            <Route path = '/profile' component={Profile}></Route>
            <Route path = '/createPost' component={CreatePost}></Route>
            <Route path = '/viewPost' component={ViewPost}></Route> 
            <Route path = '/allPosts' component={AllPosts}></Route> 
        </Router > 
    </Provider>,
    document.getElementById("app")
)