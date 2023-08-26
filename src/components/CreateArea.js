import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

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
    event.preventDefault();
  }

  return (
    <div>
      <form className="relative w-[480px] mx-auto my-7 bg-white p-4 rounded-lg shadow-lg">
        <input
           className="w-full border-none p-1 outline-none text-lg"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="w-full border-none p-1 outline-none text-lg resize-none"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="absolute right-3 bottom-[-18px] bg-yellow-400 text-white border-none rounded-full w-9 h-9 shadow-sm cursor-pointer outline-none hover:bg-yellow-500" onClick={submitNote}><i class="fa-solid fa-plus"></i></button>
      </form>
    </div>
  );
}

export default CreateArea;
