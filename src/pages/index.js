import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'
import Navbar from 'components/Navbar'
import Hero from 'components/Hero'
import About from 'components/About'
import Contact from 'components/Contact'
import Price from 'components/Price'
import Keunggulan from 'components/Keunggulan'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`bg-white`}>

      <Navbar />
      <Hero />
      <Keunggulan/>
      <div className='border-b border-gray-300 shadow-md p-4 mb-4'>
        <Price/>
      </div>
      <div className="p-2 max-w-7xl  mx-auto bg-white">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form below</p>
      <Contact />
      </div>
    </div>
    
  )
}
