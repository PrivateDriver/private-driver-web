import Head from 'next/head'
import Footer from '@components/Footer'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin-ext'], weight: ['400', '500'] })

const title = 'PrivateDriver | A Driver Driven App'
const description = 'PrivateDriver. A Driver Driven App. Coming soon.'
const url = 'https://privatedriver.io/'
const image = 'https://privatedriver.io/privatedriver-logo.png'

export default function Home() {
  return (
    <div className={`container ${roboto.className}`}>
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
        <img
          className="main-logo"
          src="/privatedriver-logo.png"
          alt="privatedriver.io"
        />
        <h1 className="tagline">A Driver Driven App</h1>
        <p className="note">Coming soon</p>
        <div className="stores">
          <button type="button" className="store" disabled aria-disabled="true">
            App Store
          </button>
          <button type="button" className="store" disabled aria-disabled="true">
            Google Play
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
