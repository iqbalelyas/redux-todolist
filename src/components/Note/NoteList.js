import React, { Component } from "react";
import { connect } from "react-redux";
import NoteForm from "./NoteForm";

class NotesList extends Component {
  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <h1>Notes</h1>
        <ul className="list-group">
          {this.props.notes.map((note, index) => (
            <li key={index} className="list-group-item container">
              <NoteForm note={note} index={index} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes
  };
};



export default connect(
  mapStateToProps,
  null
)(NotesList);
