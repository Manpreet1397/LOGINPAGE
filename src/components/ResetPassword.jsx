import React from 'react'
import logo from '/Users/manpreetsingh/Desktop/csloginpage/public/phylum.jpeg';

const ResetPassword = () => {
    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center gap-8'>
            
            <img src={logo} alt="Logo" className="h-14 w-113 rounded-3xl" />
                <form action="" className='flex flex-col gap-4 w-[35%] border-2 border-black px-12 py-6 rounded-2xl backdrop-blur-lg'>
                    <h1 className=' text-2xl'>RESET  YOUR PASSWORD</h1>
                    <p className=' text-base text-gray-400'>Enter a New Password</p>
                    <div className="flex items-center">
                    <input className=' border-2 border-black p-2 rounded-xl w-[100%]' type="password" name="password" id="password" placeholder='🔑 *****' />
                </div>
                <div className="flex items-center">
                    <input className=' border-2 border-black p-2 rounded-xl w-[100%]' type="password" name="password" id="password" placeholder='🔑 Confirm password' />
                </div>
                    
                    <input className='bg-blue-500 text-white rounded-xl p-2 border-none cursor-pointer' type="submit" value="CONFIRM" />
                </form>
                
        </div>
    )
}

export default ResetPassword;
