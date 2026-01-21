import logo from "../assets/logo.svg";
import "./NavBar.css"

function NavBar() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <a href="gerpage/Home">
                        <img src={logo} alt="NNI logo" className="logo-img" />
                    </a>
                </div>

                <div className="right">
                    <nav className="navbar-inner">
                        <button className="navbar-link" onClick={() => scrollTo("home-section")}>
                            Home
                        </button>

                        <button className="navbar-link" onClick={() => scrollTo("about-section")}>
                            About Us
                        </button>

                        <button className="navbar-link" onClick={() => scrollTo("team-section")}>
                            Team
                        </button>

                        <button className="navbar-link" onClick={() => scrollTo("contact-section")}>
                            Contact
                        </button>
                    </nav>
                </div>
            </nav>

        </>
    )
}

export default NavBar;