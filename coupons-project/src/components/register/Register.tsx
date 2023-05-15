import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"
import '../styles/common-styles.css'
function Register() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    async function onRegister() {
        try {
            const response = await axios.post(
                "http://localhost:8080/customers",
                {
                    user: {
                        age,
                        userName,
                        password,
                    },
                    address,
                    phoneNumber,
                }
            )
            console.log(response)
            alert("Registration completed!")
            navigate("/login")
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="registerContainer">
            <div className="inputs-wrapper">
            <h1 className="register-header">REGISTER</h1>
                <input
                    type="text"
                    className="userName"
                    placeholder="user name"
                    onChange={(event) => setUserName(event.target.value)}
                />
                <br />
                <input
                    type="password"
                    className="passwordInput"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="phoneNumber"
                    placeholder="phone number"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="address"
                    placeholder="address"
                    onChange={(event) => setAddress(event.target.value)}
                />
                <br />
                <input
                    type="text"
                    className="age"
                    placeholder="age"
                    onChange={(event) => setAge(event.target.value)}
                />{" "}
                <br />
                <button className="regButton"
                    onClick={onRegister}>Sign up</button>
            </div>
        </div>
    )
}

export default Register
