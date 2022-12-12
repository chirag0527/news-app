import Logo from "../images/logo.svg"

export default function Navbar(){
    return(
        <nav>
            <div className="nav-left">
                <img className="logo" src={Logo} alt="logo"/>
            </div>
            <div className="nav-right">
                <p>Home</p>
                <p>New</p>
                <p>Popular</p>
                <p>Trending</p>
                <p>Categories</p>
            </div>
        </nav>
    )
}