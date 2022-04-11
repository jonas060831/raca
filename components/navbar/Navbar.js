import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import { Sun, Moon, Menu, X } from 'react-feather'



const Navbar = () => {

    const [screenWidth, setscreenWidth] = useState(0)
    const [isShown, setisShown] = useState(false)
    const [themeIcon, setThemeIcon] = useState(<Moon/>)

    useEffect(() => {
        setscreenWidth(screen.width)
    }, [])


    const changeTheme = () => {
        
        document.body.classList.toggle("dark-theme");
        const inDarkTheme = document.body.classList.contains("dark-theme");
        if (inDarkTheme) {
            setThemeIcon(<Sun/>)
        } else {
            setThemeIcon(<Moon />)
        }
    }
    const openNav = () => setisShown(true)
    const closeNav = () => setisShown(false)
    


    return (
        <nav className={styles.nav} >

        <div className={styles.container}>
            {/* shows only in mobile */}
            <div className={styles.openMenu}> <Menu onClick={ () => openNav() } /> </div>

            <ul className={styles.mainMenu} style={ isShown ? { display: 'block'} : {} }>

                <li> <Link href="/" >Home</Link> </li>

                <li> <Link href="/services" >Services</Link> </li>

                <li>Gallery</li>

                <li>Contact Us</li>

                {/* force sun to be on the right side when on mobile screen*/}
                <li
                style={ screenWidth === 0 || screenWidth >=  428 ? { float:'right'} : {} }
                onClick={ () => changeTheme()}
                >
                    {themeIcon}
                </li>

                {/* shows only in mobile */}
                <div className={styles.closeMenu} onClick={ () => closeNav() }  > <X/> </div>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar