import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex bg-green-500'>
    <img className='ms-7 m-4 h-16' src='https://logo.com/image-cdn/images/kts928pd/production/de7880973c80a1ac3296a4f2b6785c31aa7813bb-500x375.webp?w=640&q=72'></img>
      <Link href='/' className='ms-80 me-4 m-4 bg-center italic text-white text-4xl'>Home</Link>
      <Link href='/About' className='m-4 bg-center italic text-white text-4xl'>About</Link>
      <Link href='/Contact' className='m-4 bg-center italic text-white text-4xl'>Contact</Link>
      <Link href='/Extras' className='m-4 bg-center italic text-white text-4xl'>Extras</Link>
    </div>
    </>
  )
}

export default Header
