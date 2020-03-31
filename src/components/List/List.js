import React, { Component } from "react";
import { connect } from "react-redux";
import FormEdit from "./FormEdit";

class List extends Component {
  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <ul className="list-group">
          {this.props.todos.map((todo, index) => (
            <li key={index} className="list-group-item container">
              <FormEdit todo={todo} index={index} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

export default connect(
  mapStateToProps,
  null
)(List);
