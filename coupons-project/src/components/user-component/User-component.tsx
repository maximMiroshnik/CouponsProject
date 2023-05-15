import IUser from "../../models/IUser"
import "./User-component.css"

function UserComponent(user: IUser) {
    return (
        <div className="user-component">
            <h2 className="userName">Name: {user.name}</h2>
            <div className="user-details">
                <p>age: {user.age}</p>
            </div>
        </div>
    )
}

export default UserComponent
