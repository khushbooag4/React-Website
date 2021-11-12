import {Link} from 'react-router-dom'
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div>
            <h1>Connect through Social Media</h1>
            <div className="icons">
               <a><i class="fab fa-google fa-3x"></i></a>
               <a><i class="fab fa-facebook fa-3x"></i></a>
               <a><i class="fab fa-twitter-square fa-3x"></i></a>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;