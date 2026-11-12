import Head from 'next/head'
import Footer from '@components/Footer'
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin-ext'], weight: ['100']})

const title = 'PrivateDriver | Private membership for limousine owners'
const description = 'PrivateDriver is a private membership platform where owners of private limousines book vetted chauffeurs. Trips are pre-arranged only. It is not a public rideshare.'
const url = 'https://privatedriver.io/'
const image = 'https://privatedriver.io/privatedriver-logo.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="icon" href="/privatedriver-icon.png" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <main>
        <img className='main-logo' src="/privatedriver-logo.png" alt="PrivateDriver Logo"  />
        <h1 className={roboto.className}>A Driver Driven App!</h1>
      </main>

      <Footer />
    </div>
  )
}
