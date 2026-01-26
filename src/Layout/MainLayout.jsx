
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div >

            <header className="sticky top-0 z-50" >
           

                <Navbar></Navbar>
            
            </header>
            <main className="w-10/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
           
        </div>
    );
};

export default MainLayout;