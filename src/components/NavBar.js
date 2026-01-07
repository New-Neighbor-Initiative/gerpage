// color schemes: #515a47(green), #d7be82(beige), #7a4419(brown), #755c1b(yellow-green), #400406(maroon)


function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar-inner">
        <button className="navbar-link" onClick={() => scrollTo("home-section")}>
          Home
        </button>

        <button className="navbar-link" onClick={() => scrollTo("activities-section")}>
          Activities
        </button>

        <button className="navbar-link" onClick={() => scrollTo("about-section")}>
          About
        </button>

        <button className="navbar-link" onClick={() => scrollTo("contact-section")}>
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Navbar;

  