import { Helmet } from "react-helmet-async";

export type PageTitleProps = {
    title: string
}

export const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - Carlos Adrian Garcia Personal Website</title>
        </Helmet>
    )
}