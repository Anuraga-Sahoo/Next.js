import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return <header className='flex flex-row justify-between'>
    <div>
        Logo
    </div>
    <nav >
        <ul className='flex flex-row gap-4'>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/service">Services</Link>
            </li>
            <li>
                <Link href="/contact">Contact us</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/clientcomp">clientcomp</Link>
            </li>
            <li>
                <Link href="/servercomp">server comp</Link>
            </li>
        </ul>
    </nav>
  </header>
}

export default Navigation
