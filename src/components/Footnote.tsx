import "./Footnote.css"


function Footnote() {

    return (
        <footer id="footnote-section">
            <div className="footer-content">
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} New Neighbor Initiative. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )

}

export default Footnote;