import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../store/action/todoAction";
import { addNote } from "../../store/action/noteAction";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      choice: "Todo"
    };
  }

  onClickChoice = value => this.setState({ choice: value });

  onChangeHandler = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = () => {
    if (this.state.choice === "Todo") {
      this.props.addTodos(this.state.text);
    } else {
      this.props.addNotes(this.state.text);
    }

    this.setState({ text: "" });
  };

  render() {
    var styleButtonTodo = "";
    var styleButtonNote = "";

    if (this.state.choice === "Todo") {
      styleButtonTodo = "btn-success";
    } else {
      styleButtonNote = "btn-success";
    }
    return (
      <>
        <div className="container" style={{ marginTop: 30 }}>
          <button
            className={`btn m-2 ${styleButtonTodo}`}
            onClick={() => this.onClickChoice("Todo")}
          >
            Switch to Add Todo
          </button>
          <button
            className={`btn ${styleButtonNote}`}
            onClick={() => this.onClickChoice("Notes")}
          >
            Switch to Add Note
          </button>
        </div>
        <h1 style={{ marginTop: 10 }}>Add {this.state.choice}</h1>
        <div className="form-group">
          <input
            value={this.state.text}
            onChange={this.onChangeHandler}
            type="text"
            className="form-control"
            placeholder={`Type ${this.state.choice} Here`}
          />
        </div>
        <button onClick={this.onSubmit} className="btn btn-primary">
          Add {this.state.choice}
        </button>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodos: todo => dispatch(addTodo(todo)),
    addNotes: note => dispatch(addNote(note))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
