import './App.css';
import * as api from "./utils/api";
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getAllUsers()
    .then(res => {
      setUsers(users => (res.data));
    })
    .catch(console.log);

  }, []);

  return (
    <div className="App">
      <Sidebar users={users}/>
      <Main/>
    </div>
  );
}

export default App;
