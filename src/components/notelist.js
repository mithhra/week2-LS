import React from "react";
import Note from './note';

const NoteList = ({notes,onDelete,onEdit}) => {
  return (
   <div className="notes">
    
    {
    notes.map(note => (<Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit}/>

    ))}
    </div>
  ) ; 


};

export default NoteList;