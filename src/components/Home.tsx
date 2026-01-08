function Home(){
    return(
        <div className="home-page-whole" id="home-section">
            <div className='home-page'>
                <h1>Welcome to National Parks</h1>
                <p>Learn more about National Parks and explore all the services that parks offer.</p>
                <button className='start-button'
                onClick={() => {
                    const section = document.getElementById("activities-section");
                    if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    }
                }}>
                Start
                </button>
            </div>
        </div>
        
    );
}

export default Home;