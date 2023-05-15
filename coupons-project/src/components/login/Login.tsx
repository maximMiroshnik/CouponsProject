import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
import "./Login.css"
import "../styles/common-styles.css"
import ISuccesfullLogin from "../../models/ISuccesfullLogin"

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function onLogin() {
        try {
            const response = await axios.post(
                "http://localhost:8080/users/login",
                { userName, password }
            )
            console.log(response)
            alert("Welcome You have Enterred The Coupon Site")
            let token: string = response.data
            let decodedToken: any = jwt_decode(token)
            let strSuccesfullLoginResponse: string = decodedToken.sub
            let succesfullLoginResponse: ISuccesfullLogin = JSON.parse(
                strSuccesfullLoginResponse
            )
            console.log(decodedToken)

            axios.defaults.headers.common["Authorization"] = "Bearer " + token
            if (succesfullLoginResponse) {
                navigate("/main")
            }
            // if (succesfullLoginResponse.userType === "CUSTOMER") {
            //     navigate("/customer")
            // }
            // if (succesfullLoginResponse.userType === "ADMIN") {
            //     navigate("/admin")
            // }
            // if (succesfullLoginResponse.userType === "COMPANY") {
            //     navigate("/company")
            // }
        } catch (e: any) {
            console.error(e)
            if (e.response?.data?.error?.message) {
                alert(e.response.data.error.message)
            } else {
                alert("Invalid Password or User Name")
            }
        }
    }

    return (
        <div className="Login-cointainer">
            <div className="login-inputs-wrapper">
                <h1 className="login-header">LOGIN</h1>
                <div className="userNameWrapper">
                    <input
                        type="text"
                        className="userNameInput"
                        placeholder="User Name"
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div className="passwordWrapper">
                    <input
                        type="password"
                        className="passwordInput"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button className="buttonLogin" onClick={onLogin}>
                    LOGIN
                </button>
                <div className="forgot-password-container">
                    <a href="/register">
                        Not a member? <br />
                        SIGN UP here
                    </a>
                    <a className="forgot-password-txt" href="">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login
