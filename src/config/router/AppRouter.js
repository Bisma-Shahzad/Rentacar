import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "../../screens/Login";
// import Home from "../../screens/userscreens/Home";
// import CarDetails from "../../screens/userscreens/CarDetails";
// import BookNow from "../../screens/userscreens/BookNow";
import Signup from "../../screens/Signup";
import Login from "../../screens/Login";
import Home from "../../screens/userscreens/Home";
import CarDetails from "../../screens/userscreens/CarDetails";
import BookNow from "../../screens/userscreens/BookNow";
import ProtectedRoute from "../ProtectedRoutes";
import AddCars from "../../screens/adminscreens/AddCars";
import Cars from "../../screens/adminscreens/Cars";
import Booking from "../../screens/adminscreens/Booking";
import BookingForm from "../../screens/adminscreens/BookingForm";
import Profile from "../../screens/userscreens/Profile";


function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="cardetails" element={<CarDetails />} />
                    <Route path="booknow" element={<ProtectedRoute Component={BookNow} />} />
                    <Route path="addcars" element={<ProtectedRoute Component={AddCars} />} />
                    <Route path="cars" element={<ProtectedRoute Component={Cars} />} />
                    <Route path="home" element={<ProtectedRoute Component={Home} />} />
                    <Route path="booking" element={<ProtectedRoute Component={Booking} />} />
                    <Route path="bookingform" element={<ProtectedRoute Component={BookingForm} />} />
                    <Route path="profile" element={<ProtectedRoute Component={Profile} />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;