import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='flex bg-red-500'>
    <img className='ms-16 me-96 m-4 h-16' src='https://logo.com/image-cdn/images/kts928pd/production/de7880973c80a1ac3296a4f2b6785c31aa7813bb-500x375.webp?w=640&q=72'></img>
      <Link href='/' className='ms-96 me-4 m-5 bg-center italic text-white text-4xl'>Home</Link>
      <Link href='/About' className='m-5 bg-center italic text-white text-4xl'>About</Link>
      <Link href='/Contact' className='m-5 bg-center italic text-white text-4xl'>Contact</Link>
      <Link href='/Extras' className='m-5 me-10 bg-center italic text-white text-4xl'>Extras</Link>
    </div>
    </>
  )
}
export default Header

//for responsivene 
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <div className='bg-red-500'>
//       <div className='md:flex sm:block text-center'>
//         <div className='m-4 sm:mx-auto'>
//           <img className='h-16' src='https://logo.com/image-cdn/images/kts928pd/production/de7880973c80a1ac3296a4f2b6785c31aa7813bb-500x375.webp?w=640&q=72' alt="Logo" />
//         </div>
//         <Link href='/' className='block sm:inline-block mx-4 my-2 sm:my-0 italic text-white text-2xl sm:text-4xl'>Home</Link>
//         <Link href='/About' className='block sm:inline-block mx-4 my-2 sm:my-0 italic text-white text-2xl sm:text-4xl'>About</Link>
//         <Link href='/Contact' className='block sm:inline-block mx-4 my-2 sm:my-0 italic text-white text-2xl sm:text-4xl'>Contact</Link>
//         <Link href='/Extras' className='block sm:inline-block mx-4 my-2 sm:my-0 italic text-white text-2xl sm:text-4xl'>Extras</Link>
//       </div>
//     </div>
//   );
// }

// export default Header;

