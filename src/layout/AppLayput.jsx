import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from 'react-router-dom';

const AppLayput = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default AppLayput;