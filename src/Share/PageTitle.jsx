import React from 'react'
import { Helmet } from 'react-helmet-async'

const PageTitle = ({title}) => {
  return (
    <Helmet>
      <title>{title} - Carlos Adrian Garcia Personal Website</title>
    </Helmet>
  )
}

export default PageTitle