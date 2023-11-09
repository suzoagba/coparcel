
import Link from 'next/link'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Carousel from "../components/Carousels"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Hero />
      <Footer />
      <h1>Home Page</h1>
      <Link href={"/about"}>
        Go to about page
      </Link>
    </div>

  )
}
