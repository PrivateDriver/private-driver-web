import Head from 'next/head'
import Footer from '@components/Footer'
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin-ext'], weight: ['100']})
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PrivateDriver</title>
        <link rel="icon" href="/privatedriver-icon.png" />
      </Head>

      <main>
        <img className='main-logo' src="/privatedriver-logo.png" alt="PrivateDriver Logo"  />
        <h1 className={roboto.className}>A Driver Driven App!</h1>
      </main>

      <Footer />
    </div>
  )
}
