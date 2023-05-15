import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { AppState } from "../../redux/app-state"
import Coupons from "../coupon-page/Coupons"
import "./Menu.css"
import { useEffect } from "react"

function Menu() {
    let couponsList = useSelector((state: AppState) => state.coupons)
    let couponsListLength = couponsList.length
    let usersList = useSelector((state: AppState) => state.users)
    let usersListLength = usersList.length
    let navigate = useNavigate()
    let ordersList = useSelector((state: AppState) => state.orders)
    let ordersListLength = ordersList.length
    function goToOrders() {
        navigate("/orders")
    }

    function goToCoupons() {
        navigate("/coupons")
    }

    function goToUsers() {
        navigate("/users")
    }

    return (
        <div className="Menu">
            <p>Menu</p>
            <button onClick={goToCoupons} className="coupons-button">
                Coupons({couponsListLength})
            </button>
            <button onClick={goToUsers} className="users-button">
                Users({usersListLength})
            </button>

            <button onClick={goToOrders} className="users-button">
                Orders({ordersListLength})
            </button>
        </div>
    )
}

export default Menu
