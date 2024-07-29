import './Navbar.css'
import logo from '../assets/logo1.png'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
    const menu = useRef();
    const menubtn = useRef();
    let show = true;
    function showMenu(){
        // console.log(menu)
        if(show){
            menu.current.style = "display:block;"
            show=false
            menubtn.current.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        }else{
            menu.current.style = "display:none;"
            show=true
            menubtn.current.innerHTML = `<i class="fa-solid fa-bars"></i>`
        }
    }
    return (
        <header>
            <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul id='hide' className="navlink" ref={menu}>
                <li><Link to="/">Demos</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about">Services</Link></li>
                <li><Link to="/about">Attorneys</Link></li>
                <li><Link to="/about">Blog</Link></li>
                <li><Link to="/about">All pages</Link></li>
            </ul>
            <button className='btn'>
                Let's Talk
            </button>
            <button id='menubtn' className='hide' onClick={showMenu} ref={menubtn}>
            <i className="fa-solid fa-bars"></i>
            </button>
        </nav>
        </header>
    )
}

export default Navbar;