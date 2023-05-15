import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import IUser from "../../models/IUser"
import { ActionType } from "../../redux/action-type"
import { AppState } from "../../redux/app-state"
import Menu from "../menu/Menu"
import Orders from "../orders/Orders"
import UserComponent from "../user-component/User-component"
import "./Users.css"
function Users() {
    let users = useSelector((state: AppState) => state.users);
  
    let [usersList, setUsersList] = useState([]);
  
    let dispatch = useDispatch();
  
    useEffect(() => {
      getUsers();
    }, []);
  
    async function getUsers() {
      try {
        const url = "http://localhost:8080/users";
        let response = await axios.get(url);
        usersList = response.data;
        setUsersList(usersList);
        dispatch({ type: ActionType.GetUsers, payload: { usersList } });
      } catch (e: any) {
        console.log(e);
      }
    }
  
    return (
      <div className="users-container">
        <h1 className="users-header">USERS</h1>
        <div className="users-wrapper">
          {usersList.map((user: IUser) => (
            <UserComponent key={user.id} {...user} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Users;