import Link from 'next/link'
import Navbar from "../../components/Navbar"
import Footer from '@/components/Footer'
import AboutPage from '@/components/About'

export default function About() {
  return (
    <div>
        <Navbar />
        <AboutPage />
        <Footer />
    {/* <h1 className='text-red'>This is About Page</h1>
    <Link href={"/"}>
        Go back to Home Page
    </Link>
    <Link href={"/contact"}>
        Go to Contact Page
    </Link> */}
    </div>
    
  )
}
