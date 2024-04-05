import React from 'react'
import logo from '/Users/manpreetsingh/Desktop/csloginpage/public/phylum.jpeg';

const ForgotPassword = () => {
    return (
        <div className='flex flex-col w-screen h-screen items-center justify-center gap-8'>
            
            <img src={logo} alt="Logo" className="h-14 w-113 rounded-3xl" />
                <form action="" className='flex flex-col gap-4 w-[35%] border-2 border-black px-12 py-6 rounded-2xl backdrop-blur-lg'>
                    <h1 className=' text-2xl'>Email Instruction Sent </h1>
                    <p className=' text-base text-black'>Check your Email for password </p>
                    
                  
                    
                    
                </form>
                
        </div>
    )
}

export default ForgotPassword;
