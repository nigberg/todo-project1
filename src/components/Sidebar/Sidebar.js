import "./Sidebar.css";
import { useState, useEffect } from "react";

const Sidebar = ({users}) => {
  const [displayedUsers, setDisplayedUsers] = useState(users);

  useEffect(() => {
    setDisplayedUsers(users)
  }, [])

  const handleClick = () => {
    console.log("Add button clicked")
  };

  const handleChange = (evt) => {
    const newUsers = users.filter(user => user.name.toUpperCase().includes(evt.target.value.toUpperCase()) || user.email.toUpperCase().includes(evt.target.value.toUpperCase()));
    setDisplayedUsers(newUsers);
    console.log(evt.target.value)

  };

    return(
        <div className="sidebar">
          <div className="sidebar__top">
            <p className="sidebar__search-text">Search:</p>
            <form className="sidebar__form">
              <input type="text" className="sidebar__search-input" placeholder="Enter text" onChange={handleChange}/>
            </form>
            <button type="button" className="sidebar__add-button" onClick={handleClick}>Add</button>

          </div>
          <div className="sidebar__users-list">
          <ul>
            {
              displayedUsers.map(user => (
                <li key={user.id}>
                  Name: {user.name}<br/>
                  Email: {user.email}
                </li>
              ))
            }
          </ul>

          </div>

        </div>
    )

}

export default Sidebar;