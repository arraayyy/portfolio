import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to elevate <span className='text-purple'>your</span> digital presence?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>
                Get in touch today and let&apos;s discuss how I can assist you in reaching your goals.
            </p>
            <a href='mailto:rakcodoy@gmail.com'>
                <MagicButton 
                    title="Let's get in touch"  
                    icon={<FaLocationArrow />}
                    position='right'       
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm'>
                © 2024 Roe Ann Kim Codoy
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a 
                        key={profile.id} 
                        href={profile.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                        aria-label={`Link to ${profile.url}`} // Accessibility improvement
                    >
                        <img src={profile.img} alt={profile.id.toString()} width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer