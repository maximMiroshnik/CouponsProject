import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionType } from "../../redux/action-type"
import { AppState } from "../../redux/app-state"
import CouponComponent from "../coupon/Coupon-component"
import "./Orders.css"

function Orders() {
    let ordersAmount = useSelector((state: AppState) => state.orders)
    let ordersListLength = ordersAmount.length
    return (
        <div className="orders">
            <button className="orders-button">
                orders({ordersListLength})
            </button>
        </div>
    )
}

export default Orders
