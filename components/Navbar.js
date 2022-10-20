import Link from 'next/link'
import React from 'react'
import navStyles from '../styles/Nav.module.css'
const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <h2 className={navStyles.title}>Pawarta</h2>
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar