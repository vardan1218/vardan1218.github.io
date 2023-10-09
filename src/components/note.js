import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-60 m-4 float-left">
      <h1 className="text-lg mb-1 whitespace-pre-wrap break-all">{props.title}</h1>
      <p className="text-[15px] mb-2 whitespace-pre-wrap break-all">{props.content}</p>
      <button className="relative float-right mr-2 text-yellow-400 border-none w-9 h-9 cursor-pointer outline-none" onClick={handleClick}><i class="fa-solid fa-trash"></i></button>
    </div>
  );
}

export default Note;
 