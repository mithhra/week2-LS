import React,{ useState, useEffect} from "react";

const NoteForm = ({addNote,editNote,noteToEdit,setNoteToEdit}) => {
const[title,setTitle] = useState('');
const[content,setContent]= useState('');



  
useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } 
  }, [noteToEdit]);

  
const handleSubmit = (e) =>{
    e.preventDefault();
    

    if(noteToEdit){ 
       editNote({...noteToEdit,title,content});
     
    }
    else {
        addNote({title,content});
    }
    
    setTitle('');
    setContent('');
    }; 



return (
    <form onSubmit={handleSubmit} >
        <div className="mb-3">
            <input 
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <textarea
            className="form-control"
            placeholder="Content"
            value={content}
            onChange={(e)=> setContent(e.target.value)}
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary me-3">
            {noteToEdit?'Edit Note': 'Add Note'}
        </button>
    </form>
);
};

export default NoteForm;