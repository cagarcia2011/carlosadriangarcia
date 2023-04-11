import { useData } from '../../hooks'
import { useEffect, useRef } from 'react'
import { Avatar, Footer, PageTitle } from '../../components'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.css'
import { ProjectCard } from './ProjectCard'

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

interface ArrowProps {
    direction: string;
}

const Arrow = ({ direction }: ArrowProps) => {

    return (
        <div className={'text-lg '}>
            {
                direction === "right"
                    ? <BsChevronRight size={30} color='#56b0bc' />
                    : <BsChevronLeft size={30} color='#56b0bc' />
            }
        </div>
    )
}

export function Projects() {
    const slider = useRef(null)

    const { avatars, handleImageChange, projectsArray } = useData()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <></>,
        prevArrow: <></>
    }

    useEffect(() => {
        handleImageChange(false, avatars.coding)
    }, [])

    return (
        <section id="projects" className="bg-white relative lg:rounded-2xl dark:bg-[#111111] h-[58rem] lg:h-auto lg:mb-20 lg:px-[2rem] lg:overflow-hidden sm:overflow-visible">
            <PageTitle title={"Projects"} />
            <div className="relative w-full flex items-center justify-center">
                <div className="lg:hidden absolute z-10 top-[10rem] w-[200px]">
                    <Avatar absolute={false} width="200px" />
                </div>
            </div>
            <div className='hidden lg:block pt-12 md:pt-12 md:px-10 lg:px-14'>
                <h2 className='after-effect after:left-44 lg:block hidden'>Projects</h2>
            </div>
            <button onClick={() => slider?.current?.slickNext && slider?.current?.slickNext()} className='group border-none bg-none ring-0 absolute top-[32rem] z-50 lg:top-[24rem] right-2 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-110 active:opacity-50 transition-all duration-200 ease-in-out'>
                <Arrow direction='right' />
            </button>
            <button onClick={() => slider?.current?.slickPrev && slider?.current?.slickPrev()} className='group border-none bg-none ring-0 absolute top-[32rem] z-50 lg:top-[24rem] left-2 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-110 active:opacity-50 transition-all duration-200 ease-in-out'>
                <Arrow direction='left' />
            </button>
            <div id="projects-carousel" className='relative top-[220px] lg:top-0 lg:mb-10 lg:px-0 dark:bg-[#111111] lg:rounded-2xl lg:h-[38rem]'>
                <h2 className='lg:hidden after-effect after:left-48 ml-4'>Projects</h2>
                <Slider ref={slider} {...settings}>
                    {
                        projectsArray.map(project => (
                            <ProjectCard key={`${project.id}-${project.title}`} {...project} />
                        ))
                    }
                </Slider>
                <div className='relative block top-[4rem] lg:hidden'>
                    <Footer />
                </div>
            </div>
            <div className='hidden lg:block'>
                <Footer />
            </div>
        </section>
    )
}