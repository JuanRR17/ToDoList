import React from 'react';
import { BrowserRouter as Router, 
    Routes, Route } from 'react-router-dom';
import ToDoList from './ToDoList';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoList/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
