import dowloadIcon from '../../assets/icons/download.png'

type DownloadButtonProps = {
    href: string,
    text?: string
}

export function DownloadButton({ href, text } : DownloadButtonProps) {

    return (
        <a
            href={href}
            download
            className="inline-flex w-[14rem] gap-2 items-center justify-center mx-auto bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition ease-in-out hover:bg-gradient-to-l hover:scale-105 px-8 py-3 text-lg text-white rounded-full mt-6"
          >
            <img src={dowloadIcon} alt="icon" className="mr-2" />
            Download {text && text}
          </a>
    )
}