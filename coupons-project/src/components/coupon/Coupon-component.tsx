import { useState } from "react"
import { useDispatch } from "react-redux"
import ICoupon from "../../models/Icoupon"
import { ActionType } from "../../redux/action-type"
import Orders from "../orders/Orders"
import "./Coupon-component.css"

function CouponComponent(coupon: ICoupon) {
    const dispatch = useDispatch()

    const updateOrders = () => {
        dispatch({
            type: ActionType.AddToOrders,
            payload: { couponId: coupon.id },
        })
    }
    function updateCouponName() {}

    function formatDate(date: string): string {
        const d = new Date(date)
        const year = d.getFullYear()
        const month = (d.getMonth() + 1).toString().padStart(2, "0")
        const day = d.getDate().toString().padStart(2, "0")
        return `${year}-${month}-${day}`
    }

    const startDate = formatDate(coupon.startDate)
    const endDate = formatDate(coupon.endDate)
    return (
        <div className="CouponComponent">
            <h2 className="coupon-name">Coupon: {coupon.name}</h2>
            <div className="coupon-details">
                <tr>
                    <th>Category: {coupon.category}</th>
                    <th>Company: {coupon.companyName}</th>
                    <th>Description: {coupon.description}</th>
                    <th>Price: {coupon.price}</th>
                    <th>Start Date: {startDate}</th>
                    <th>End Date: {endDate}</th>
                </tr>
            </div>
            <div className="add-to-orders">
                <button
                    className="add-to-orders-button"
                    onClick={() => updateOrders()}
                >
                    Add to order
                </button>
                <button className="update-button" onClick={updateCouponName}>
                    Update
                </button>
            </div>
        </div>
    )
}

export default CouponComponent
