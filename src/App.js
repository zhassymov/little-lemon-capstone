import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuCategories from "./components/MenuCategories";
import MenuCards from "./components/MenuCards";
import Footer from "./components/Footer";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";


export default function App() {
    return (
        <>
            <Header/>
            <Main>
                <HomePage/>
            </Main>
            <Footer/>
        </>
    )
}
