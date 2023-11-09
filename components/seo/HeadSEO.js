import React from 'react'
import Head from 'next/head'

const HeadSEO = ({ title, description, TabTitle}) => {

  return (
    <Head>
        <title>{TabTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <link rel="icon" href="/favicon.ico" />
     </Head>
  )
}


export default HeadSEO