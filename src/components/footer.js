import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return (
        <div className='footer'>
            <div className="footer-copyright">
                <h3>© COPYRiGHT 2024 <Link to="/"><b>studio-sinaan</b></Link></h3>
                <h3>All Rights Reserved.</h3>
            </div>
{/*             <div className="footer-social">
                <Link to="https://www.instagram.com/si.naan/" target="_blank"><InstagramIcon/></Link>
            </div> */}
        </div>
    )
}