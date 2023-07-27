import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div>
            <Menu />
            <Outlet />
            <Footer />
        </div>
    );
};