import ICoupon from "../models/Icoupon"
import IOrder from "../models/IOrder"
import IUser from "../models/IUser"

export class AppState {
    public coupons: ICoupon[] = []
    public coupon: ICoupon = {
        id: 0,
        name: "",
        price: 0,
        description: "",
        category: "",
        companyName: "",
        startDate: "",
        endDate: "",
    }
    public order: IOrder = { id: 0 }
    public orders: any = []
    public id: number = 0
    public user: IUser = {
        id: 0,
        name: "",
        age: 0,
    }
    public users: IUser[] = []
    public searchText = ""
}
