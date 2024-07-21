import { CSSprojects, Personalprojects, projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>

        {/* RECENT PROJECTS */}
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>
                recent Projects
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({ id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt='bg-img' />
                            </div>
                            <img 
                                src={img} 
                                alt={title} 
                                className='z-10 absolute bottom-0' 
                                style={{ width: '464px', height: '300px', transform: 'rotate(4deg) translateY(8%)' }} 
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                        style={{ transform: `translateX(-${5 * index * 2} px)`}}
                                    >
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    See More
                                </p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
        
        {/* PERSONAL PROJECTS */}
        <h1 className='heading mt-10'>
            Personal {' '}
            <span className='text-purple'>
                Projects
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {Personalprojects.map(({ id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt='bg-img' />
                            </div>
                            <img 
                                src={img} 
                                alt={title} 
                                className='z-10 absolute bottom-0' 
                                style={{ width: '464px', height: '300px', transform: 'rotate(3deg) translateY(8%)' }} 
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                        style={{ transform: `translateX(-${5 * index * 2} px)`}}
                                    >
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    See More
                                </p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
       
        {/* DESIGN/CSS PROJECTS */}
        <h1 className='heading mt-10 mb-5'>
            Design/CSS {' '}
            <span className='text-purple'>
                Projects
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-x-24'>
            {CSSprojects.map(({ id, title, img, link}) => (
                <div key={id} className='sm:h-[30rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt='bg-img' />
                            </div>
                            <img 
                                src={img} 
                                alt={title} 
                                className='z-10 absolute bottom-0' 
                                style={{ width: '464px', height: '300px', transform: 'rotate(3deg) translateY(8%)' }} 
                            />
                        </div>
                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    See More
                                </p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>

    
  )
}

export default RecentProjects