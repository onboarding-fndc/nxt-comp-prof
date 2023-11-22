import Navbar from "components/Navbar";
import Image from "next/image";
import Contact from 'components/Contact'
import Price from 'components/Price'
import Keunggulan from 'components/Keunggulan'

const service = () => {
    return (
      <div><Navbar/>
<div className="bg-slate-100">
      <div className="container mx-auto max-w-12xl py-16 px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <div className="text-gray-800 mb-2 items-center">
            <h1 className="mt-20 mb-3 font-bold text-2xl text-left">Website Company Profile</h1>
            </div><p className="text-[#3a27e3] font-medium mb-4 text-md text-left">Platform Google Ads:</p>
            
              <p className=" font-medium text-md mb-8 text-black text-left" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
              <div className="mt-12 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
                <button href="/">
                <div  className="mb-[70px] text-lg font-bold text-gray-800 hover:text-white hover:bg-gray-800 border-gray-800  border-4 rounded-full px-8 py-3 flex items-center justify-center">
                  Konsultasi Gratis</div>
                  </button>
                  </div>
                  </div>
                  <div className="mt-6 md:col-span-1 flex justify-center items-center">
                  <Image src='/3426526-removebg-preview.png' alt='Gambar' width='500' height='500'></Image>
                  </div>
                      </div>
                      </div>
                      </div>
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
    );
  };
  
  export default service;