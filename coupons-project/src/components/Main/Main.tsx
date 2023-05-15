import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ICoupon from "../../models/Icoupon"
import { ActionType } from "../../redux/action-type"
import { AppState } from "../../redux/app-state"
import Coupons from "../coupon-page/Coupons"
import CouponComponent from "../coupon/Coupon-component"
import Menu from "../menu/Menu"
import Orders from "../orders/Orders"
import Users from "../user-page/Users"
import "./Main.css"

function Main() {
    const { page } = useParams()

    const renderPageComponent = () => {
        if (page === "coupons") {
            return <Coupons />
        } else if (page === "users") {
            return <Users />
        } else {
            return <div>No page found</div>
        }
    }
    return <div className="main">{renderPageComponent()}</div>
}

export default Main
