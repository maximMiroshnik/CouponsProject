import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ICoupon from "../../models/Icoupon"
import { ActionType } from "../../redux/action-type"
import { AppState } from "../../redux/app-state"
import CouponComponent from "../coupon/Coupon-component"
import "./Coupons.css"

function Coupons() {
    let coupons = useSelector((state: AppState) => state.coupons)
    let [couponsList, setCouponsList] = useState([])

    let dispatch = useDispatch()
    useEffect(() => {
        getCoupons()
    }, [])

    async function getCoupons() {
        try {
            const url = "http://localhost:8080/coupons/"
            let response = await axios.get(url)
            couponsList = response.data
            setCouponsList(couponsList)
            dispatch({ type: ActionType.GetCoupons, payload: { couponsList } })
        } catch (e: any) {
            console.log(e)
        }
    }

    return (
        <div className="coupons-container">
            <h1 className="coupons-header"> TODAY`S COUPONS</h1>
            <div className="coupons-wrapper">
                {coupons.map((coupon: ICoupon) => (
                    <CouponComponent key={coupon.id} {...coupon} />
                ))}
            </div>
        </div>
    )
}

export default Coupons
