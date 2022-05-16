import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import './style.css';

function Footer() {
    return (
        <footer className='footer d-flex justify-content-center'>
            <i><a href='https://www.facebook.com' target='_blank'><BsFacebook /></a></i>
            <i><a href='https://www.twitter.com' target='_blank'><BsTwitter /></a></i> 
            <i><a href='https://www.linkedin.com' target='_blank'><BsLinkedin /></a></i>   
        </footer>
    );
}

export default Footer;