import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [animate,setAnimate] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setAnimate((prevValue) => true);

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    
    setAnimate((prevValue) => false);

    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {animate ? <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        /> : null}
        {animate ? <Zoom in={true}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom> : null}
      </form>
    </div>
  );
}

export default CreateArea;
