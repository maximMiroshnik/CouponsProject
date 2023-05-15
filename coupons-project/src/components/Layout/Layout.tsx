import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Login from "../login/Login"
import Menu from "../menu/Menu"
import Register from "../register/Register"
import "./Layout.css"
import "../styles/common-styles.css"
import Coupons from "../coupon-page/Coupons"
import Users from "../user-page/Users"
import Orders from "../orders/Orders"

function Layout() {

    return (
        <section className="layout">
            <header>
                <Header />
            </header>

                <aside className="aside">
                    <Router>
                        <Menu />
                    </Router>
                </aside>

            <main>
                <Router>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/main" element={<Coupons />} />
                        <Route path="/coupons" element={<Coupons />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </Router>
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </section>
    )
}

export default Layout
