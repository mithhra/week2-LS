import React,{useState,useEffect} from 'react';
import './style.css';
import NoteForm from './components/noteform';
import NoteList from './components/notelist';


const App =() => {
  const [notes,setNotes]=useState([]);
  const[noteToEdit,setNoteToEdit]=useState(null);
  const[isDarkMode,setIsDarkMode] =useState(false);
  

  useEffect(()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
  
  },[notes]);

  useEffect(() =>{
const savedNotes =JSON.parse(localStorage.getItem('notes'));
if(savedNotes){
setNotes(savedNotes);}
  },[]);


const addNote = (note) => {
  setNotes([...notes,{...note,id:Date.now()}]);
if (note.title==='' || note.content===''){
  setNotes([...notes]);
  alert(note.title===''?'Title required':'content required');
}};
  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

const editNote = (updatedNote) => {
  setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
  setNoteToEdit(null);
};

  
const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};
return (

  <div className={`app ${isDarkMode ? 'dark-mode' : ''}`} >
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mt-3 mb-3 ">
        <h1>Notes</h1>
        <div>
          <label className="form-check-label me-2">Dark Mode</label>
          <input
            type="checkbox"
            className="form-check-input"
            onChange={toggleDarkMode}
          />
        </div>
      </div>
      <NoteForm addNote={addNote} editNote={editNote} noteToEdit={noteToEdit} setNoteToEdit={setNoteToEdit} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={setNoteToEdit} />
    </div>
  </div>
);
};
export default App;