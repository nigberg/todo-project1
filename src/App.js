import './App.css';
import * as api from "./utils/api"
import { useState, useEffect } from 'react';

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
    <h1>App comp</h1>
    <ul>
    {
      users.map((user) => (
        <li key={user.id}>Name: {user.name}, Email: {user.email}</li>
      ))
    }
    </ul>
    <p>App comp footer</p>
      
    </div>
  );
}

export default App;
