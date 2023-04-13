import type { NextPage } from 'next'
import Head from 'next/head'


interface MyHeadProps {
  title?: string
  thumbnailUrl?: string
  description?: string
}

const MyHead: NextPage<MyHeadProps> = ({title, thumbnailUrl, description}) => {
  const siteName = "pwpw-cat portfolio site"
  if (title === undefined) {
    title = siteName
  } else {
    title = `${title} - ${siteName}`
  }

  // if (thumbnailUrl === undefined) {
  //   thumbnailUrl = 'images/ogp.png';
  // }

  if (description === undefined) {
    description = "pwpw-cat ポートフォリオサイトです"
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="twitter:card" content="summary"/>
      <meta property="og:title" content={title}/>
      <meta property="og:image" content='images/ogp.png'/>
      <meta property="og:description" content={description}/>
      <meta property="og:type" content="website" />
      
    </Head>
  )
}

export default MyHead