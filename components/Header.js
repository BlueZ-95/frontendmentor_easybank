import headerStyles from '../styles/Header.module.scss';
import Image from 'next/image';
import React from 'react';

function Header() {
    return (
        <React.Fragment>
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
            </div>

            {/* Header Hero */}
            <div className={`${headerStyles.headerHero}`}>
                {/* Content */}
                <div>
                    <h1>Next generation<br/>digital banking</h1>
                    <p>Take your financial life online. Your EasyBank account<br/>will be a one-stop-shop for spending, saving,<br /> budgeting, investing, and much more.</p>
                    <button>Request Invite</button>
                </div>

                {/* Image */}
                <span>
                    <Image src="/bg-intro-desktop.svg" width={900} height={700} layout="fixed" objectFit={'fill'} />
                </span>
                <Image src="/image-mockups.png" width={500} height={600} layout="fixed" objectFit={'fill'} />

            </div>
        </React.Fragment>
    )
}

export default Header
