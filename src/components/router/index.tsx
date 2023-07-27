import { useRoutes } from 'react-router-dom';
import { Layout } from '../../pages/Layout';
import { Slider } from '../../pages/Slider';
import { About } from '../../pages/About';
import { Error } from '../../pages/Error';
import { Contact } from '../../pages/Contact';


export const UseRoutes = () => {
    const router = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <Slider />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/contacts',
                    element: <Contact />
                },
                {
                    path: '*',
                    element: <Error />
                }
            ]
        }
    ]);
    return router;
};