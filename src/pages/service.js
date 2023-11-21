import Navbar from "components/Navbar";
import Image from "next/image";

const service = () => {
    return (
      <div><Navbar/>

      <div className="container mx-auto max-w-12xl py-16 px-4 md:ml-[200px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="md:col-span-1">
          <div class="text-gray-800 mb-2 items-center">
            <h1 class="mt-20 mb-3 font-bold text-2xl text-left">Website Company Profile</h1>
            </div><p class="text-[#3a27e3] font-medium mb-4 text-md text-left">Platform Google Ads:</p>
            
              <p class=" font-medium text-md mb-8 text-black text-left" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
              <div class="mt-12 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start">
                <button href="/">
                <div  class="mb-[70px] text-lg font-bold text-gray-800 hover:text-white hover:bg-gray-800 border-gray-800  border-4 rounded-full px-8 py-3 flex items-center justify-center">
                  Konsultasi Gratis</div>
                  </button>
                  </div>
                  </div>
                  <div class="mt-6 md:col-span-1 flex justify-center  items-center">
                  <Image src='/3426526-removebg-preview.png' alt='Gambar' width='500' height='500'></Image>
                  </div>
                      </div>
                      </div>
                      </div>
    );
  };
  
  export default service;