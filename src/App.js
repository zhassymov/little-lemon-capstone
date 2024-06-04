import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import {Route, Routes} from "react-router-dom";
import BookingPage from "./pages/BookingPage";


export default function App() {
    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/booking" element={<BookingPage/>}/>
                </Routes>
            </Main>
            <Footer/>
        </>
    )
}
