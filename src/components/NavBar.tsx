import "./NavBar.css"

function NavBar(){
    const scrollTo = (id: string) => {
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
                <img src="https://github.com/NNIDC/object-store/blob/5bc922b499dd37ac1d4f88ff63d87601a1105f6c/assets/logo.png?raw=true" alt="NNI logo" className="logo-img" />
                </a>
            </div>

            <div className="right">
                <nav className="navbar-inner">
                    <button className="navbar-link" onClick={() => scrollTo("event-section")}>
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