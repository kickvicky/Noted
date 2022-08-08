import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={handleClick}> <img src="/bin.png" alt="Delete" style={{ height: "20px", width: "20px" }} /> </button>
    </div>
  );
}

export default Note;
