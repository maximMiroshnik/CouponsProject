import ICoupon from "../models/Icoupon"
import { Action } from "./action"
import { ActionType } from "./action-type"
import { AppState } from "./app-state"

const appStateInitialValue = new AppState()
export function reduce(
    oldAppState: AppState = appStateInitialValue,
    action: Action
): AppState {
    const newAppState = { ...oldAppState }

    

    switch (action.type) {
        case ActionType.GetCoupons:
            newAppState.coupons = action.payload.couponsList
            break
        case ActionType.AddToOrders:
            newAppState.orders.push(action.payload.order)
            break
        case ActionType.GetUsers:
            newAppState.users = action.payload.usersList
            break
        case ActionType.SearchText:
            newAppState.searchText = action.payload.searchText
    }

    console.log("Reducer returning new state:", newAppState)

    return newAppState
}
