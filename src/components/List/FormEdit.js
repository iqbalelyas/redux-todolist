import React, { Component } from "react";
import {connect} from 'react-redux'
import {editTodo, deleteTodo} from '../../store/action/todoAction'

class FormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: "show",
      text: props.todo
    };
  }

  handleChange = e => this.setState({ text: e.target.value });

  editButtonHandler = () => this.setState({ viewMode: "edit" });

  saveButtonHandler = () => {
      this.props.editTodo(this.props.index, this.state.text)
      this.setState({viewMode:'show'})
  };

  cancelButtonHandler = () => {
    this.setState({ viewMode: "show" });
  };

  deleteButtonHandler = () => {
    this.props.deleteTodo(this.props.index);
  };

  render() {
    var todo = <p>{this.props.todo}</p>;

    var buttonEdit = (
      <button className="btn btn-primary" onClick={this.editButtonHandler}>
        Edit
      </button>
    );

    if (this.state.viewMode === "edit") {
      todo = (
        <input
          type="text"
          className="form-control"
          value={this.state.text}
          onChange={this.handleChange}
        />
      );

      buttonEdit = (
        <>
          <button className="btn btn-success" onClick={this.saveButtonHandler}>
            Save
          </button>
          <button
            className="btn btn-warning"
            onClick={this.cancelButtonHandler}
          >
            Cancel
          </button>
        </>
      );
    }
    return (
      <div className="row">
        <div className="col-8">{todo}</div>
        <div className="col-4">
          {buttonEdit}
          <button className="btn btn-danger" onClick={this.deleteButtonHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodo : (index,todo) => dispatch (editTodo({index,todo})),
        deleteTodo: index => dispatch(deleteTodo(index))
    }
}

export default connect(null,mapDispatchToProps)(FormEdit);
