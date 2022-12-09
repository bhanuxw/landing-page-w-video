import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/logo.png' height={77} width={128} alt={'logo'} />
            </div>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/content'}>Content</Link>            
        </nav>
    );
}

export default Navbar;