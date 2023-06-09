import "./User.css";
import { useEffect, useState } from "react";
import useForm from "../../utils/useForm";

const User = ({userInfo, todos, onSave, onAdditionalInfo}) => {
  const [tasksCompleted, setTasksCompleted] = useState(true);
  const { values, handleChange, setValues } = useForm({ "name": userInfo.name, "email": userInfo.email, "street": userInfo.address.street, "city": userInfo.address.city, "zip": userInfo.address.zipcode});

  const areTasksCompleted = (tasks) => {
    const userTasks = tasks.filter(task => task.userId === userInfo.id);
    return userTasks.every(task => task.completed === true);
  }

  const UpdateUserInfo = () => {
    onSave(values);
  };

  const getAdditionalInfo = () => {
    onAdditionalInfo(userInfo.id);
  };

  useEffect(() => {
    setTasksCompleted(areTasksCompleted(todos));
  }, [todos]);


  return(
    <div className={`${tasksCompleted ? "user user_type_tasks-completed" : "user"}`}>
      <form className="user__form">
        <div className="user__id">
          ID: {userInfo.id}
        </div>
        <div className="user__name">
          Name: <input name="name" type="text" value={values["name"]} onChange={handleChange}/>
        </div>
        <div className="user__email">
          Email: <input name="email" type="email" value={values["email"]} onChange={handleChange}/>
        </div>
        <div className="user__other-data"></div>
        <div className="user__address">
        <div className="user__street">
          Street: <input name="street" type="text" value={values["street"]} onChange={handleChange}/>
        </div>
        <div className="user__city">
          City: <input name="city" type="text" value={values["city"]} onChange={handleChange}/>
        </div>
        <div className="user__zip">
          ZIP Code: <input name="zip" type="text" value={values["zip"]} onChange={handleChange}/>
        </div>
        </div>
      </form>

    </div>
  )

};

export default User;