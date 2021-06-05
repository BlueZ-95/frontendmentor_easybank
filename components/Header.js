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
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your EasyBank account <br /> will be a one-stop-shop for spending, saving,<br /> budgeting, investing, and much more.</p>
                    <button>Request Invite</button>
                </div>

                {/* Image */}
                <Image src="/bg-intro-desktop.svg" width={300} height={300} layout="fixed" />
            </div>
        </React.Fragment>
    )
}

export default Header
