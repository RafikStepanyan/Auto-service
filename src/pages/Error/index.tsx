import './style.scss';
import { useNavigate } from 'react-router-dom';

export const Error = () => {
    const navigate= useNavigate();
    return (
        <div className='error'>
            <div>
                <h1>ERROR 404</h1>
                <button onClick={()=>{
                    navigate('/')
                }}>Home page</button>
            </div>
        </div>
    );
};