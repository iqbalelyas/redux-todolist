import React, { Component } from "react";
import {connect} from 'react-redux'
import {deleteNote,editNote} from '../../store/action/noteAction'


class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: "show",
      text: props.note
    };
  }

  noteHandleChange = (e) => (
      this.setState({text: e.target.value})
  )

  editHandleNoteChange = () => (
      this.setState({viewMode: 'edit'})
  )

saveHandleNoteChange = () => {
    this.props.editNote(this.props.index, this.state.text)
    this.setState({
        viewMode: 'show'
    })
}

cancelHandleNoteChange = () => {
    this.setState({viewMode: 'show'})
}

deleteHandleNoteChange = () => {
    this.props.deleteNote(this.props.index)
}
  render() {
    var note = <p>{this.props.note}</p>;

    var editButtonNote = (
      <button className="btn btn-primary" onClick={this.editHandleNoteChange}>Edit</button>
    );

    if(this.state.viewMode === 'edit'){
        note = (
            <input type="text"
            className="form-control"
            value={this.state.text}
            onChange={this.noteHandleChange}
            />
        )

        editButtonNote = (
            <>
                <button className="btn btn-success" onClick={this.saveHandleNoteChange}>Save</button>
                <button className="btn btn-danger" onClick={this.cancelHandleNoteChange}>Cancel</button>
            </>
        )
    }
    return (
      <div className="row">
        <div className="col-8">{note}</div>
        <div className="col-4">
          {editButtonNote}
          <button className="btn btn-danger" onClick={this.deleteHandleNoteChange}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => {
    return {
      editNote : (index,note) => dispatch(editNote({index,note})),
      deleteNote: index => dispatch(deleteNote(index))
    };
  };

export default connect(null, mapDispatchToProp)(NoteForm);
