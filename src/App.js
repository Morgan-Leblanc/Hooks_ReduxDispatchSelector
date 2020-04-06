import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoInput />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
