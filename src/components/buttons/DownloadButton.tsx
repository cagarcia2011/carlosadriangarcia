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
            className="inline-flex items-center mx-auto bg-gradient-to-r from-accent-color to-variant-bg duration-200 transition ease-linear hover:bg-gradient-to-l px-8 py-3 text-lg text-white rounded-[35px] mt-6"
          >
            <img src={dowloadIcon} alt="icon" className="mr-2" />
            Download {text && text}
          </a>
    )
}