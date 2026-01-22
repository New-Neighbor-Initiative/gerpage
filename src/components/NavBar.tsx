import logo from "../assets/logo.svg";
import "./NavBar.css";
import { useEffect, useState } from "react";

function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Threshold for hiding the navbar (to avoid flickering on small scrolls)
    const HIDE_THRESHOLD = 50;

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            // Always show at the very top
            if (currentScrollY < 10) {
                setIsVisible(true);
                setLastScrollY(currentScrollY);
                return;
            }

            // Determine scroll direction and magnitude
            if (currentScrollY > lastScrollY && currentScrollY > HIDE_THRESHOLD) {
                // Scrolling DOWN -> Hide
                setIsVisible(false);
                setIsMobileMenuOpen(false); // Close mobile menu if scrolling
            } else {
                // Scrolling UP -> Show
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const scrollTo = (id: string) => {
        setIsMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${!isVisible ? "navbar-hidden" : ""} ${window.scrollY > 10 ? "navbar-scrolled" : ""}`}>
            <div className="navbar-container">
                <div className="logo">
                    <a href="#home-section" onClick={(e) => { e.preventDefault(); scrollTo('home-section'); }}>
                        <img src={logo} alt="NNI logo" className="logo-img" />
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="desktop-nav">
                    <button className="navbar-link" onClick={() => scrollTo("home-section")}>Home</button>

                    <button className="navbar-link" onClick={() => scrollTo("about-section")}>About Us</button>
                    <button className="navbar-link" onClick={() => scrollTo("team-section")}>Team</button>
                    <button className="navbar-link" onClick={() => scrollTo("contact-section")}>Contact</button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={toggleMobileMenu}>
                    <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
                    <button className="mobile-link" onClick={() => scrollTo("home-section")}>Home</button>

                    <button className="mobile-link" onClick={() => scrollTo("about-section")}>About Us</button>
                    <button className="mobile-link" onClick={() => scrollTo("team-section")}>Team</button>
                    <button className="mobile-link" onClick={() => scrollTo("contact-section")}>Contact</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;