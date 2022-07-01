import { Routes, Route } from 'react-router-dom';
import './App.css';
import { VCalendar } from './Pages/VCalendar';
import { Header } from './Pages/Header';
import { Tasks } from './Pages/Tasks';
import { ToDo } from './Pages/ToDo';


function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='task' element={<Tasks></Tasks>}></Route>
      <Route path='/' element={<ToDo></ToDo>}></Route>
      <Route path='calendar' element={<VCalendar></VCalendar>}></Route>
    </Routes>
    </div>
  );
}

export default App;
