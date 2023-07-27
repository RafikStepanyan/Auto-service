import './style.scss';

export const About: React.FC = (): JSX.Element => {
    return (
        <div className='about'>
            <div>
                <div>
                    <h1>About us</h1>
                    <p>At our auto service center, we offer comprehensive vehicle analysis and consultation services to ensure your car is running at its best. Our experienced technicians will thoroughly inspect your vehicle, diagnose any issues, and provide expert advice on the necessary repairs or maintenance.</p>
                </div>
                <div>
                    <h1>Our services</h1>
                    <ol>
                        <li>Vehicle Analysis and Consultation: Our team of skilled technicians will perform a detailed analysis of your vehicle, identifying any potential problems and offering personalized recommendations to keep your car in optimal condition.</li>
                        <li>Engine Services: From routine tune-ups to major engine repairs, we handle all aspects of engine maintenance to ensure smooth and efficient performance.</li>
                        <li>Oil Change and Fluid Services: Regular oil changes and fluid replacements are essential for the longevity of your vehicle. We use high-quality oils and fluids to keep your engine and other systems running smoothly.</li>
                        <li>Brake System Repairs: Our technicians are experts in brake diagnostics, repair, and replacement, ensuring your vehicle's braking system operates safely and effectively.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};