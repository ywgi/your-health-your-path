import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({title, img, paragraph, text}: {title: string, img: string, paragraph: string, text: string }) => {
    return (
        <div className='service-card'>
            <h2>{title}</h2>
            <div className='image-container'>
                <img src={img}/>
            </div>
            <div className='service-text'>
                <p>
                    {paragraph}
                </p>
            </div>
            <Link to="/newsletter" className='service-link-button'>
                {text}
            </Link>
        </div>
    );
}

export default ServiceCard;