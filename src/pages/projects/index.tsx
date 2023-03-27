import { SiConstruct3 } from 'react-icons/si'
import { useData } from '../../hooks'
import { useEffect } from 'react'
import { Avatar } from '../../components'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.css'

export function Projects() {

    const { avatars, handleImageChange } = useData()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }

    useEffect(() => {
        handleImageChange(false, avatars.coding)
    }, [])

    return (
        <section id="projects" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
            <div className="relative w-full flex items-center justify-center">
                <div className="lg:hidden absolute z-10 top-[10rem] w-[260px]" data-aos="fade-right">
                    <Avatar absolute={false} width="260px" />
                </div>
            </div>
            <div className='relative top-[300px] mb-[2rem] px-[2rem] lg:top-0 lg:mb-0 lg:px-0 dark:bg-[#111111] lg:rounded-2xl lg:h-[35rem]'>
                <Slider {...settings}>
                    <div className='lg:h-[32rem]'>
                        <div data-aos="fade-up" className='flex flex-row justify-center items-center gap-4 py-[10rem] h-full'>
                            <span className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">
                                <SiConstruct3 className='animate-spin' />
                            </span>
                            <p className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">Coming Soon...</p>
                        </div>
                    </div>
                    <div className='lg:h-[32rem]'>
                        <div data-aos="fade-up" className='flex flex-row justify-center items-center gap-4 py-[10rem] h-full'>
                            <span className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">
                                <SiConstruct3 className='animate-spin' />
                            </span>
                            <p className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">Still not here...</p>
                        </div>
                    </div>
                    <div className='lg:h-[32rem]'>
                        <div data-aos="fade-up" className='flex flex-row justify-center items-center gap-4 py-[10rem] h-full'>
                            <span className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">
                                <SiConstruct3 className='animate-spin' />
                            </span>
                            <p className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">Still...</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}