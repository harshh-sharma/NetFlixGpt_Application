import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm,setSignInForm] = useState(true);
    const formHandler = () => {
        setSignInForm(!isSignInForm);
    }
  return (
    <div class="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-no-repeat h-screen bg-opacity-25">
      <div className="bg-gradient-to-b from-black h-screen">
        <Header />
        <div className="flex justify-center items-center h-auto pt-5 pb-22 ">
          <form className="max-w-96 h-[28rem] bg-black py-5 px-10 gap-2 shadow-xl shadow-gray-100 bg-opacity-65">
            <h2 className="text-white font-semibold text-xl my-5">{isSignInForm ? 'Sign In':'Sign up'}</h2>
            {!isSignInForm && <input placeholder="Enter yor name" type="text" className="w-full px-5 py-2 mt-1 mb-1 bg-slate-900 rounded-lg placeholder:font-semibold" /> }
            <input placeholder="Email or phone number" type="text" className="w-full px-5 py-2 mt-1 mb-1 bg-slate-900 rounded-lg placeholder:font-semibold" />
            <input placeholder="Password" type="text" className="w-full px-5 py-2 mt-1 mb-7 bg-slate-900 rounded-lg placeholder:font-semibold" />
            <button className="bg-[#FF2F12] px-5 p-2 w-full text-xl font-semibold text-white rounded-lg mb-3">{isSignInForm?'Sign In':'Sign up'}</button>
            <div className="flex justify-between ">
              <span className="tesemibold text-slate-700 font-semibold">Remember me</span>
              <span className="tesemibold text-slate-700 font-semibold">Need Help?</span>
            </div>
            <din className='flex mt-7 gap-2'>
              <span className="text-slate-700">{isSignInForm ? 'New to Netflix?' : 'Already sign in'}</span>
              <span className="text-white cursor-pointer" onClick={formHandler}>{isSignInForm ? 'Sign up':'Sign in'}</span>
            </din>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
