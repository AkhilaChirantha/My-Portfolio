import './TopNavBar.css'
import Logo from '../assets/Logo.png'

interface TopNavBarProps {
    onHireMeClick: () => void;
}

export default function TopNavBar({ onHireMeClick }: TopNavBarProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="nav-bar-container">

                <div className='nav-bar-left'>
                    <img src={Logo} alt="Logo" className='Logo' />
                    <div className='logo-name'>Akhila Chiantha</div>
                </div>

                <div className='nav-bar-right'>
                    <a href="#home" className='nav-bar-right-item active-nav' onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                    <a href="#about" className='nav-bar-right-item' onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a>
                    <a href="#projects" className='nav-bar-right-item' onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>My Projects</a>
                    <a href="#contact" className='nav-bar-right-item' onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Me</a>
                    <button className='hire-me-button' onClick={onHireMeClick}>Hire Me</button>
                </div>

            </div>
        </>
    )
}
