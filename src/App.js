import './App.css';
import * as api from "./utils/api";
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {

  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all([api.getAllUsers(), api.getAllTodos(), api.getAlltPosts()])
    .then(values => {
      setUsers(values[0].data);
      setTodos(values[1].data);
      setPosts(values[2].data);
    })
    .catch(console.log);

  }, []);

  return (
    <div className="App">
      <Sidebar users={users} todos={todos} posts={posts}/>
      <Main/>
    </div>
  );
}

export default App;
