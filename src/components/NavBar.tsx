import Toggle from "./Toggle"
import "./NavBar.css"

function NavBar(){
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <>
        <nav className="navbar">
            <div className="logo">
                <a href="/Home">
                <img src="/img/logo.png" alt="NNI logo" className="logo-img" />
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

                    <button className="navbar-link" onClick={() => scrollTo("event-section")}>
                    Events
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