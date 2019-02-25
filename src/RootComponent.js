import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import Router from './Router'

class RootComponent extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyARYWj1O1VqIgxxLXZGJ9RRIjGGuLOgSDU",
            authDomain: "manager-aziziraheem.firebaseapp.com",
            databaseURL: "https://manager-aziziraheem.firebaseio.com",
            projectId: "manager-aziziraheem",
            storageBucket: "",
            messagingSenderId: "17163224271"
        };
        firebase.initializeApp(config);
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default RootComponent;