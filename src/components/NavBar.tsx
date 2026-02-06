import "./NavBar.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [hidden, setHidden] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); 
      } else {
        setHidden(false); 
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${hidden ? "hide" : ""}`}>
      <div className="navbar_content">
        <a className="navbar_logo" href="/Home">
          <img src="/img/logo.png" alt="NNI logo"/>
        </a>

        <nav className="navbar_links">
          <button className="navbar_link" onClick={() => scrollTo("home-section")}>
            Home
          </button>
          <button className="navbar_link" onClick={() => scrollTo("about-section")}>
            About Us
          </button>
          <button className="navbar_link" onClick={() => scrollTo("team-section")}>
            Team
          </button>
          <button className="navbar_link" onClick={() => scrollTo("event-section")}>
            Events
          </button>
          <button className="navbar_link navbar_cta" onClick={() => scrollTo("contact-section")}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
