import logo_dark from '../assets/sinaan-dark.png'
import logo_light from '../assets/sinaan-light.png'
import { Link } from 'react-router-dom';

export default function Menu(){
    return (
        <div className='top-nav-container'>
            <Link to="/"><img src={logo_dark} height={100}></img></Link>
            <div className="top-nav">
                <Link to="/"><h3>HOME</h3></Link>
                <Link to="/about"><h3>ABOUT</h3></Link>
                <Link to="/works"><h3>WORKS</h3></Link>
                <Link to="/contact"><h3>CONTACT</h3></Link>
            </div>
        </div>
    )
}