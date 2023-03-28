import { useData } from '../../hooks'
import { useEffect } from 'react'
import { Avatar, Footer, PageTitle } from '../../components'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './projects.css'
import { ProjectCard } from './ProjectCard'

export function Projects() {

    const { avatars, handleImageChange, projectsArray } = useData()

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
        <section id="projects" className="bg-white relative lg:rounded-2xl dark:bg-[#111111] h-[66rem] lg:h-auto lg:mb-20 lg:px-[2rem] lg:overflow-hidden sm:overflow-visible">
            <PageTitle title={"Projects"}/>
            <div className="relative w-full flex items-center justify-center">
                <div className="lg:hidden absolute z-10 top-[10rem] w-[200px]" data-aos="fade-right">
                    <Avatar absolute={false} width="200px" />
                </div>
            </div>
            <div data-aos="fade-left" className='hidden lg:block pt-12 md:pt-12 md:px-10 lg:px-14'>
                <h2 className='after-effect after:left-44 lg:block hidden'>Projects</h2>
            </div>
            <div data-aos="fade-up" id="projects-carousel" className='relative top-[250px] pb-[2rem] px-[2rem] lg:top-0 lg:mb-10 lg:px-0 dark:bg-[#111111] lg:rounded-2xl lg:h-[35rem]'>
                <h2 className='lg:hidden after-effect after:left-48'>Projects</h2>
                <Slider {...settings}>
                    {
                        projectsArray.map(project => (
                            <ProjectCard key={`${project.id}-${project.title}`} {...project}/>
                        ))
                    }
                </Slider>
                <div className='relative block top-[2rem] lg:hidden'>
                    <Footer />
                </div>
            </div>
            <div className='hidden lg:block'>
                <Footer />
            </div>
        </section>
    )
}