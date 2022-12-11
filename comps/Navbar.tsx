import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <h2 className="logo">Travel</h2>
            <div>
                <Link className="nav-link" href={'/'}>Home</Link>
                <Link className="nav-link" href={'/'}>About</Link>
                <Link className="nav-link" href={'/'}>Content</Link>                
            </div>
        </header>
    );
}

export default Navbar;