import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
};

class _App extends React.Component<AppProps> {
  onButtonClick = () => {
    this.props.fetchTodos();
  };

  renderList() {
    
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick} type="button">Fetch</button>
      </div>
    );
  };
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos },
)(_App);