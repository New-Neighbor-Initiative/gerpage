import "./Footnote.css"


function Footnote() {

    return (
        <footer id="footnote-section">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#home-section">Home</a>

                    <a href="#about-section">About</a>
                    <a href="#team-section">Team</a>
                    <a href="#contact-section">Contact</a>
                </div>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} New Neighbor Initiative. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )

}

export default Footnote;