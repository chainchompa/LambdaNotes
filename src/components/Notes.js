import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Notes extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.handleDisplayNotes();
  }
  componentDidCatch() {
    this.handleDisplayNotes();
  }
  handleDisplayNotes = () => {
    axios
      .get(`${process.env.REACT_APP_API}/api/notes`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="notes">
        <h1>Your Notes:</h1>
        <ul>
          {this.props.notes.map(note => {
            return (
              <div className="note">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/note/${note.id}`}
                  key={Math.random()}
                >
                  <div className="note-text">
                    <h2>{note.title.substring(0, 15)}</h2>
                    <p>{note.content.substring(0, 120)}...</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Notes;
