import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model'



function App() {
  const [state, setstate] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "God bless you",
    text: "Schedule meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString(),
  }])
  return (
    <div className="App">

    </div>
  );
}

export default App;
