import './style.scss';
import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const Menu: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    const menuRef: any = useRef();
    return (
        <div className='menu'>
            <div onClick={() => {
                navigate('/');
            }}></div>
            <div>
                <button onClick={()=>{
                    menuRef.current.style.display = 'block'
                }} className='hamburger' style={{ display: 'none' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg></button>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
            <div onClick={()=>{
                        menuRef.current.style.display = 'none';
            }} ref={menuRef} className='mobilemenu' style={{ display: 'none' }}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <button onClick={() => {
                        menuRef.current.style.display = 'none';
                    }}>close</button>
                </ul>
            </div>
        </div>
    );
};