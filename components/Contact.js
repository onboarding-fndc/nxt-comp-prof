"use client";

import { useState } from "react";

const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);
    }

  return (
    
    <>
      <form
        onSubmit={handleSubmit}
        className="py-6 px-2 mt-4 border-t flex flex-col mx-auto gap-5  bg-slate-50"
      >
        <div>
          <label htmlFor="fullname" >Full Name</label>
          <input className="px-2"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" >Email</label>
          <input className="px-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message" >Your Message</label>
          <textarea 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32 px-2"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 mx-10 rounded-full text-white font-bold" type="submit">
          Send
        </button>

       
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                
                <a>Email: info@example.com</a>
                <a>Number: +628123456789</a>
                <a>
                   Palmerah Jakarta, ID 11480
                </a>
                    <span class="flex flex-col-3 justify-center">
                        <a class="text-blue-600">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-4 text-blue-400">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                </path>
                            </svg>
                         </a>
                        <a class="ml-4 text-yellow-700">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5">
                                    </rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01">
                                    </path>
                            </svg>
                        </a>
                        </span>
                    </div>

       
      </form>

    </>
  )
}

export default Contact