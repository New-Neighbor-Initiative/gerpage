import Toggle from "./Toggle"
import "./NavBar.css"

function NavBar(){
    return(
        <>
        <nav className="navbar">
            <div className="logo">
                <a href="/Home">
                <img src="/img/logo.png" alt="NNI logo" className="logo-img" />
                </a>
            </div>

            <div className="right">
                <a href="./Home">Home</a>
                <a href="./About">About Us</a>
                <a href="./Home">Team</a>
                <a href="./Home">Events</a>
                <a href="./Home">Contact</a>
            </div>
        </nav>

        </>
    )
}

export default NavBar;