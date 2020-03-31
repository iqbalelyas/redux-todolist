import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import NoteList from './components/Note/NoteList'
import { Provider } from "react-redux";
import store from "./store/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Form />
          <List />
          <NoteList/>
        </div>
      </Provider>
    );
  }
}

export default App;
