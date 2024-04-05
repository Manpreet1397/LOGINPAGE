import React from 'react';
import logo from '/Users/manpreetsingh/Desktop/csloginpage/public/phylum.jpeg'; // Import your logo file

const Login = () => {
    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center gap-8'>
            <img src={logo} alt="Logo" className="h-14 w-113 rounded-3xl" />
            <form action="/" className='flex flex-col gap-4 w-[35%] border-2 border-black px-12 py-6 rounded-2xl backdrop-blur-lg'>
                <h1 className=' text-2xl'>Sign in</h1>
                <p className=' text-base text-gray-400'>Login to your account</p>
                <div className="flex items-center">
                    <input className=' border-2 border-black p-2 rounded-xl w-[100%]' type="email" name="email" id="email" placeholder='📧 someone@domain.com' />
                </div>
                <div className="flex items-center">
                    <input className=' border-2 border-black p-2 rounded-xl w-[100%]' type="password" name="password" id="password" placeholder='🔑 *' />
                </div>
                <div className='flex gap-2'>
                    <input className=' scale-150' type="checkbox" name="rememberme" id="rememberme" />
                    <label htmlFor="checkbox">Remember me</label>
                </div>
                
                <input className='bg-blue-500 text-white rounded-xl p-2 border-none cursor-pointer' type="submit" value="Sign in" />
            </form>
            <div className='flex flex-col justify-center items-center'>
                <p>Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
                <p><a href="#" className="text-blue-500">Forgot Password?</a></p>
            </div>
        </div>
    );
}

export default Login;
