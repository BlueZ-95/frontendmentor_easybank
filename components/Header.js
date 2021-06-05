import headerStyles from '../styles/Header.module.scss';
import Image from 'next/image';

function Header() {
    return (
        <div className={`${headerStyles.header}`}>
            {/* Logo */}
            <Image src="/logo.svg" width={150} height={20} layout="fixed" />

            {/* Menu */}
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>

            {/* Button */}
            <button>Request Invite</button>
        </div >
    )
}

export default Header
