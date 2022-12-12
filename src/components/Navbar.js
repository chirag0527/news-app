import Logo from "../images/logo.svg"

export default function Navbar(){
    return(
        <nav>
            <div className="nav-left">
                <img className="logo" src={Logo} alt="logo"/>
            </div>
            <div className="nav-right">
                <p className="nav-link">Home</p>
                <p className="nav-link">New</p>
                <p className="nav-link">Popular</p>
                <p className="nav-link">Trending</p>
                <p className="nav-link">Categories</p>
            </div>
        </nav>
    )
}