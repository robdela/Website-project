import { Outlet, Link} from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import logo from '../userLogo.png';

const Layout = () => {
  return (
    <>
  
  
       <nav class = " text-slate-50 p-4  grid grid-cols-6 bg-gray-950 border-b-2 border-solid border-gray-700 " >
        <div class = "col-span-1">
        <Link to="/">
        <img class ="w-16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F2300px-React-icon.svg.png&f=1&nofb=1&ipt=2f3430b40a9ffe5142191e4a2f3c79c132247f702acf9fa1b6f89075b7b9708b&ipo=images"></img>
        </Link>
        </div>

        <div class = " self-end col-span-4 flex justify-center -mb-4">
          <ul class = "flex" >

          <li class = "mx-10">
              <CategoriesMenu />
            </li>
         


            <li class = "mx-10">
                <p>test</p>
            </li>
            <li class = "mx-10">
              <Link to="/user">User</Link>
            </li>

            
          </ul>
        </div>

        <div class = "flex justify-end col col-span-1 self-center">
          
          <img class ="w-8 h-8" src={logo} alt="User" />
        </div>
       
      </nav>

      <Outlet /> 

      <footer class = "bg-gray-950  w-full text-slate-50 pt-4 border-solid border-t-2 border-red-600">
        <div class = " flex justify-center">
          <div class = "flex flex-col ml-6 mr-6 text text-red-500">
            <p class = "text-xl text-red-600 mb-2 ">Help Center</p>
            <Link to="/ContactUs" class = "underline">Contact Us</Link>
            <Link to="/FAQ" class = "underline">FAQ</Link>
            <Link to="/Privacypolicy" class = "underline">Privacy Policy</Link>
            <Link to="/Termsofservice" class = "underline">Terms of Service</Link>
          </div>

         
        
        </div>
        
        <p class="text-center mt-10 text-slate-600" >All rights reserved</p>
        
       
        
      </footer>
    </>
  )
};

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const CategoriesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = async event => {
    await delay(1);
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  return (
    <div ref={dropdownRef} 
    onMouseEnter={toggleDropdown}
    onMouseLeave={toggleDropdown}
    >
      
    <button className="dropbtn -mb-2 pb-2"> Categories </button>
    
    {isOpen && (
      <div className=" animate-fade">
        
        <div className="bg-slate-900 text-center py-2 w-full mt-1 z-10 absolute  left-1/2 transform -translate-x-1/2">
          <div>
            <ul className="py-3">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}

export default Layout;