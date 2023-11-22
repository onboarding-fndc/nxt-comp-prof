import Link from "next/link";
import { useState } from "react";
import 'tailwindcss/tailwind.css';


export default function Navbar() {
    
    const [isClick,setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    };
  return (
    <nav className="bg-gray-800">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">   
            <div className="flex items-center justify-between h-16">
                <div className="flex item-center">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white font-semibold lg:text-2xl md:text-xl">
                            Barvalabs
                        </Link>
        
                    </div>
                </div>
                <div className="hidden md:block">
                     <div className="ml-4 mr-4 flex items-center space-x-4 lg:text-xl">
                        <Link href="/">
                            <div className="text-white hover:bg-white hover:text-black rounded-lg p-2">Home</div>
                        </Link>
                        <div className="group block relative">
                        <div >
                            <div className="text-white hover:bg-white hover:text-black rounded-lg p-2">Service</div>
                        </div>
                            <div className="hidden  group-hover:block  grid-row-2 min-w-[115px] space-y-2  top-full absolute z-10 rounded-lg bg-white shadow-lg ">
                                
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 1</a>
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 2</a>
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 3</a>
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 4</a>
                            {/* Add more service links as needed */}
                            </div>
                        </div>
                        <Link href="/">
                            <div className="text-white hover:bg-white hover:text-black rounded-lg p-2">Contact</div>
                        </Link>
                        <Link href="/about">
                            <div className="text-white hover:bg-white hover:text-black rounded-lg p-2">About Us</div>
                        </Link>   
                        <div className="text-white block hover:bg-white hover:text-black  hover:rounded-lg bg-orange-600 rounded-lg p-2">
                    <Link href="/LoginPage">Login</Link>
                 </div>                     
                </div>
                </div>
                <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white md:ext-white
            hover:text-white focus:outline-none focus-ring-2 focus:ring-inset focus:ring-white "
            onClick={toggleNavbar}>
                {isClick ? (
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                )

                }
            </button>
        </div>
            </div> 
        </div>
        {isClick && (
            <div className="md:hidden ">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                    <Link href="/">Home</Link>
                 </div>
                <div className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                    <Link href="/about">About Us</Link>
                 </div>
                 <div className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                    <Link href="/">Contact</Link>
                 </div>
                 <div className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                    <Link href="/service">Service</Link>
                    </div>
                    <div className="group block relative">
                        <div >
                            <div className="text-white hover:bg-white hover:text-black rounded-lg p-2">Service</div>
                        </div>
                            <div className="hidden  group-hover:block  grid-row-2 min-w-[115px] space-y-2  top-full absolute  rounded-lg bg-white shadow-lg ">
                                
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 1</a>
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 2</a>
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 3</a>
                            <a href="/service" className="block px-4 py-2 text-white-800 rounded-lg hover:text-white hover:bg-gray-800">Service 4</a>
                            {/* Add more service links as needed */}
                            </div>
                        </div>
                        <div className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                    <Link href="/LoginPage">Login</Link>
                 </div>
                </div>
            </div>
        )}
    </nav>
  );
}