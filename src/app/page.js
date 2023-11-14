
import Link from 'next/link'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Carousel from "../components/Carousels"
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Home
        </title>
      </Head>
      <main className='main-parcel'><Navbar />
      <Carousel />
      <Hero />
      <Footer />
      </main>
    </div>

  )
}
