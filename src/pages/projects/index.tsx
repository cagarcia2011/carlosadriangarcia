import { SiConstruct3 } from 'react-icons/si'
import { useData } from '../../hooks'
import { useEffect } from 'react'
import { Avatar } from '../../components'

export function Projects() {

    const { avatars, handleImageChange } = useData()

    useEffect(() => {
        handleImageChange(false, avatars.coding)
    }, [])

    return (
        <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
            <div className="relative w-full flex items-center justify-center">
                <div className="lg:hidden absolute z-10 top-[10rem] w-[260px]" data-aos="fade-right">
                    <Avatar absolute={false} width="260px" />
                </div>
            </div>
            <div data-aos="fade-up" className='flex flex-row justify-center items-center gap-4 py-[10rem] h-[100svh] lg:h-auto'>
                <span className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">
                    <SiConstruct3 className='animate-spin' />
                </span>
                <p className="text-gray-lite  dark:text-color-910 leading-7 text-6xl">Coming Soon...</p>
            </div>
        </section>
    )
}