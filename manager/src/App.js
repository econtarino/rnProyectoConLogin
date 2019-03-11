import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'
class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB48xA6injL9Ist79mONhhSNM7JrsN7MYk",
      authDomain: "manager-30187.firebaseapp.com",
      databaseURL: "https://manager-30187.firebaseio.com",
      projectId: "manager-30187",
      storageBucket: "manager-30187.appspot.com",
      messagingSenderId: "774035897566"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;
